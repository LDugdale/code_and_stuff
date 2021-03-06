const fs = require('fs');

// create JSON of pages added to pages folder
const [pages, pageLookup, pageRoutes] = createPagesjson('./pages/posts/', [], {}, []);

// elements of file to be created
const fileElements = {
    pageType: "\nexport type Page = {\n    name: string\n    friendlyName: string\n    isDirectory: boolean\n    path: string\n    metadata?: Metadata\n    pages?: Array<Page>\n    parents: Array<ParentPage>\n};",
    parentPageType: "\nexport type ParentPage = {\n    name: string\n    friendlyName: string\n    path: string\n};",
    metadataType: "\nexport type Metadata = {\n    createdOn: string\n    updatedOn: string\n    isPublished: boolean\n    abstract:string\n    author: string\n    tags: Array<string>\n};",
    pagesArray: `\nexport const pages: Array<Page> = ${JSON.stringify(pages, null, 2)}`,
    pageLookup: `\nexport const pageLookup: {[key: string]: Page} = ${JSON.stringify(pageLookup, null, 2)}`
}

const routeFileElements = {
    imports: `import { FC, lazy } from 'react';\n${createImports(pageRoutes)}`,
    pageRouteType: "\nexport type PageRoute = {\n    path: string\n    pageComponent?: FC\n};",
    pageRoutes: `\nexport const pageRoutes: Array<PageRoute> = ${JSON.stringify(pageRoutes, null, 2)}`
};

latestPostsFileElements = {
    imports: "import { Page } from './pageData'",
    latestPages: `\nexport const latestPages: Array<Page> = ${JSON.stringify(createLatestPages(pageLookup), null, 2)}`
}

// concatenate fileElements 
let fileBody = createFileBody(fileElements);
let routeFileBody = createFileBody(routeFileElements);
let latestPostsFileBody = createFileBody(latestPostsFileElements);

// remove quotes around pageComponent prperty to allow importing of component
routeFileBody = removePageComponentQuotes(pageRoutes, routeFileBody);

// create file
fs.writeFileSync('./src/pageData/pageData.ts', fileBody);
fs.writeFileSync('./src/pageData/latestPosts.ts', latestPostsFileBody);


// ------------------------------ functions ------------------------------ //

function createFileBody(fileElements) {
    let fileBody = '';
    Object.entries(fileElements).forEach(([key, value]) => {
        fileBody = `${fileBody}${value}\n`;
    });
    return fileBody;
}

function createLatestPages(pageLookup){

    let pageArray = [];
    Object.entries(pageLookup).forEach(([key, value]) => {
        if(!value.isDirectory){
            pageArray.push(value);
        }
    });

    pageArray.sort((a, b) => a.metadata.createdOn > b.metadata.createdOn && 1 || -1);
    return pageArray;
}

function createImports(pageRoutes) {    
    let imports = ''
    for (const page of pageRoutes) {
        imports = `${imports}const ${page.pageComponent} = lazy(() => import('.${page.path}'));\n`
    }
    return imports;
}

function removePageComponentQuotes(pageRoutes, text) {

    for (const page of pageRoutes) {
        const pageName = page.pageComponent;
        const regex = new RegExp("\"pageComponent\": \"" + pageName + "\"", "g");
        text = text.replace(regex, "\"pageComponent\": " + pageName);     
    }

    return text;
}


function createPagesjson(directory, pages, pageLookup, pageRoutes, parentPages) {

    const fileObjs = fs.readdirSync(directory, { withFileTypes: true });
    let currentParents = parentPages ? [...parentPages] : [];
    
    fileObjs.forEach(file => {
        if(file.name.includes(".json")){
            return;
        }
        const path = `${directory}${removeFileExtension(file.name)}`.replace('./pages','');
        const pageName = capitalizeFirstLetter(removeFileExtension(file.name));

        if(file.isFile()){

            const metadata = createPageMetadata(path);
            if(!metadata.isPublished){
                return;
            }

            const pageRoute = {
                path: path,
                pageComponent: pageName
            };
            const pageDetails = {
                name: pageName,
                friendlyName: pageName.replace(/_/g, ' '),
                path: path,
                isDirectory: !file.isFile(),
                parents: currentParents,
                metadata: metadata
            }
            pageLookup[path.toLowerCase()] = pageDetails;
            pages.push(pageDetails);
            pageRoutes.push(pageRoute);
        } else {
            const folderDir = directory + file.name + '/';
            const parent = [];
            parent.push({
                name: pageName,
                friendlyName: pageName.replace(/_/g, ' '),
                path: path,
            });
            const [returnedPages, returnedPageLookup, returnedPageRoutes] = createPagesjson(folderDir, [], pageLookup, pageRoutes, parent);
            
            const folderDetails = {
                name: pageName,
                friendlyName: pageName.replace(/_/g, ' '),
                path: path,
                isDirectory: !file.isFile(),
                parents: currentParents
            };
            currentParents = [];

            if(returnedPages.length == 0){
                return;
            }

            pageLookup[path.toLowerCase()] = {...folderDetails};
            folderDetails.pages = returnedPages
            pages.push(folderDetails);
        }
    });
    currentParents = [];

    return [pages, pageLookup, pageRoutes];
}

function createPageMetadata(path){
    const page = fs.readFileSync(`./pages/${path}.json`, 'utf8');
    const metadata = JSON.parse(page);
    return metadata;
}

function capitalizeFirstLetter(fileName) {
    return fileName.charAt(0).toUpperCase() + fileName.slice(1);
}

function removeFileExtension(fileName) {
    const fileNameWithoutExtension = fileName.split('.').slice(0, -1).join('.');
    return fileNameWithoutExtension ? fileNameWithoutExtension : fileName;
}
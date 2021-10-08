
export type Page = {
    name: string
    friendlyName: string
    isDirectory: boolean
    path: string
    metadata?: Metadata
    pages?: Array<Page>
    parents: Array<ParentPage>
};

export type ParentPage = {
    name: string
    friendlyName: string
    path: string
};

export type Metadata = {
    createdOn: string
    updatedOn: string
    isPublished: boolean
    abstract:string
    author: string
    tags: Array<string>
};

export const pages: Array<Page> = [
  {
    "name": "Algorithms",
    "friendlyName": "Algorithms",
    "path": "/posts/algorithms",
    "isDirectory": true,
    "parents": [
      {
        "name": "Algorithms",
        "friendlyName": "Algorithms",
        "path": "/posts/algorithms"
      }
    ],
    "pages": [
      {
        "name": "Bubble_Sort",
        "friendlyName": "Bubble Sort",
        "path": "/posts/algorithms/bubble_Sort",
        "isDirectory": false,
        "parents": [
          {
            "name": "Algorithms",
            "friendlyName": "Algorithms",
            "path": "/posts/algorithms"
          }
        ],
        "metadata": {
          "createdOn": "1.01.2011, 02:03:04.567",
          "updatedOn": "1.01.2011, 02:03:04.567",
          "isPublished": true,
          "abstract": "When I was building this blog, my biggest priority was to find a solution that would let me embed totally custom content in each post.",
          "author": "Laurie Dugdale",
          "tags": [
            "about",
            "site"
          ]
        }
      }
    ]
  },
  {
    "name": "Latest",
    "friendlyName": "Latest",
    "path": "/posts/latest",
    "isDirectory": false,
    "parents": [
      {
        "name": "Algorithms",
        "friendlyName": "Algorithms",
        "path": "/posts/algorithms"
      }
    ],
    "metadata": {
      "createdOn": "1.01.2011, 02:03:04.567",
      "updatedOn": "1.01.2011, 02:03:04.567",
      "isPublished": true,
      "abstract": "When I was building this blog, my biggest priority was to find a solution that would let me embed totally custom content in each post.",
      "author": "Laurie Dugdale",
      "tags": [
        "about",
        "site"
      ]
    }
  },
  {
    "name": "Test",
    "friendlyName": "Test",
    "path": "/posts/test",
    "isDirectory": false,
    "parents": [
      {
        "name": "Algorithms",
        "friendlyName": "Algorithms",
        "path": "/posts/algorithms"
      }
    ],
    "metadata": {
      "createdOn": "1.01.2011, 02:03:04.567",
      "updatedOn": "1.01.2011, 02:03:04.567",
      "isPublished": true,
      "abstract": "When I was building this blog, my biggest priority was to find a solution that would let me embed totally custom content in each post.",
      "author": "Laurie Dugdale",
      "tags": [
        "about",
        "site"
      ]
    }
  }
]

export const pageLookup: {[key: string]: Page} = {
  "/posts/algorithms/bubble_sort": {
    "name": "Bubble_Sort",
    "friendlyName": "Bubble Sort",
    "path": "/posts/algorithms/bubble_Sort",
    "isDirectory": false,
    "parents": [
      {
        "name": "Algorithms",
        "friendlyName": "Algorithms",
        "path": "/posts/algorithms"
      }
    ],
    "metadata": {
      "createdOn": "1.01.2011, 02:03:04.567",
      "updatedOn": "1.01.2011, 02:03:04.567",
      "isPublished": true,
      "abstract": "When I was building this blog, my biggest priority was to find a solution that would let me embed totally custom content in each post.",
      "author": "Laurie Dugdale",
      "tags": [
        "about",
        "site"
      ]
    }
  },
  "/posts/algorithms": {
    "name": "Algorithms",
    "friendlyName": "Algorithms",
    "path": "/posts/algorithms",
    "isDirectory": true,
    "parents": [
      {
        "name": "Algorithms",
        "friendlyName": "Algorithms",
        "path": "/posts/algorithms"
      }
    ]
  },
  "/posts/latest": {
    "name": "Latest",
    "friendlyName": "Latest",
    "path": "/posts/latest",
    "isDirectory": false,
    "parents": [
      {
        "name": "Algorithms",
        "friendlyName": "Algorithms",
        "path": "/posts/algorithms"
      }
    ],
    "metadata": {
      "createdOn": "1.01.2011, 02:03:04.567",
      "updatedOn": "1.01.2011, 02:03:04.567",
      "isPublished": true,
      "abstract": "When I was building this blog, my biggest priority was to find a solution that would let me embed totally custom content in each post.",
      "author": "Laurie Dugdale",
      "tags": [
        "about",
        "site"
      ]
    }
  },
  "/posts/test": {
    "name": "Test",
    "friendlyName": "Test",
    "path": "/posts/test",
    "isDirectory": false,
    "parents": [
      {
        "name": "Algorithms",
        "friendlyName": "Algorithms",
        "path": "/posts/algorithms"
      }
    ],
    "metadata": {
      "createdOn": "1.01.2011, 02:03:04.567",
      "updatedOn": "1.01.2011, 02:03:04.567",
      "isPublished": true,
      "abstract": "When I was building this blog, my biggest priority was to find a solution that would let me embed totally custom content in each post.",
      "author": "Laurie Dugdale",
      "tags": [
        "about",
        "site"
      ]
    }
  }
}

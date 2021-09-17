import { FC } from 'react';


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
    author: string
    tags: Array<string>
};

export const pages: Array<Page> = [
  {
    "name": "About",
    "friendlyName": "About",
    "path": "/pages/about",
    "isDirectory": false,
    "parents": [
      {
        "name": "Algorithms",
        "friendlyName": "Algorithms",
        "path": "/pages/algorithms"
      }
    ],
    "metadata": {
      "createdOn": "1.01.2011, 02:03:04.567",
      "updatedOn": "1.01.2011, 02:03:04.567",
      "isPublished": true,
      "author": "Laurie Dugdale",
      "tags": [
        "about",
        "site"
      ]
    }
  },
  {
    "name": "Algorithms",
    "friendlyName": "Algorithms",
    "path": "/pages/algorithms",
    "isDirectory": true,
    "parents": [
      {
        "name": "Algorithms",
        "friendlyName": "Algorithms",
        "path": "/pages/algorithms"
      }
    ],
    "pages": [
      {
        "name": "Bubble_Sort",
        "friendlyName": "Bubble Sort",
        "path": "/pages/algorithms/bubble_Sort",
        "isDirectory": false,
        "parents": [
          {
            "name": "Algorithms",
            "friendlyName": "Algorithms",
            "path": "/pages/algorithms"
          }
        ],
        "metadata": {
          "createdOn": "1.01.2011, 02:03:04.567",
          "updatedOn": "1.01.2011, 02:03:04.567",
          "isPublished": true,
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
    "path": "/pages/latest",
    "isDirectory": false,
    "parents": [
      {
        "name": "Algorithms",
        "friendlyName": "Algorithms",
        "path": "/pages/algorithms"
      }
    ],
    "metadata": {
      "createdOn": "1.01.2011, 02:03:04.567",
      "updatedOn": "1.01.2011, 02:03:04.567",
      "isPublished": true,
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
    "path": "/pages/test",
    "isDirectory": false,
    "parents": [
      {
        "name": "Algorithms",
        "friendlyName": "Algorithms",
        "path": "/pages/algorithms"
      }
    ],
    "metadata": {
      "createdOn": "1.01.2011, 02:03:04.567",
      "updatedOn": "1.01.2011, 02:03:04.567",
      "isPublished": true,
      "author": "Laurie Dugdale",
      "tags": [
        "about",
        "site"
      ]
    }
  }
]

export const pageLookup: {[key: string]: Page} = {
  "/pages/about": {
    "name": "About",
    "friendlyName": "About",
    "path": "/pages/about",
    "isDirectory": false,
    "parents": [
      {
        "name": "Algorithms",
        "friendlyName": "Algorithms",
        "path": "/pages/algorithms"
      }
    ],
    "metadata": {
      "createdOn": "1.01.2011, 02:03:04.567",
      "updatedOn": "1.01.2011, 02:03:04.567",
      "isPublished": true,
      "author": "Laurie Dugdale",
      "tags": [
        "about",
        "site"
      ]
    }
  },
  "/pages/algorithms/bubble_sort": {
    "name": "Bubble_Sort",
    "friendlyName": "Bubble Sort",
    "path": "/pages/algorithms/bubble_Sort",
    "isDirectory": false,
    "parents": [
      {
        "name": "Algorithms",
        "friendlyName": "Algorithms",
        "path": "/pages/algorithms"
      }
    ],
    "metadata": {
      "createdOn": "1.01.2011, 02:03:04.567",
      "updatedOn": "1.01.2011, 02:03:04.567",
      "isPublished": true,
      "author": "Laurie Dugdale",
      "tags": [
        "about",
        "site"
      ]
    }
  },
  "/pages/algorithms": {
    "name": "Algorithms",
    "friendlyName": "Algorithms",
    "path": "/pages/algorithms",
    "isDirectory": true,
    "parents": [
      {
        "name": "Algorithms",
        "friendlyName": "Algorithms",
        "path": "/pages/algorithms"
      }
    ]
  },
  "/pages/latest": {
    "name": "Latest",
    "friendlyName": "Latest",
    "path": "/pages/latest",
    "isDirectory": false,
    "parents": [
      {
        "name": "Algorithms",
        "friendlyName": "Algorithms",
        "path": "/pages/algorithms"
      }
    ],
    "metadata": {
      "createdOn": "1.01.2011, 02:03:04.567",
      "updatedOn": "1.01.2011, 02:03:04.567",
      "isPublished": true,
      "author": "Laurie Dugdale",
      "tags": [
        "about",
        "site"
      ]
    }
  },
  "/pages/test": {
    "name": "Test",
    "friendlyName": "Test",
    "path": "/pages/test",
    "isDirectory": false,
    "parents": [
      {
        "name": "Algorithms",
        "friendlyName": "Algorithms",
        "path": "/pages/algorithms"
      }
    ],
    "metadata": {
      "createdOn": "1.01.2011, 02:03:04.567",
      "updatedOn": "1.01.2011, 02:03:04.567",
      "isPublished": true,
      "author": "Laurie Dugdale",
      "tags": [
        "about",
        "site"
      ]
    }
  }
}

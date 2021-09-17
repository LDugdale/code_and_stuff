import { FC, lazy } from 'react';
const About = lazy(() => import('./pages/about'));
const Bubble_Sort = lazy(() => import('./pages/algorithms/bubble_Sort'));
const Latest = lazy(() => import('./pages/latest'));
const Test = lazy(() => import('./pages/test'));


export type PageRoute = {
    path: string
    pageComponent?: FC
};

export const pageRoutes: Array<PageRoute> = [
  {
    "path": "/pages/about",
    "pageComponent": About
  },
  {
    "path": "/pages/algorithms/bubble_Sort",
    "pageComponent": Bubble_Sort
  },
  {
    "path": "/pages/latest",
    "pageComponent": Latest
  },
  {
    "path": "/pages/test",
    "pageComponent": Test
  }
]

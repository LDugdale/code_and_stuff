import React, {FC, lazy, ReactElement, Suspense } from 'react';
import { Switch, Route } from "react-router-dom";
import { pageRoutes } from '../routes';
const Home = lazy(() => import('../components/home'));

export const PageRoutes: FC = (): ReactElement => {

    return (
        <Suspense fallback={<div>Loading...</div>}>

            <Switch>
                <Route path='/' strict exact>
                    <Home />
                </Route>
                {pageRoutes.map((page, index) => {

                    const PageComponent = page.pageComponent;
                    const path = page.path;

                    return (
                        <Route path={path} strict key={index}>
                            {PageComponent && <PageComponent />}
                        </Route>
                    );
                })}
            </Switch>
        </Suspense>
    );
}
import React, {FC, ReactElement, Suspense } from 'react';
import { Switch, Route } from "react-router-dom";
import { pageRoutes } from '../routes';

export const PageRoutes: FC = (): ReactElement => {

    return (
        <Suspense fallback={<div>Loading...</div>}>

            <Switch>
                {pageRoutes.map((page, index) => {

                    const PageComponent = page.pageComponent;
                    const path = page.path;

                    return (
                        <Route path={path} key={index}>
                            {PageComponent && <PageComponent />}
                        </Route>
                    );
                })}
            </Switch>
        </Suspense>
    );
}
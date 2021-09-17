import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { FC, ReactElement } from 'react'
import { PageRoutes } from '../../routing';
import Menu from '../menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1
    }
  }),
);

const Layout: FC = (): ReactElement => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Menu />
            <main className={classes.content}>
                <PageRoutes/>
            </main>
        </div>
    );
}



export default Layout;
import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react'
import { PageRoutes } from '../../routing';
import Menu from '../menu';

const Layout: FC = (): ReactElement => {

    return (
        <Box
          sx={{
            display: 'flex',
          }}
        >
            <Menu />
            <Box
              component='main'
              sx={{
                flexGrow: 1
              }}
            >
                <PageRoutes/>
            </Box>
        </Box>
    );
}



export default Layout;
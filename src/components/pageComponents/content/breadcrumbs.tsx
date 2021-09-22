import { Box, Breadcrumbs, Theme, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { useLocation } from 'react-router';

export const BreadCrumbs: FC = (): ReactElement => {

    const location = useLocation();

    const paths = location.pathname.replace('/pages/', 'home/').replace(/_/g, ' ').split('/');

    return (
        <Box
            sx={{
                alignItems: 'center',
                color: '#8d98ab',
                display: 'flex',
                flexDirection: 'row',
                marginBottom: (theme: Theme) => theme.spacing(1),
                width: '100%',
            }}
        >
            <Breadcrumbs 
                separator='>'
                sx={{
                    color: '#8d98ab',
                }}
            >
                {paths.map((path, index) => {
                
                    return(
                        <Typography
                            key={index}
                            variant='body1'
                        >
                            {path.charAt(0).toUpperCase() + path.slice(1)}
                        </Typography>
                    );
                })}
            </Breadcrumbs>

        </Box>
    );
}

export default BreadCrumbs;
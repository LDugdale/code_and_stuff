import { Container, Box, Theme, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import BreadCrumbs from './breadcrumbs';

type ContentProps = {
    title: string
    children?: React.ReactNode;
}

export const Content: FC<ContentProps> = ({title, children}: ContentProps): ReactElement<ContentProps> => {

    return (
        <Box>
            <Box
                sx={{
                    backgroundColor: '#3a414e',
                    paddingTop: (theme: Theme) => theme.spacing(10),
                    paddingBottom: (theme: Theme) => theme.spacing(5),
                    color: (theme: Theme) => theme.palette.common.white
                }}
            >
                <Container 
                    maxWidth='sm'
                    sx={{
                        flexGrow: 1,
                    }}
                > 
                    <BreadCrumbs />
                    <Typography
                        variant='h1'
                        align='left'
                    >
                        {title}
                    </Typography>
                </Container>
            </Box>
            <Container 
                sx={{
                    paddingTop: (theme: Theme) => theme.spacing(5),
                }}
                maxWidth='sm'
            > 
                <div>{children}</div>
            </Container>
        </Box>
    );
}

export default Content;
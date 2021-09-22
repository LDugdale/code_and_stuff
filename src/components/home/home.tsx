import { Container, Stack, Typography, Box, Theme } from '@mui/material';
import React, {FC, ReactElement} from 'react';
import { latestPages } from '../../latestPosts';
import LatestItem from './latestItem';

const Home: FC = (): ReactElement => {

    return (
        <Box
            sx={{
                backgroundColor: '#3a414e',
                height: '100vh',        
                paddingTop: (theme: Theme) => theme.spacing(10),
                overflow: 'auto',
            }}
        >
            <Container
                sx={{
                    backgroundColor: '#3a414e',
                }}
                maxWidth='sm'
            >
                <Typography
                    variant='h1'
                    sx={{
                        color: (theme: Theme) => theme.palette.common.white,
                        marginBottom: (theme: Theme) => theme.spacing(4) 
                    }}
                >
                    Latest posts
                </Typography>
                <Stack spacing={2}>
                    {latestPages.map((page, index) =>
                        <LatestItem key={index} page={page} />
                    )}
                </Stack>
            </Container>
        </Box>
    );

}

export default Home
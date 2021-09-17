import { Container, createStyles, Box, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { FC, ReactElement } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: '#3a414e',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(5),
        color: theme.palette.common.white
    },
    content: {
        paddingTop: theme.spacing(5),
    }
  }),
);

type ContentProps = {
    title: string
    children?: React.ReactNode;
}

export const Content: FC<ContentProps> = ({title, children}: ContentProps): ReactElement<ContentProps> => {
    const classes = useStyles();

    return (
        <Box>
            <Box
                className={classes.header}
            >
                <Container 
                    maxWidth='sm'
                    className={classes.root}
                > 
                    <Typography
                        variant='h1'
                        align='left'
                    >
                        {title}
                    </Typography>
                </Container>
            </Box>
            <Container 
                className={classes.content}
                maxWidth='sm'
            > 
                <div>{children}</div>
            </Container>
        </Box>
    );
}

export default Content;
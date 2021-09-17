import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { FC, ReactElement } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paragraph: {
        marginBottom: theme.spacing(4),
    }
  }),
);


type ParagraphProps = {
    children: string;
}

export const Paragraph: FC<ParagraphProps> = ({children}: ParagraphProps): ReactElement<ParagraphProps> => {

    const classes = useStyles();

    return (
        <Typography
            className={classes.paragraph}
            variant='body2'
        >
            {children}
        </Typography>
    );
}

export default Paragraph;
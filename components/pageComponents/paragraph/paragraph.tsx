import { Theme, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

type ParagraphProps = {
    children: string;
}

export const Paragraph: FC<ParagraphProps> = ({children}: ParagraphProps): ReactElement<ParagraphProps> => {

    return (
        <Typography
            sx={{
                marginBottom: (theme: Theme) => theme.spacing(4),
            }}
            variant='body2'
        > 
            {children}
        </Typography>
    );
}

export default Paragraph;
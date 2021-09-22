import { styled } from '@mui/material/styles';
import { Divider, DividerProps } from '@mui/material';

const LightDivider = styled(Divider)<DividerProps>(({ theme }) => ({
    backgroundColor: '#565656',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
}));

export default LightDivider
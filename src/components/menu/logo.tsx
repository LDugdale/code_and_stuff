import { styled } from "@mui/material";
import logo from './logo.svg';

const Logo = styled('img')(({ theme }) => ({
    width: '100%',
    margin: '0 auto',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(1),
}))

const LogoImage = () => <Logo src={logo} alt='logo'/>

export default LogoImage
import { styled } from "@mui/material";
import logo from './logo.svg';
import Image from 'next/image'

// const Logo = styled(Image)(({ theme }) => ({
//     width: '100%',
//     margin: '0 auto',
//     paddingTop: theme.spacing(2),
//     paddingBottom: theme.spacing(2),
//     paddingRight: theme.spacing(1),
// }))

const LogoImage = () => <Image src={logo} alt='logo' 
width={500}
height={218}/>

export default LogoImage
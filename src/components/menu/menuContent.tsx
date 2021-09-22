import React, { FC, ReactElement } from 'react'
import { pages } from '../../pageData';
import MenuItems from './menuItems';
import { Link } from 'react-router-dom';
import { Box, List, Theme, IconButton, Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightDivider from './lightDivider';
import Logo from './logo';

type MenuContentProps = {
    menuOpenList: {[key: string]: boolean}
    onMenuOpen: (pagePath: string, isOpen: boolean) => void
}

const MenuContent: FC<MenuContentProps> = ({menuOpenList, onMenuOpen}: MenuContentProps): ReactElement<MenuContentProps> => {

    return (
            <>
              <Box>
                <Link
                  to='/'
                >
                  <Logo />
                </Link>
                
                <LightDivider light variant='middle'/>

              </Box>
              <Box
                sx={{      
                  flexGrow: 1              
                }}
              >
                <List>                    
                  <MenuItems 
                    pages={pages} 
                    menuOpenList={menuOpenList} 
                    onMenuOpen={onMenuOpen} 
                  />
                </List>
              </Box>
              <Box>
                <LightDivider light variant='middle'/>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: (theme: Theme) => theme.spacing(1),
                    paddingBottom: (theme: Theme) => theme.spacing(1),
                    paddingRight: (theme: Theme) => theme.spacing(1),
                    justifyContent: 'center'
                  }}
                >
                  <Button           
                    sx={{
                      textTransform: 'none',
                      color: (theme: Theme) => theme.palette.common.white
                    }}           
                    component={Link} 
                    to='/pages/about'                  
                  >
                    About
                  </Button>
                  <IconButton      
                    sx={{
                      color: (theme: Theme) => theme.palette.common.white
                    }}
                    component='a' 
                    href='https://twitter.com/LaurieDugdale' 
                    target='_blank'
                  >
                      <TwitterIcon />
                  </IconButton>
                  
                  <IconButton        
                    sx={{
                      color: (theme: Theme) => theme.palette.common.white
                    }} 
                    component='a'
                    href='https://github.com/LDugdale' 
                    target='_blank'
                  >
                      <GitHubIcon />
                  </IconButton>
                </Box>
              </Box>
            </>
    );
}

export default MenuContent;
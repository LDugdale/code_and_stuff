import React, { FC, ReactElement, useState, useEffect } from 'react'
import { pageLookup } from '../../src/pageData/pageData';
import { Box, Drawer, Fab, Theme, useMediaQuery, useTheme } from '@mui/material';
import MenuContent from './menuContent';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router'

const drawerWidth = 320;

const drawerStyle = {
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',                  
    backgroundColor: (theme: Theme) => theme.palette.secondary.main,
    color: (theme: Theme) => theme.palette.common.white,
  }
};

const Menu: FC = (): ReactElement => {

  const theme = useTheme();
  const router = useRouter();
  const [menuOpenList, setMenuOpenList] = useState<{[key: string]: boolean}>({});    
  const isMobile = useMediaQuery(theme.breakpoints.up('xs'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

    useEffect(() => {
      const page = pageLookup[router.pathname.toLowerCase()];
      if(!page){
        return;
      }
      
      for(let i = 0; i < page.parents.length; i++){
        const parentPage = pageLookup[page.parents[i].path.toLowerCase()];
        const list = {...menuOpenList};
        list[parentPage.path] = list[parentPage.path] === undefined ? true : list[parentPage.path]
        setMenuOpenList(list);      
      }
    // eslint-disable-next-line
    }, [router.pathname])   


    const handleMenuOpen = (pagePath: string, isOpen: boolean): void => {
      const page = pageLookup[pagePath.toLowerCase()];
      const list = {...menuOpenList};
      list[page.path] = isOpen
      setMenuOpenList(list);
    }

    return (
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          { isMobile &&
            <Fab
              onClick={handleDrawerToggle}
              sx={{
                position: 'absolute',
                top: (theme: Theme) => theme.spacing(2),
                left: (theme: Theme) => theme.spacing(2),
              }} 
            >
              <MenuIcon />
            </Fab>
          }
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                ...drawerStyle
              }}       
            >
              <MenuContent 
                menuOpenList={menuOpenList} 
                onMenuOpen={handleMenuOpen}
              />
            </Drawer>
            <Drawer
              variant="permanent"
              anchor="left"
              open
              sx={{
                display: { xs: 'none', sm: 'block' },
                ...drawerStyle
              }}       
            >
              <MenuContent 
                menuOpenList={menuOpenList} 
                onMenuOpen={handleMenuOpen}
              />
            </Drawer>
        </Box>
    );
}

export default Menu;
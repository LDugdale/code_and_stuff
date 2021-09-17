import { Box, Button, createStyles, Divider, Drawer, IconButton, List, makeStyles, Theme } from '@material-ui/core';
import React, { FC, ReactElement, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { pages, pageLookup } from '../../pageData';
import MenuItems from './menuItems';
import logo from './logo.svg';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';

const drawerWidth = 320;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    paperAnchorDockedLeft: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
    },
    logo: {
      width: '100%',
      margin: '0 auto',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    divider: {
      backgroundColor: '#565656',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    menu: {
      flexGrow: 1
    },
    icons: {
      color: theme.palette.common.white,
      textTransform: 'none'
    },
    footer: {
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingRight: theme.spacing(1),
      justifyContent: 'center'
    }
  }),
);

const Menu: FC = (): ReactElement => {

    const location = useLocation();
    const [menuOpenList, setMenuOpenList] = useState<{[key: string]: boolean}>({});
    const classes = useStyles();

    useEffect(() => {
      const page = pageLookup[location.pathname.toLowerCase()];
      if(!page){
        return;
      }
      
      for(let i = 0; i < page.parents.length; i++){
        const parentPage = pageLookup[page.parents[i].path.toLowerCase()];
        const list = {...menuOpenList};
        list[parentPage.path] = list[parentPage.path] === undefined ? true : list[parentPage.path]
        setMenuOpenList(list);      
      }
    
    }, [location.pathname])

    const handleMenuOpen = (pagePath: string, isOpen: boolean) => {
      const page = pageLookup[pagePath.toLowerCase()];
      const list = {...menuOpenList};
      list[page.path] = isOpen
      setMenuOpenList(list);
    }

    return (
        <Box>
            <Drawer
              variant="permanent"
              anchor="left"                
              className={classes.drawer}
              classes={{
                paper: classes.drawerPaper,
                paperAnchorDockedLeft: classes.paperAnchorDockedLeft,
              }}
            >
              <Box>
                <img 
                  className={classes.logo}
                  src={logo} 
                  alt='logo'
                />
                
                <Divider classes={{light: classes.divider}} light variant='middle'/>
              </Box>
              <Box
                className={classes.menu}
              >
                <List>                    
                  <MenuItems 
                    pages={pages} 
                    menuOpenList={menuOpenList} 
                    onMenuOpen={handleMenuOpen} 
                  />
                </List>
              </Box>
              <Box>
                <Divider classes={{light: classes.divider}} light variant='middle'/>
                <Box
                  className={classes.footer}
                >
                  <Button   
                    className={classes.icons}                  
                    component={Link} 
                    to='/pages/about'                  
                  >
                    About
                  </Button>
                  <IconButton   
                    className={classes.icons}     
                    component={Link} 
                    to='/pages/about' 
                  >
                      <TwitterIcon />
                  </IconButton>
                  
                  <IconButton   
                    className={classes.icons}     
                    component={Link} 
                    to='/pages/about' 
                  >
                      <GitHubIcon />
                  </IconButton>
                </Box>
              </Box>
            </Drawer>
        </Box>
    );
}

export default Menu;
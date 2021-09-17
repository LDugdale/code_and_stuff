import React, { FC, ReactElement } from 'react'
import { List, ListItem, ListItemText, Collapse, makeStyles, createStyles, Theme } from '@material-ui/core';
import { ExpandLess, ExpandMore} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { Page } from '../../pageData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    selected: {
        backgroundColor: `transparent !important`,
        color: theme.palette.primary.main
    },
  }),
);

type MenuItemProps = {
    pages: Array<Page>,
    menuOpenList: {[key: string]: boolean},
    onMenuOpen: (key: string, isOpen: boolean) => void
}

const MenuItems: FC<MenuItemProps> = ({pages, menuOpenList, onMenuOpen}: MenuItemProps): ReactElement<MenuItemProps> => {

    const location = useLocation();
    const classes = useStyles();

    const isNestedListItem = (link: string): boolean => {
        const numberOfSlashes = (link.match(new RegExp("/", "g")) || []).length
    
        return numberOfSlashes > 2;
    }
    
    const isSelected = (name: string): boolean => {
        
        var paths = location.pathname.split('/');

        for(let i = 0; i < paths.length; i++){
            if(name.toLowerCase() === paths[i].toLowerCase()){
                return true;
            }
        }        
    
        return false;
    }

    return(
        <>
            {pages.map((page, index) => {

                if(page.isDirectory){
                    const isOpen = menuOpenList[page.path];
                    return (
                        <li key={index}>
                            <ListItem 
                                selected={isSelected(page.name)}
                                component="div" 
                                button 
                                onClick={() => onMenuOpen(page.path, !isOpen)}
                                classes={{selected: classes.selected}}
                            >
                                <ListItemText primary={page.friendlyName} />
                                {isOpen ? <ExpandLess color='primary'/> : <ExpandMore />}
                            </ListItem>

                            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                                <List>
                                    <MenuItems 
                                        pages={page.pages as Array<Page>} 
                                        menuOpenList={menuOpenList}
                                        onMenuOpen={onMenuOpen}
                                    />
                                </List>
                            </Collapse>
                        </li>
                    );
                }
                const listItemClass = isNestedListItem(page.path) ? classes.nested : '';
                return (
                    <ListItem 
                        selected={isSelected(page.name)}
                        color='primary'
                        className={listItemClass}
                        classes={{selected: classes.selected, }}
                        button 
                        key={index} 
                        component={Link} 
                        to={page.path}
                    >
                        <ListItemText primary={page.friendlyName} />
                    </ListItem>
                )
            })}
        </>
    );
}

export default MenuItems;
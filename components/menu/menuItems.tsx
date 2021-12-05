import React, { FC, ReactElement } from 'react'
import { List, ListItem, ListItemText, Collapse, Theme, Box } from '@mui/material';
import { ExpandLess, ExpandMore} from '@mui/icons-material';
import { Page } from '../../src/pageData/pageData';
import { useRouter } from 'next/router'
import Link from '../../src/Link';

type MenuItemProps = {
    pages: Array<Page>,
    menuOpenList: {[key: string]: boolean},
    onMenuOpen: (key: string, isOpen: boolean) => void
}

const MenuItems: FC<MenuItemProps> = ({pages, menuOpenList, onMenuOpen}: MenuItemProps): ReactElement<MenuItemProps> => {

    const router = useRouter();


    const isNestedListItem = (link: string): boolean => {
        const numberOfSlashes = (link.match(new RegExp("/", "g")) || []).length
    
        return numberOfSlashes > 2;
    }
    
    const isSelected = (name: string): boolean => {
        
        var paths = router.pathname.split('/');

        for(let i = 0; i < paths.length; i++){
            if(name.toLowerCase() === paths[i].toLowerCase()){
                return true;
            }
        }        
    
        return false;
    }

    return (
        (<Box>
            {pages.map((page, index) => {

                if(page.isDirectory){
                    const isOpen = menuOpenList[page.path];
                    return (
                        <div key={index}>
                            <ListItem 
                                selected={isSelected(page.name)}
                                sx={{
                                    '&.Mui-selected': {
                                        color: (theme: Theme) => theme.palette.primary.main,
                                        backgroundColor: 'transparent'
                                    }
                                }}
                                component="div" 
                                button 
                                onClick={() => onMenuOpen(page.path, !isOpen)}
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
                        </div>
                    );
                }
                return (
                    <ListItem 
                        noLinkStyle
                        selected={isSelected(page.name)}
                        sx={{ 
                            pl: isNestedListItem(page.path) ? 4 : 2,
                            '&.Mui-selected': {
                                color: (theme: Theme) => theme.palette.primary.main,
                                backgroundColor: 'transparent'
                            }
                        }}
                        color='primary'
                        button 
                        key={index} 
                        component={Link} 
                        href={page.path}
                    >
                        <ListItemText primary={page.friendlyName} />
                    </ListItem>
                )
            })}
        </Box>)
    );
}

export default MenuItems;
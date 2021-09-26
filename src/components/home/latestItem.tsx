import { Card, CardActionArea, CardHeader, CardContent, Typography, Box, Theme } from '@mui/material';
import React, {FC, ReactElement} from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../../pageData';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type LatestItemProps = {
    page: Page
}

const LatestItem: FC<LatestItemProps> = ({page}: LatestItemProps): ReactElement<LatestItemProps> => {

    return (
        <Card
            sx={{
                backgroundColor: 'transparent',                
                boxShadow: 'none',
                color: (theme: Theme) => theme.palette.common.white,
                '& .MuiCardActionArea-root:hover .MuiCardHeader-root': {
                    color: (theme: Theme) => theme.palette.primary.main
                },
                '& .MuiCardActionArea-root:hover .MuiSvgIcon-root': {
                    color: (theme: Theme) => theme.palette.primary.main
                },
                '& .MuiCardActionArea-root:hover .MuiCardActionArea-focusHighlight':{
                    backgroundColor: 'transparent'
                },
                '& .MuiCardActionArea-root .MuiCardActionArea-focusHighlight':{
                    opacity: 0                    
                }
            }}
        > 
            
            <CardActionArea
                component={Link} 
                to={page.path}
            >

                <CardHeader 
                    title={page.friendlyName}
                    subheader={formatDate(page.metadata?.createdOn)}
                    sx={{
                        padding: 0,
                        marginBottom: (theme: Theme) => theme.spacing(2),
                        '& .MuiCardHeader-subheader':{
                            color: '#ffffff80',
                        },
                    }}
                />
                <CardContent
                    sx={{
                        padding: 0,
                        marginBottom: (theme: Theme) => theme.spacing(4),
                    }}
                >
                    <Typography 
                        variant="body2"
                        sx={{
                            marginBottom: (theme: Theme) => theme.spacing(2),
                            color: '#ffffff80',
                        }}
                    >
                        {page.metadata?.abstract}
                    </Typography>
                    
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <Typography 
                            variant="body2"
                        >
                            Read more
                        </Typography>
                        <ChevronRightIcon
                            sx={{
                                color: 'transparent'
                            }}
                        />
                    </Box>
                </CardContent>                  
            </CardActionArea>

        </Card>

    );

}

export default LatestItem

const formatDate = (dateInput?: string): string => {

    if(!dateInput){
        return '';
    }
    const date = new Date(dateInput)
    const currentDate = new Date();

    let diff = currentDate.getTime() - date.getTime(); // the difference in milliseconds
  
    if (diff < 1000) { // less than 1 second
      return 'right now';
    }
  
    let sec = Math.floor(diff / 1000); // convert diff to seconds
  
    if (sec < 60) {
      return sec + ' sec. ago';
    }
  
    let min = Math.floor(diff / 60000); // convert diff to minutes
    if (min < 60) {
      return min + ' min. ago';
    }
  
    // format the date
    // add leading zeroes to single-digit day/month/hours/minutes
    let d = date;
    let sd = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // take last 2 digits of every component
  
    // join the components into date
    return sd.slice(0, 3).join('.') + ' ' + sd.slice(3).join(':');
  }
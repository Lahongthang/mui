import {Link} from 'react-router-dom'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import { Home, ViewAgenda } from '@mui/icons-material';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({menu: false});

  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    setState({menu: !state.menu});
  };

  return (
    <div>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer()}
        >
            <MenuIcon />
        </IconButton>
        <Drawer
            anchor='menu'
            open={state.menu}
            onClose={toggleDrawer()}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer()}
                onKeyDown={toggleDrawer()}
            >
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <Home/>
                            </ListItemIcon>
                            <Link to='/'>
                                <Typography variant='h6' component='p'>Home</Typography>
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <ViewAgenda/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    </div>
  );
}

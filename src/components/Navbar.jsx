import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2, color: '#FAFAFA' }}>
        IELTSPro
      </Typography>
      <Divider />
      <List>
         <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText><Button component='a' href='#features' sx={{ color: '#FAFAFA' }} >Features</Button></ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
      <List>
         <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText><Button component='a' href='#testimonials' sx={{ color: '#FAFAFA' }} >Testimonials</Button></ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
      <List>
         <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText > <Button component='a' href='#contact' sx={{ color: '#FAFAFA' }} > Contact</Button> </ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
      
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  

  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{
          bgcolor: '#005086' }}>
        <Toolbar>
          <IconButton
            color="#FAFAFA"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ color: '#FAFAFA' }} />
           </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: '#FAFAFA', display: { xs: 'flex', sm: 'block' } }}
          >
            IELTSPro
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button component='a' href='#features' sx={{ color: '#FAFAFA' }}>
                Features
              </Button>
            <Button component='a' href='#testimonials' sx={{ color: '	#FAFAFA' }}>
                Testimonials
              </Button>
            <Button component='a' href='#contact' sx={{ color: '	#FAFAFA' }}>
                Contact
              </Button>
              
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: '#005086' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;
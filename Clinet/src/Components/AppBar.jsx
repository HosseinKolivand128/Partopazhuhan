import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { useState } from "react";
import { brown } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';

const AppNavBar=(props)=>{
    const navItems = ['Home', 'About', 'Contact'];
    const drawerWidth = 240;
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const appBarStyle={
        position:"sticky",
        top:0,
        width:"100%",
        backgroundColor:brown[200],
        // padding:"0px"
    }

    const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

   const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  console.log(container);

    return(
        <>
          <AppBar component="nav" style={appBarStyle}>
            <Toolbar  sx={{mr:5,display:"flex", justifyContent:"center"}}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                پرتو پژوهان
              </Typography>

              <Box sx={{ display: { xs: 'none', sm: 'flex' },flexGrow:1.2 }}>
                
                  <Button key={0} sx={{ color: '#fff' }}>
                            <NavLink style={{
          
            color:"#123c69",
            fontSize:"13px"
          
        }} to='#'>محصولات</NavLink>

                  </Button>
                  <Button key={1} sx={{ color: '#fff' }}>
                    <NavLink style={{
          
            color:"#123c69",
            fontSize:"13px"
          
        }} to='#'>نتایج</NavLink>
                  </Button>
                  <Button key={2} sx={{ color: '#fff' }}>
                     <NavLink style={{
          
            color:"#123c69",
            fontSize:"13px"
          
        }} to='#'>سوالات متداول</NavLink>
                  </Button>
                  <Button key={3} sx={{ color: '#fff' }}>
                     <NavLink style={({isActive,isPending})=>{
          return{
           color:isActive?"#f94e6d":"#123c69",
            fontSize:"13px"
          }
          
        }} to='/AboutUs'>درباره ما</NavLink>
                  </Button>
                  <Button key={4} sx={{ color: '#fff' }}>
                    <NavLink style={({isActive,isPending})=>{
          return{
           color:isActive?"#f94e6d":"#123c69",
            fontSize:"13px"
          }
          
          }} to='/ContactUs'>تماس با ما</NavLink>
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
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </>
    )
}

export default AppNavBar
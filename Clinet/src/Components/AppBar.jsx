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
import ItemsList from "./ItemsList"

const AppNavBar=(props)=>{
    const navItems = ['Home', 'About', 'Contact'];
    const drawerWidth = 240;
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [showMenu, setShowMenu] = useState([]);


    const appBarStyle={
        position:"sticky",
        top:0,
        width:"100%",
        backgroundColor:brown[200],
        padding:"0px 0"
        // height:"50px"
        // padding:"0px"
    }

    const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

    const subMenuOnMouseEnterHandler = (subMenuId) => {
    setShowMenu((prev) => {
      console.log(prev);
      let arr = [...prev];
      arr[subMenuId] = true;
      return arr;
    });
  };

    const subMenuOnMouseLeaveHandler = (subMenuId) => {
    setShowMenu((prev) => {
      let arr = [...prev];
      // console.log(arr);
      arr[subMenuId] = false;
      return arr;
    });
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
                fontFamily={"IranSans"}
                sx={{ flexGrow: 0.9, display: { xs: 'none', sm: 'block' },margin:0,padding:0 }}
              >
                <NavLink
                  style={{
                      color:"#fff",
                    }}
                  to='/'
                >
                  پرتو پژوهان
                </NavLink>
              </Typography>

              <Box sx={{ display: { xs: 'none', sm: 'flex' },flexGrow:1.2 }}>
                
                <Button 
                key={0} 
                sx={{ color: '#fff',mt:0,pt:0,pb:0,mb:0}}
                onMouseEnter={(event) => subMenuOnMouseEnterHandler(0)}
                onMouseLeave={(event) => subMenuOnMouseLeaveHandler(0)}
                >
                  <NavLink style={{
                    color:"#ad1457",
                    fontSize:"1rem",
                    fontWeight:"500"
                  }} to='#'>محصولات</NavLink>
                  <i className='arrow down'></i>
                  {showMenu[0]&&(
                    <ItemsList itemsInfo=
                      {[
                        {
                          itemName:"PPK-100",

                        },
                        {itemName:"PPK-101",
                      children:[
                            {
                              itemName:"subMenu1.1"
                            },
                            {
                              itemName:"subMenu1.2",
                              children:[
                               { itemName:"submenu1.2.1"}
                              ]
                            },
                            {
                              itemName:"subMenu1.3"
                            },
                          ]},
                        {itemName:"PPK-102"},
                      ]}/>
                    )}
                  </Button>

                  <Button 
                    key={1} 
                sx={{ color: '#fff',mt:0,pt:0,pb:0,mb:0}}
                    onMouseEnter={(event) => subMenuOnMouseEnterHandler(1)}
                    onMouseLeave={(event) => subMenuOnMouseLeaveHandler(1)}
                  >
                  <NavLink style={{
                    color:"#ad1457",
                    fontSize:"1rem",
                    fontWeight:"500"
                  }} to='#'>نتایج</NavLink>
                  <i className='arrow down'></i>
                  {showMenu[1] &&
                    <ItemsList itemsInfo=
                      {[
                        {
                         itemName:"نتایج شگفت انگیز"
                        },
                        {
                          itemName:"فیلم ها"
                      },
                    ]} />
                  }
                  </Button>
                  <Button 
                    key={2} 
                sx={{ color: '#fff',mt:0,pt:0,pb:0,mb:0}}
                    onMouseEnter={(event) => subMenuOnMouseEnterHandler(2)}
                    onMouseLeave={(event) => subMenuOnMouseLeaveHandler(2)}
                  >
                    <NavLink style={{
                    color:"#ad1457",
                    fontSize:"1rem",
                    fontWeight:"500"
                    }} to='#'>سوالات متداول</NavLink>
                  </Button>
                  <Button 
                    key={3} 
                sx={{ color: '#fff',mt:0,pt:0,pb:0,mb:0}}
                    onMouseEnter={(event) => subMenuOnMouseEnterHandler(3)}
                    onMouseLeave={(event) => subMenuOnMouseLeaveHandler(3)}
                  >
                     <NavLink style={({isActive,isPending})=>{
                        return{
                         color:isActive?"#f94e6d":"#123c69",
                    color:"#ad1457",
                    fontSize:"1rem",
                    fontWeight:"500"
                        }
                      }} to='/AboutUs'>درباره ما</NavLink>
                  </Button>
                  <Button 
                    key={4} 
                sx={{ color: '#fff',mt:0,pt:0,pb:0,mb:0}}
                    onMouseEnter={(event) => subMenuOnMouseEnterHandler(4)}
                    onMouseLeave={(event) => subMenuOnMouseLeaveHandler(4)}
                  >
                    <NavLink style={({isActive,isPending})=>{
                      return{
                       color:isActive?"#f94e6d":"#123c69",
                    color:"#ad1457",
                    fontSize:"1rem",
                    fontWeight:"500"
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
import React, { useState } from 'react';
import ItemsList from './ItemsList';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../Style/Navbar.module.css';
import { red } from '@mui/material/colors';
import { Link ,NavLink} from 'react-router-dom';
// import { List, li } from '@mui/material';

const Navbar = () => {
  
  const [showMenu, setShowMenu] = useState([]);

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
return (

<nav style={{position:"sticky",top:0}}>
  <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="baseline"
  //  spacing={1}
>

  <Grid item
  justifyContent="center" xs={8} >
  <ul>
    {/* *HOME */}
    <li key={0} className="li">
      <Link href='/' >صفحه اصلی</Link>
    </li>
    {/**Products */}
    <li key={1} 
      onMouseEnter={(event) => subMenuOnMouseEnterHandler(0)}
      onMouseLeave={(event) => subMenuOnMouseLeaveHandler(0)}
      className="li"
    > 
      <div className="dropdown">
        <NavLink style={{
          
            color:"#123c69",
            fontSize:"13px"
          
        }} to='#'>محصولات</NavLink>
        <i className='arrow down'></i>
      </div>
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
    </li>   
    {/**Guid */}     
    {/* <li className='li' key={3}
       onMouseEnter={(event) => subMenuOnMouseEnterHandler(1)}
       onMouseLeave={(event) => subMenuOnMouseLeaveHandler(1)}
      >   
      <div className="dropdown">      
        <NavLink style={{
          
            color:"#123c69",
            fontSize:"13px"
          
        }} to='#'>راهنمای مصرف</NavLink>
        <i className='arrow down'></i> 
      </div>    
      {showMenu[1]&&
      <ItemsList itemsInfo=
      {[
        {
          itemName:"دستور مصرف",
          children:[
            {
              itemName:"PPK-100"
            },
            {
              itemName:"PPK-101"
            },
            {
              itemName:"PPK-102"
            },
          ]
        },
      ]} />
      }    
      </li> */}

    {/**Results */}
    <li className='li' key={4}
       onMouseEnter={(event) => subMenuOnMouseEnterHandler(2)}
       onMouseLeave={(event) => subMenuOnMouseLeaveHandler(2)}
      >
        <div className="dropdown">      
        <NavLink style={{
          
            color:"#123c69",
            fontSize:"13px"
          
        }} to='#'>نتایج</NavLink>
        <i className='arrow down'></i>  
        </div>

        {showMenu[2] &&
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
      </li>
    <li className='li' key={5}
       onMouseEnter={(event) => subMenuOnMouseEnterHandler(3)}
       onMouseLeave={(event) => subMenuOnMouseLeaveHandler(3)}
      >         
      <div className="dropdown"> 
        <NavLink style={{
          
            color:"#123c69",
            fontSize:"13px"
          
        }} to='#'>سوالات متداول</NavLink>
        <i className='arrow down'></i>   
        </div>
        {showMenu[3] &&
        <ItemsList itemsInfo=
        {[
          {
           itemName:"اصطلاحات"
          },
          {
            itemName:"سوالات متداول",
          }
      ]} />
      }       
      </li>
    <li className='li' key={6}
       onMouseEnter={(event) => subMenuOnMouseEnterHandler(4)}
       onMouseLeave={(event) => subMenuOnMouseLeaveHandler(4)}
      >         
      <div className="dropdown"> 
        <NavLink style={({isActive,isPending})=>{
          return{
           color:isActive?"#f94e6d":"#123c69",
            fontSize:"13px"
          }
          
        }} to='/AboutUs'>درباره ما</NavLink>
        {/* <i className='arrow down'></i>  */}
        </div>
          {/* {showMenu[4] &&
        <ItemsList itemsInfo=
        {[
          {
           itemName:"درباره ما"
          },
          {
            itemName:"معرفی فناوری",
          }
      ]} />
      }         */}
      </li>
    {/* <li className='li' key={7}
      >         
        <NavLink style={{
          
            color:"#151a1e",
            fontSize:"13px"
          
        }} to='#'>همکاری با ما</NavLink>           
      </li> */}
   
    <li className='li' key={7}
      >         
        <NavLink style={({isActive,isPending})=>{
          return{
           color:isActive?"#f94e6d":"#123c69",
            fontSize:"13px"
          }
          
        }} to='/ContactUs'>تماس با ما</NavLink>           
      </li>
   
      </ul>
  </Grid>
  </Grid>
     </nav>
    
  )
}
     
     export default Navbar;

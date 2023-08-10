import React, { useState } from 'react';
import{Link,NavLink}from "react-router-dom"
import ItemsList from './ItemsList';
import { List, ListItem } from '@mui/material';
// import './itemMenu.css';
const Lists=(props)=>{
const { itemsInfo } = props;
// console.log(itemsInfo);
// itemsInfo.map((element,i)=>{
//     console.log(element.itemName);
// })
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
      console.log(arr);
      arr[subMenuId] = false;
      return arr;
    });
  };
return(
    <ul className="dropdown-menu IRANSans" >
      {
        itemsInfo.map((element,i)=>{
          return(
              <li 
                className="sub-li"
                style={{
                  padding:"0 10px"
                  // width:"max-content",
                  // display:"flex",
                  // alignItems:"baseline",
                  // alignContent:"center"
                }}
                >
                  
                  <NavLink to={`/${element.itemName}`.replace(" ","_")} style={({isActive,isPending})=>{
                    return{
                            color:isActive?"#f94e6d":"#151a1e",
                            // textAlign:"right"
                          }
                  }}>{element.itemName}</NavLink>
                  
                    {/* <div className='arrow left' style={{alignSelf:"center",justifySelf:"flex-end"}}></div> */}
                  
                
              </li>
              // <li className="sub-li li">
              //   <a href="#"> {element.itemName}</a>
              // </li>
            )
          // if (!element.children) {
          //   return(
          //     <li>
          //       <div className='dropdown'>
          //         <NavLink to="/p1">{element.itemName}</NavLink>
          //         {/* <i className='arrow left'></i> */}
          //       </div>
          //     </li>
          //   )
          // }
          // return(
          //   <li
          //     onMouseEnter={(event) => subMenuOnMouseEnterHandler(i)}
          //     onMouseLeave={(event) => subMenuOnMouseLeaveHandler(i)}
          //   >
          //       <div className='dropdown'>
          //         <NavLink to="/p1">{element.itemName}</NavLink>
          //         <i className='arrow left'></i>
          //       </div>
          //       {showMenu[i]&&<ItemsList itemsInfo={element.children}/>}
          //   </li>
          // )
        })
      }
    </ul>
);
}
export default Lists
// {
//     itemsInfo.map((elements,i)=>{
//       {console.log(elements)}
//         if(!elements.children){
//             return(
//               <NavLink to="/p1" style={({isActive,isPending})=>{
//                   return{
//                     color:isActive?"black":"",
//                     fontSize:"13px",
//                     position:"relative"
//                   }
//                 }}>
//               <li className="dropdown-submenu" style={{
//                 // display:"flex",
//                 // justifyContent:"space-around",
//                 backgroundColor:"red"
//               }} key={i}>
//                 <div className='dropdown'>
//                 {elements.itemName}
//             <i className='arrow left'></i> 
//             </div>
//             </li>
//             </NavLink>
//             )
//         }
//         return(
//             <li className="dropdown-submenu" style={{
//                 display:"flex",
//                 justifyContent:"space-around",
//                 backgroundColor:"red"
//               }}
//                 onMouseEnter={(event) => subMenuOnMouseEnterHandler(i)}
//                 onMouseLeave={(event) => subMenuOnMouseLeaveHandler(i)}
//                 key={i}
//             >
//               <div  className='dropdown'>
//                 {console.log(elements.itemName + i)}
//                 <NavLink to='/p2' style={({isActive,isPending})=>{
//                   return{
//                     color:isActive?"black":"",
//                     fontSize:"13px"

//                   }
//                 }}> 
//                 {elements.itemName}
//                 </NavLink>
//                 <ItemsList itemsInfo={elements.children}/>
//                   <i className='arrow left'></i> 
//                </div>
//             </li>
//         )
//     })
// }
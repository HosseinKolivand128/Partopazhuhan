import React, { useState } from 'react';
import{Link,NavLink}from "react-router-dom"
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
            )
          })
        }
      </ul>
  );
}
export default Lists

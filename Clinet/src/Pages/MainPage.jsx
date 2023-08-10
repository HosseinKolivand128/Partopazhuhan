import React, { useEffect } from 'react';
import Carousel from "../Components/Carousel"
import Body from "../Components/MainBody"

import '../App.css';
// import logo from "../../public/Untitled.jpeg"

export default function MainPage(){
useEffect(()=>{
        const handleScrollTop=()=>{
            window.scrollTo({
                top:0,
                behavior:"instant"
            });
        };
        handleScrollTop();
    },[]);
return(        
<>
<Carousel/>
<Body/>
</>
)
}

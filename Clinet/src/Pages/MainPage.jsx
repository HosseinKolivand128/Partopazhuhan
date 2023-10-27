import React, { useEffect } from 'react';
import Carousel from "../Components/Carousel"
import Body from "../Components/MainBody"
import pic1 from "../public/Pictures/pic1.jpg"
import pic2 from "../public/Pictures/pic2.jpg"
import pic5 from "../public/Pictures/pic5.jpg"
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
{/* <Carousel/> */}
{/* @TODO: GET product images from api */}
{/* <Carousel slides={[pic1,pic2,pic5]} autoplaySpeed={5000} /> */}
<Body/>
</>
)
}

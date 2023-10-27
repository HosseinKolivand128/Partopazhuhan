import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import React, { useRef, useState } from 'react';


import style from '../Style/productCarousel.module.css'
// Import Swiper React components

const Carousel=({images}) => {
      const [fade, setFade] = useState(false);
    const[currentImage,setCurrentImage]=useState(0);
    const handleClick=(index)=>{
        setFade(true);
        setTimeout(() => {
            setCurrentImage(index);
            setFade(false);
        }, 0);
  };
    const handlePrev=()=>{
        setFade(true);
        setTimeout(() => {
            setCurrentImage((prevImage)=>(prevImage===0?images.length-1:prevImage-1))
            setFade(false);
        }, 0);
    }
    const handleNext=()=>{
        setFade(true);
        setTimeout(() => {
            setCurrentImage((prevImage)=>(prevImage===images.length-1?0:prevImage+1))
            setFade(false);
        }, 0);
    }
    const renderThumbs=()=>{
        return images.map((src,index)=>{
            console.log(src);
            return(
                <img 
                // style={style[]}
                key={index}
                src={src}
                alt={`${index+1}`}
                onClick={()=>handleClick(index)}
                className={currentImage === index ? style["active"] : ''}
                />
            )
        });
    };
     const renderMainImage=()=>{
        return(
            <div className={style[`main-image${fade ? ' fade' : ''}`]}>
                <img 
                src={images[currentImage]}
                alt={`${currentImage+1}`}
                />
            </div>
        );
     };
     return(
         <div className={style["gallery-carousel"]}>
                {renderMainImage()}
            <div className={style["navigation"]}>
                <button 

onClick={handlePrev}>
                <ArrowForwardIosIcon/>
                </button>
                <div className={style["thumbs"]} 

>
                    {renderThumbs()}
                </div>
                <button 

onClick={handleNext}>
                    <ArrowBackIosNewIcon/>
                </button>
            </div>
        </div>
     );
}
export default Carousel;
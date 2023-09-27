// // import Pictures from "../Pages/Pictures.json"
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import pic1 from "../public/Pictures/pic1.jpg"
import pic2 from "../public/Pictures/pic2.jpg"
import pic5 from "../public/Pictures/pic5.jpg"
import style from "../Style/carousel.module.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// import { Box, Container } from "@mui/material";

// const Carousel=()=>{
//   let Pictures=[pic1,pic2,pic5]
//     const settings = {
//     arrows:false,
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 6500,
//     speed: 950,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     cssEase: "linear",
//     //add arrow to the Carousel
//   };
//    return (
//     <Container maxWidth="xl" sx={{position:"static"}}>
//       <Slider {...settings} >
//       {
//         Pictures.map((element,i) => {
//           // console.log(element.image);
//           return(
//             <>
              
//               <img src={element} style={{borderRadius:"10px",height:"700px",width:"100%"}}/>

//             </>
//           )
//         })
        
        
//       }
//     </Slider>
//     </Container>
//   );
// }
// export default Carousel

import React, { useState, useEffect } from 'react';

const Carousel = ({autoplaySpeed }) => {
  const slides=[pic1,pic2,pic5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoplayInterval = setInterval(goToNextSlide, autoplaySpeed);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [currentIndex, autoplaySpeed]);

  return (
    <div className={style["carousel-container"]}>
      <div className={style["carousel"]}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={index === currentIndex ? style['slide active'] : style['slide']}
          >
            <img src={slide} alt="" />
          </div>
        ))}
      </div>
      <div className={style["navigation"]}>
        <div>
          <div>
            <button onClick={goToPrevSlide} className={style["prev"]}>
              <ArrowForwardIosIcon/>
            </button>
            <button onClick={goToNextSlide} className={style["next"]}>
              <ArrowBackIosNewIcon/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
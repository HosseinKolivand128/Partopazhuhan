// import Pictures from "../Pages/Pictures.json"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pic1 from "../public/Pictures/pic1.jpg"
import pic2 from "../public/Pictures/pic2.jpg"
import pic5 from "../public/Pictures/pic5.jpg"
import { Box, Container } from "@mui/material";

const Carousel=()=>{
  let Pictures=[pic1,pic2,pic5]
    const settings = {
    arrows:false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6500,
    speed: 950,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    //add arrow to the Carousel
  };
   return (
    <Container maxWidth="xl" sx={{position:"static"}}>
      <Slider {...settings} >
      {
        Pictures.map((element,i) => {
          // console.log(element.image);
          return(
            <>
              
              <img src={element} style={{borderRadius:"10px",height:"700px",width:"100%"}}/>

            </>
          )
        })
        
        
      }
    </Slider>
    </Container>
  );
}
export default Carousel
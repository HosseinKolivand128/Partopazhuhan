import { Box, Button, Container,Card,CardActionArea,CardMedia,CardContent} from "@mui/material";
import pic4 from "../public/Pictures/pic4.jpg"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import pic3 from "../public/Pictures/pic3.jpg"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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

const Products=({props})=>{
    useEffect(()=>{
        const handleScrollTop=()=>{
            window.scrollTo({
                top:0,
                behavior:"instant"
            });
        };
        handleScrollTop();
    },[]);

    const{name,description,others,images,pdf}=props;

    const navigate=useNavigate();
    const handlePageReload=(link)=>{
        navigate(link);
        window.scrollTo({
                top:0,
                behavior:"smooth",
        });
    }
    const downloadFile = (name,pdf) => {
        console.log("Download");
    const link = document.createElement('a');
    link.download = name;

    link.href =pdf ;

    link.click();
  };
//   const images=[pic3,pic4]
    return(
        <main>
            <Container maxWidth="lg">
                <section style={{
                     display:"flex",
                     justifyContent:"space-around",
                     padding:"20px 0px",
                     flexWrap:"wrap",
                     alignItems:"center",
                     backgroundColor:"#edc7b7",
                     minWidth: "420px",
                 }}>
                     <section style={{
                        // marginLeft:"180px"
                     }} >
                        <div className={style["carousel-container"]}>
                            <Carousel images={images}/>
                        </div>
                     </section>
                     
                     <section style={{
                        // marginRight:"90px"
                     }} > 
                         <Box sx={{
                            padding:"10px",
                            maxWidth:"600px",
                            lineHeight:"1.7rem"

                         }}>
                            <h1 style={{fontSize:"29px",color:"#123c69",textAlign:"center"}}>
                               {name}
                            </h1>
                            <div style={{    
                            borderTop:" 1px solid black",
                            maxWidth: "600px",
                            minWidth: "420px",
                            paddingBottom:"10px",
                            }}>
                            </div>
                            
                             <p style={{fontSize:"16px",textAlign:"justify"}}>
                                {description}
                             </p>
                            
                         </Box>
                     </section>
                 </section>
                 <section style={{
                 }}>
                <section style={{margin:"50px 0"}}>
                    <h2 style={{color:"#AC3B61"}}>
                        کاربرد ها
                    </h2>
                </section>
                <section>
                    <Box sx={{padding:"0 20px",lineHeight:"2.2rem",padding:"0 50px"}}>
                        <ul style={{listStyleType:"disc",display:"flex",flexDirection:"column",fontWeight:"bolder"}}>
                            <li>نفوذناپذیری و آب بندی ملاتهای سیمانی و پلاستر ها</li>
                            <li >نفوذناپذیری و آب‌بندی در کل حجم سازههای بتنی</li>
                            <li >کاهش نفوذپذیری و آب‌بندی انواع مخازن بتنی مانند استخرهای آب و سازههای بتنی فاضلاب شهری</li>
                            <li>نفوذناپذیری چاله های آسانسور</li>
                            <li>جلوگیری از نفوذ یونهای خورنده مانند کلر به سازههای در معرض این یون ها</li>
                            <li>نفوذناپذیری و آببندی سقفها و شناژ‌های بتنی</li>
                            <li>استفاده در دوغابها و ملاتهای انواع موزاییک و سرامیک در سرویسهای بهداشتی به منظور عدم نفوذ آب بین دیوارهای منازل و سقف های ساختمانهای طبقاتی</li>
                            <li>استفاده در بندکشی انواع کاشی، سرامیک، آجر و ... به منظور نفوذناپذیری کامل بندها در برابر آب و عدم شوره زدن، جرم گرفتن و تغییر رنگ بندها</li>
                        </ul>
                    </Box>
                </section>
                </section>
                <Container maxWidt="sm" sx={{textAlign:"center",marginTop:"10px"}}>
                    <div style={{marginRight:"25%",borderRight:"0",borderLeft:"0",borderStyle:"solid",width:"500px",borderImage:"linear-gradient(to left,#181818, #eee, #181818) 1 40%",marginTop:"60px"}}></div>
                </Container>
                <section style={{margin:"40px 0"}}>
                    <h2 style={{color:"#AC3B61"}}>
                        روش استفاده
                    </h2>
                </section>
                <section >
                    <Box>
                        <p style={{lineHeight:"2rem",fontSize:"1em",padding:"0 40px"}}>
                            <strong style={{fontSize:"1.2em"}}>روش اول: </strong> 
                            ابتدا افزودنی آب‌گریز به میزان لازم (بسته به نفوذناپذیری مورد نیاز) با پودر سنگ یا ماسه به صورت خشک مخلوط شده و سپس با سیمان مخلوط گردد و در نهایت آب به آرامی به آنها اضافه شود میزان افزودنی پیشنهادی برای ملات های <span style={{color:"red",textDecoration:"underline red",textDecorationThickness:"2px"}}>سیمانی</span>  5تا  10درصد وزن کل مصالح (سیمان + ماسه (پودر سنگ)) بسته به نفوذناپذیری مورد نیاز است.<br/> میزان افزودنی پیشنهادی برای سازه های <span style={{color:"red",textDecoration:"underline red",textDecorationThickness:"2px",fontStyle:"bold"}}>بتنی</span>  1.5تا  8درصد وزن سیمان بسته به نفوذناپذیری مورد نیاز است.<br/> بهترین عملکرد محصول پس از خشک شدن کامل ایجاد میشود و بهتر است تست نفوذپذیری یا شستشو پس از خشک شدن انجام گیرد. این مدت از چند هفته برای ملات ها و پلاستر های سیمانی و تا چند ماه برای بتن متغیر است.   <br/> در محل خشک نگهداری شود.             
                        </p>
                    </Box>
                </section>
                                <Container maxWidt="sm" sx={{textAlign:"center",marginTop:"10px"}}>
                    <div style={{marginRight:"25%",borderRight:"0",borderLeft:"0",borderStyle:"solid",width:"500px",borderImage:"linear-gradient(to left,#181818, #eee, #181818) 1 40%",marginTop:"60px"}}></div>
                </Container>

                <section style={{margin:"40px 0"}}>
                    <h2 style={{color:"#AC3B61"}}>
                        فواید مصرف
                    </h2>
                </section>
                <section>
                    <Box sx={{padding:"0 20px",lineHeight:"2.2rem",padding:"0 50px"}}>
                        <ul style={{listStyleType:"disc",display:"flex",flexDirection:"column"}}>
                            <li>غیر سمی و فاقد یون کلر و قابل استفاده برای تمام سازه های تاریخی و گلی
                            </li>
                            <li>کاهش شدید نفوذپذیری کاهگل در برابر  و سایر سیال ها
                            </li>
                            <li>ایجاد آب گریزی در سطح بناهای تاریخی و ضد گرد و غبار کردن آن
                            </li>
                        </ul>
                    </Box>
                </section>
                <section style={{margin:"50px" ,padding:"0 50px"}} >
                    <div style={{
                    display:"flex",
                    justifyContent:"center",
                    flexDirection:"row",
                    alignItems:"center"
                }}>
                    <Button variant="contained" onClick={()=>downloadFile(name,pdf)} color="error" sx={{fontFamily:"IranSans" ,margin:"0 20px"}}>دانلود بروشور</Button>
                    <Button variant="contained" onClick={()=>navigate("/")} color="secondary" sx={{fontFamily:"IranSans",margin:"0 20px"}}>خرید محصول</Button>
                    </div>
                </section>
            </Container>
            <section style={{backgroundColor:"#eee2dc",padding:"30px"}}>
                <section style={{
                    margin:"20px 0",
                    textAlign:"center",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    color:'#123c69'
                    }}>
                    <h2>محصولات دیگر</h2>
                    {/* <div style={{border:"none",borderTop:"2px dotted #333",color:"#333",overflow:"visible",textAlign:"center",height:"2px",width:"500px"}}></div> */}
                </section>
                    <section style={{marginBottom:"60px"}}>
                        <div >
                            <Container sx={{display:"flex",alignContent:"center",justifyContent:"space-around",flexFlow:"wrap"}}>
                            <Card sx={{ width: "350px",height:"350px",marginTop:"20px" }} onClick={() => handlePageReload(others.link.l1)}>
                                <CardActionArea>
                                  <CardMedia
                                    component="img"
                                    height="250"
                                    image={`${others.p1.pic}`}
                                    alt="impermeable additive"
                                    // sx={{top:"500px"}}
                                  />
                                  <CardContent sx={{ marginTop:"20px",textAlign:"center"}}>
                                      <span>

                                      </span>
                                      <p style={{alignText:"center",lineHeight:"2em",color:"#123c69",fontFamily:"IRANSans",fontSize:"15px" }}>
                                        {others.p1.name}
                                      </p>       
                                  </CardContent>              
                                </CardActionArea>
                            </Card>
                            
                            <Card sx={{ minWidth: "350px",height:"350px",marginTop:"20px" }} onClick={() => handlePageReload(others.link.l2)}>
                              <CardActionArea>
                                <CardMedia
                                  component="img"
                                  height="250"
                                  image={`${others.p2.pic}`}
                                  alt="impermeable additive"
                                //   sx={{top:"50px"}}
                                  
                                />
                                <CardContent sx={{ marginTop:"20px",textAlign:"center"}}>
                                    <span>

                                    </span>
                                    <p style={{alignText:"center",lineHeight:"2em",color:"#123c69" ,fontFamily:"IRANSans",fontSize:"15px" }}>
                                        {others.p2.name}
                                    </p>       
                                </CardContent>              
                              </CardActionArea>
                            </Card>
                            </Container>
                        </div>
                    </section>
                </section>
        </main>
    )
}

export default Products;
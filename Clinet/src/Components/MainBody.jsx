
import { Box, Button, Card, CardActionArea,CardMedia, CardContent,Typography } from "@mui/material";
import { useNavigate,redirect  } from "react-router-dom";
import pic4 from "../public/Pictures/pic4.jpg"
import pic3 from "../public/Pictures/pic3.jpg"
import pic6 from "../public/Pictures/pic6.jpg"
import pic7 from "../public/Pictures/pic7.jpg"
import pic9 from "../public/Pictures/pic9.jpg"
import pic8 from "../public/Pictures/pic8.jpg"
import pic10 from "../public/Pictures/pic10.jpg"
import style from "../Style/homePage.module.css"
import Carousel from "./Carousell"

import { useEffect } from "react";
const Body = () => {
    const navigate=useNavigate();
    const images=[]
    
  return (
     <main>
         {/** Article section including picture and a text box with description */}
         <section style={{
             display:"flex",
             justifyContent:"center",
             padding:"30px",
            //  margin:"10px 0",
             alignItems:"center",
             flexWrap:"wrap",
             backgroundColor:"#eee2dc"
         }}>
             <section style={{
                margin:"20px"
             }} >
                 <Box className={style["intro"]} sx={{
                     maxWidth:"50vw",                     
                       
                 }}>
                     <Typography variant="h2" sx={{textAlign:"justify-all",fontWeight:"400",fontSize:"x-large",fontFamily:"IranSans",color:"#ac3b61",minWidth:"58vw",margin:"10px 0"}}>
                         افزودنی های نفوذناپذیر پرتو پژوهان
                     </Typography>
                     <Typography fontFamily={"IranSans"} sx={{textAlign:"justify",width:"50vw",margin:"5px"}} >
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quisquam amet ut similique facilis excepturi nulla dignissimos delectus! Est voluptates possimus molestiae, corrupti quisquam dolorum. Cum eius fugiat non voluptatem?
                     </Typography>
                 </Box>
             </section>
             <section  style={{ margin:"10px"}} >
                <div>
                    <Carousel images={[pic4,pic3,pic6]}/>
                    {/* <img className={style["intro-pic"]} src={pic4} style={{borderRadius:"10px",height:"430px"}}></img> */}
                </div>
             </section>
         </section>
         {/** Divition including to parts of text ( red part) */}

         {/** Four parts for showing productions */}
         {/*@TODO SEPARATE ITS COMPONENT */}
         <section style={{padding:"70px 0",margin:"50px 0"}}>
            <Box sx={{ padding:"10px 0",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",color:'#123c69'}}>
                     <h2 >
                         نوع محصول شما چیست؟
                     </h2>
                     {/* <div style={{borderBottom: "2px",width:"500px",	borderTop: "0",	borderStyle:"solid",borderImage: "linear-gradient(to bottom, #181818, #eee, #181818)" }}></div> */}
             </Box>
            <section className={style["products"]}>
                <section style={{
                    padding:"5px"
                }}>
                    <Box sx={{
                     width:"250px",
                     height:"250px",
                    //  backgroundColor:"secondary.dark",
                    backgroundSize:"100% 100%",
                     backgroundImage:`url(${pic3})`,
                     '&:hover': {
                         backgroundSize:"120% 120%",
                         backgroundPosition:"center",
                        //  opacity: [0.9, 0.8, 0.7],
                     },
                     borderRadius:"50%"
                    }}>

                        <div style={{
                            paddingTop:"40%"
                        }}>
                            <div style={{
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                flexFlow:"column nowrap"
                            }}>
                                <h3 style={{color:"#fad338"}}>بتن و ملات سیمانی</h3>
                                <span style={{color:"#fad338"}}>
                                    PPK-100
                                </span>
                                <Button sx={{
                                    borderRadius:"40%",
                                    padding:"10px",
                                    background:"none",
                                    border:"white solid 1px",
                                    color:"white",
                                    '&:hover':{
                                        backgroundColor:"white",
                                        color:"black"
                                    },
                                    fontFamily:"IranSans"
                                }}
                                onClick={() => navigate("/PPK-100")}>مشاهده</Button>
                            </div>
                        </div>
                    </Box>
                </section>

                <section style={{
                    padding:"5px"
                }}>
                    <Box sx={{
                     width:"250px",
                     height:"250px",
                    //  backgroundColor:"secondary.dark",
                    backgroundSize:"100% 100%",
                     backgroundImage:`url(${pic6})`,
                     '&:hover': {
                         backgroundSize:"120% 120%",
                         backgroundPosition:"center",
                        //  opacity: [0.9, 0.8, 0.7],
                     },
                     borderRadius:"50%"
                    }}>
                        <div style={{
                            paddingTop:"40%"
                        }}>
                            <div style={{
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                flexFlow:"column nowrap"
                            }}>
                                <h3 style={{color:"#fad338"}}>ملات سیمانی</h3>
                                <span style={{color:"#fad338"}}>
                                    PPK-101
                                </span>
                                <Button sx={{
                                    borderRadius:"40%",
                                    padding:"10px",
                                    background:"none",
                                    border:"white solid 1px",
                                    color:"white",
                                    '&:hover':{
                                        backgroundColor:"white",
                                        color:"black"
                                    },
                                    fontFamily:"IranSans"
                                }}
                                onClick={() => navigate("/PPK-101")}>مشاهده</Button>
                            </div>
                        </div>
                    </Box>
                </section>

                <section style={{
                    padding:"5px"
                }}>
                    <Box sx={{
                     width:"250px",
                     height:"250px",
                    //  backgroundColor:"secondary.dark",
                    backgroundSize:"100% 100%",
                     backgroundImage:`url(${pic7})`,
                     '&:hover': {
                         backgroundSize:"120% 120%",
                         backgroundPosition:"center",
                        //  opacity: [0.9, 0.8, 0.7],
                     },
                     borderRadius:"50%"
                    }}>
                        <div style={{
                            paddingTop:"40%"
                        }}>
                            <div style={{
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                flexFlow:"column nowrap"
                            }}>
                                <h3 style={{color:"#fad338"}}>کاهگل و بناهای تاریخی</h3>
                                <span style={{color:"#fad338"}}>
                                    PPK-102
                                </span>
                                <Button sx={{
                                    borderRadius:"40%",
                                    padding:"10px",
                                    background:"none",
                                    border:"white solid 1px",
                                    color:"white",
                                    '&:hover':{
                                        backgroundColor:"white",
                                        color:"black"
                                    },
                                    fontFamily:"IranSans"
                                }}
                                onClick={() => navigate("/PPK-102")}>مشاهده</Button>
                            </div>
                        </div>
                    </Box>
                </section>
                
            </section>
         </section>

        <section style={{backgroundColor:"#eee2dc",padding:"50px"}}>
         <Box sx={{
            textAlign:"center",
            padding:"20px 0",
            // display:"flex",
            // flexDirection:"column",
            // alignItems:"center",
            color:'#123c69'
         }}>
            <h2>
                فواید مصرف نانوذرات
            </h2>
            {/* <div style={{border:"none",borderTop:"2px dotted #333",color:"#333",overflow:"visible",textAlign:"center",height:"2px",width:"500px"}}></div> */}

         </Box>
         <section style={{
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center",
            flexFlow:"wrap",
            margin:"30px 0"
         }}>
            <Card sx={{ maxWidth: 345,marginTop:"20px" }} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`${pic9}`}
                  alt="Water color on impermeable additive"
                  className={style["productCard"]}
                />
                <CardContent sx={{ marginTop:"20px",textAlign:"center" ,fontFamily:"IRANSans",fontSize:"15px"}}>
                    <p style={{alignText:"center",lineHeight:"2em",color:"#123c69" }}>
                        ایجاد آب گریزی در سطح بناهای تاریخی و ضد گرد و غبار کردن آن               
                    </p>       
                </CardContent>              
            </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345,marginTop:"20px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`${pic8}`}
                  alt="Water on the impermeable product"
                  className={style["productCard"]}
                />
                <CardContent sx={{ marginTop:"20px",textAlign:"center",fontFamily:"IRANSans",fontSize:"15px" }}>
                    <p style={{alignText:"center",lineHeight:"2em",color:"#123c69" }}>
                        کاهش شدید نفوذپذیری کاهگل در برابر  و سایر سیال ها                        
                  </p>       
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345,marginTop:"20px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`${pic10}`}
                  alt="impermeable additive"
                  className={style["productCard"]}

                />
                <CardContent sx={{ marginTop:"20px",textAlign:"center",fontFamily:"IRANSans",fontSize:"15px"}}>
                    <span>
                        
                    </span>
                    <p style={{alignText:"center",lineHeight:"2em",color:"#123c69" }}>
                        غیر سمی و فاقد یون کلر و قابل استفاده برای تمام سازه های تاریخی و گلی
                    </p>       
                </CardContent>              
              </CardActionArea>
            </Card>
         </section>
         </section>
     </main>
  );
};

export default Body;
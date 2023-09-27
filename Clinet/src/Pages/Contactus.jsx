import { NavLink } from "react-router-dom"
import background from "../public/Pictures/contact-pages.png"
import { Box, Button, Card, CardActions, CardContent, Container, Typography } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
const Contactus=()=>{
    return(
        <main>
            <div>
                <section style={{background: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.40)), url(${background})`,backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",transition:"background .3s,border .3s,border-radius .3s,box-shadow .3s",backgroundAttachment:"fixed",marginTop:"0px",padding:"150px 0 100px 0px",backgroundColor:"black",scale:'1'}}>
                    <div style={{textAlign:"center",marginRight:"auto",marginLeft:"auto",boxSizing:"border-box",position:"relative"}} >
                        <div style={{display:"flex",flexDirection:"column",justifyContent:'center',alignItems:"center"}}>
                            <div style={{position:"relative"}}>
                                <h1 style={{color:'white',fontSize:"50px",fontWeight:"600"}}>
                                    تماس با ما
                                </h1>
                            </div>
                            <div >
                                <span style={{display:"flex",alignItems:"baseline",color:"white",fontSize:"12px"}}>
                                    <span>
                                        <NavLink to={"/"} style={({isActive,isPending})=>{
                                            return{
                                                    color:isActive?"#fff":"#fff",
                                                    padding:"0 3px"
                                                  }
                                            }}>پرتو پژوهان</NavLink>
                                    </span>
                                    »
                                    <span>
                                        تماس با ما
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={{padding:"20px",margin:"20px"}}>
                    <Container maxWidth="lg" sx={{display:"flex",justifyContent:"space-around",alignItems:"baseline",flexFlow:"wrap row"}}>
                        <Card sx={{ maxWidth: 350,minWidth:290,margin:"10px",boxShadow:"-2px 5px 30px gray" }}>
                            <CardContent sx={{display:"flex", flexDirection:"row",alignItems:"baseline",justifyContent:"start"}}>
                              <Box sx={{borderRadius:"50%",minWidth:"3em",height:"3em",backgroundColor:"orange"}}>
                                <PhoneEnabledIcon  sx={{
                                    color:"white",
                                    position:"relative",
                                    textAlign:'center',
                                    fontSize:"40px",
                                    right:"5px",
                                    top:"3px",

                                
                                }}/>
                              </Box>
                              <Box sx={{fontFamily:"IranSans",position:"relative",top:"-8px",padding:"0 10px"}}>
                                <h2 style={{fontWeight:"600"}}>تلفن</h2>
                                <p>0913-1378478</p>
                              </Box>
                            </CardContent>
                            {/* <CardActions>
                              <Button size="small">Learn More</Button>
                            </CardActions> */}
                        </Card>
                        <Card sx={{ maxWidth: 350,minWidth:290,margin:"10px",boxShadow:"-2px 5px 30px gray" }}>
                            <CardContent sx={{display:"flex", flexDirection:"row",alignItems:"baseline",justifyContent:"start"}}>
                              <Box sx={{borderRadius:"50%",minWidth:"3em",height:"3em",backgroundColor:"orange"}}>
                                <LocationOnIcon sx={{
                                    color:"white",
                                    position:"relative",
                                    textAlign:'center',
                                    fontSize:"40px",
                                    right:"4px",
                                    top:"3px"
                                    
                                }}/>
                              </Box>
                                <Box sx={{fontFamily:"IranSans",position:"relative",top:"-8px",padding:"0 10px"}}>
                                <h2 style={{fontWeight:"600"}}>آدرس</h2>
                                <p>کاشان</p>
                              </Box>

                            </CardContent>
                            {/* <CardActions>
                              <Button size="small">Learn More</Button>
                            </CardActions> */}
                        </Card>
                        <Card sx={{ maxWidth: 350,minWidth:290,margin:"10px",boxShadow:"-2px 5px 30px gray" }}>
                            <CardContent sx={{display:"flex", flexDirection:"row",alignItems:"baseline",justifyContent:"start"}}>
                              <Box sx={{borderRadius:"50%",minWidth:"3em",height:"3em",backgroundColor:"orange"}}>
                                <EmailIcon sx={{
                                    color:"white",
                                    position:"relative",
                                    textAlign:'center',
                                    fontSize:"40px",
                                    right:"4px",
                                    top:"3px"
                                    
                                }}/>
                              </Box>
                                <Box sx={{fontFamily:"IranSans",position:"relative",top:"-8px",padding:"0 10px"}}>
                                <h2 style={{fontWeight:"600"}}>ایمیل</h2>
                                <p>sdgh@kashanu.ac.ir</p>
                              </Box>

                            </CardContent>
                            {/* <CardActions>
                              <Button size="small">Learn More</Button>
                            </CardActions> */}
                        </Card>
                    </Container>
                </section>
                <section style={{margin:"50px"}}>
                    <Container maxWidth="xs" style={{textAlign:"center",backgroundColor:"#eee2dc", borderRadius:"10px"}} >
                        <h3 style={{color:"#123c69"}}>
                            نظرات و سوالات خود را با ما درمیان بگذارید
                        </h3>
                        <form action="/" method="post" name="فرم تماس">
                            {/* <label for=""></label> */}
                            <div >
                                <div style={{display:"flex",flexFlow:"wrap row",justifyContent:"center",alignItems:"center", margin:"5px"}}>
                                    <input  style={{lineHeight:"1.4",fontSize:"12px",minHeight:"10px",padding:"5px 15px",fontFamily:"IranSans",margin:"5px"}} type="text" placeholder="نام و نام خانوادگی"></input>

                                    <input  style={{lineHeight:"1.4",fontSize:"12px",minHeight:"10px",padding:"5px 15px",fontFamily:"IranSans",margin:"5px"}} type="text" placeholder="آدرس ایمیل"></input>
                                </div>
                                <div style={{display:"flex",flexFlow:"wrap row",justifyContent:"center",alignItems:"center" , margin:"5px"}}>
                                    <input  style={{lineHeight:"1.4",fontSize:"12px",minHeight:"10px",padding:"5px 15px",fontFamily:"IranSans",margin:"5px"}} type="text" placeholder="شماره تماس"></input>

                                    <input  style={{lineHeight:"1.4",fontSize:"12px",minHeight:"10px",padding:"5px 15px",fontFamily:"IranSans",margin:"5px"}} type="text" placeholder="موضوع"></input>
                                </div>
                                <div>
                                    <textarea style={{lineHeight:"1.4",fontSize:"15px",height:"20vw",width:"60vw",padding:"5px 15px",fontFamily:"IranSans"}} placeholder="پیغام"></textarea>
                                </div>
                            </div>
                            <Button  variant="contained" color="error" style={{margin:"5px",fontFamily:"IranSans"}} type="submit" >ارسال</Button>
                        </form>
                    </Container>
                </section>
            </div>
        </main>
    )
}
export default Contactus;
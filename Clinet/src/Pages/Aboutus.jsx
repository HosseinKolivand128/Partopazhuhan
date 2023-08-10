import { NavLink } from "react-router-dom"
import background from "../public/Pictures/aboutus.jpg"
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
                                    درباره ما
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
                                        درباره ما
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={{padding:"20px",margin:"20px"}}>
                    <Container maxWidth="lg" sx={{display:"flex",justifyContent:"space-around",alignItems:"baseline"}}>
                        
                    </Container>
                </section>

            </div>
        </main>
    )
}
export default Contactus;
import { Box } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import styles from "./footer.module.css";
import { red } from "@mui/material/colors";

const Footer=()=>{
    
    return(
    <>
        <footer >
            <section className={`${styles["box-container"]}`}>
                <Box sx={{
                    
                }}>
                    <p style={{color:"#ac3b61", fontWeight:"bolder"}}>محصولات</p>
                    <ul className={styles["p-list"]} >
                        <li>
                            <NavLink to={"/PPK-100"} style={({isActive,isPending})=>{
                    return{
                            color:isActive?"#f94e6d":"#151a1e",
                            // textAlign:"right"
                          }
                  }}>افزودنی آب‌گریز کننده PPK-100</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/PPK-101"} style={({isActive,isPending})=>{
                    return{
                            color:isActive?"#f94e6d":"#151a1e",
                            // textAlign:"right"
                          }
                  }}>افزودنی آب‌گریز کننده PPK-101</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/PPK-102"} style={({isActive,isPending})=>{
                    return{
                            color:isActive?"#f94e6d":"#151a1e",
                            // textAlign:"right"
                          }
                  }}>افزودنی آب‌گریز کننده PPK-102</NavLink>
                        </li>
                    </ul>
                </Box>
                <Box>
                    <h1 style={{color:"#ac3b61"}}>شرکت دانش بنیان پرتو پژوهان</h1>
                    <p>توضیحات درمورد شرکت</p>
                </Box>
                <Box >
                    <p style={{color:"#ac3b61",fontWeight:"bolder"}}>اطلاعات تماس</p>
                    <ul className={`${styles["contact-list"]}`}>
                        <li style={{ display:"flex", alignItems:"baseline", justifyContent:"space-between"}}>
                            <p>پست الکترونیک:</p>
                            <a href="mailto: sdgh@kashanu.ac.ir" style={{fontSize:"medium"}}>sdgh@kashanu.ac.ir</a>
                        </li>
                        <li style={{ display:"flex", alignItems:"baseline", justifyContent:"space-around"}}>
                            <p>شماره تماس:</p>
                            <a style={{fontSize:"medium"}}>0913-1378478</a>
                        </li>
                    </ul>
                </Box>
            </section>
        </footer>
    </>);
}

export default Footer;
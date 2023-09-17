import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar"
import AppBar from "./Components/AppBar"
import './App.css'
import Products from "./Pages/Products"
import MainPage from "./Pages/MainPage"
import Footer from "./Components/Footer"
// import { Button, Typography } from "@mui/material"
// import DropdownMenu from './Components/DropdownMenu';
// import { ThemeProvider } from '@mui/material/styles';
// import { theme } from './Styles/styles';
// import { styled } from "@mui/material/styles";
// import { green, purple, red } from "@mui/material/colors";
// import { Responsive } from './Styles/Responsive';
// const Responsive = styled("div")(({ theme }) => ({
//   [theme.breakpoints.up("mobile")]: {
//     color: green[500]
//   },
//   [theme.breakpoints.up("tablet")]: {
//     color: purple[500]
//   },
//   [theme.breakpoints.up("desktop")]: {
//     color: red[500]
//   }
// }));
import pic3 from "./public/Pictures/pic3.jpg"
import pic6 from "./public/Pictures/pic6.jpg"
import pic2 from "./public/Pictures/pic2.jpg"
import ppk100 from "./public/Documents/PPK-100.pdf"
import ppk101 from "./public/Documents/PPK-101.pdf"
import ppk102 from "./public/Documents/PPK-102.pdf"
import Contactus from './Pages/Contactus';
import Aboutus from './Pages/Aboutus';
import Resualts from './Pages/Resualts';

function App() {
const navLinks = [
    {
      name: "link one",
    },
    {
      name: "link two",
      children: [
        {
          name: "link two sub",
        },
        {
          name: "link two sub 2",
        },
      ],
    },
    {
      name: "link three",
      children: [
        {
          name: "link three sub",
        },
        {
          name: "link three sub 2",
          children: [
            {
              name: "deep 3",
            },
            {
              name: "deep 2nd 3",
            },
          ],
        },
        {
          name: "link three sub",
        },
      ],
    },
    {
      name: "link four",
    },
    {
      name: "link five",
      children: [
        {
          name: "link five sub 1",
        },
        {
          name: "link five sub 2",
        },
      ],
    },
  ];

  return (
    <div className="App">
    {/* <NavBar/> */}
    <AppBar/>
      <Routes>
        <Route
          path="/PPK-100"
          element={
            <Products props={{
            name:"افزودنی آبگریزکننده بتن و ملات سیمانی",
            description:"یکی از عمده ترین مشکلات انواع بتن ها و ملات‌های سیمانی، نفوذپذیری آن‌ها در برابر آب و به واسطه آن انواع یون‌های خورنده مانند کلر یا ترکیبات گوگردی است. این عامل باعث ایجاد خوردگی در مواد سیمانی گشته و با نفوذ آب به داخل بتن و ایجاد اکسیداسیون فلزات به‌کار رفته در داخل بتن، عمر سازه بتنی را کاهش می‌دهد. امروزه روش‌های متعددی برای کاهش نفوذ آب به سازه‌های بتنی و ملات‌های سیمانی استفاده می‌شود. افزودنی  PPK-100که به‌صورت پودر خاکستری رنگ می‌باشد، با بهره‌گیری از فناوری نانو، موجب نفوذ ناپذیری کل حجم سازه بتنی یا ملات سیمانی استفاده شده می‌گردد و با ایجاد خاصیت آبگریزی سطح، از غبارگرفتن و لک شدن آن جلوگیری می ‌کند. ماده استفاده شده در این محصول میکروذرات سیلیس هستند که با اصلاح سطح آن‌ها این میکروذرات فوق آبگریز گشته و با دو عملکرد می‌تواند مانع نفوذ آب به داخل سازه شوند. اول اینکه به دلیل اندازه بسیار کوچک این ذرات، در منافذ سازه بتنی جای گرفته و با پر کردن آن‌ها نفوذ آب را کاهش می‌دهند و دوم آن‌که این میکروذرات ابرآبگریز بوده و بدین وسیله نیز مانع نفوذ آب و سایریون‌های خورنده به داخل سازه می‌شوند. این کاربرد دوگانه محصول  PPK-100را به یک محصول منحصربفرد در نفوذناپذیری سازه‌های بتنی تبدیل کرده است. مواد به‌کار رفته در این محصول مواد طبیعی بوده و هیچ ماده مصنوعی در آن به‌کار نرفته است",
            others:{
              p1:{name:"افزوردنی آبگریزکننده ملات سیمانی",pic:pic6},
              p2:{name:"افزودنی آبگریزکننده کاهگل و بناهای تاریخی",pic:pic2},
              link:{l1:"/PPK-101",l2:"/PPK-102"}
            },
           images:[pic3],
            pdf:ppk100
          }}/>
          }
        ></Route>
        <Route
          path="/PPK-101"
          element={
            <Products props={{
            name:"افزودنی آبگریزکننده ملات سیمانی",
            description:"افزودنی  PPK-101که به صورت پودری سفیدرنگ می باشد. با بهره‌گیری از فناوری نانو، موجب نفوذ ناپذیری کل حجم سازه بتنی یا ملات سیمانی استفاده شده می‌گردد و با ایجاد خاصیت فوق آب‌گریزی سطح، از غبارگرفتن و لک شدن آن جلوگیری می‌کند. در این محصول از ریزذرات اصلاح سطح شده استفاده شده است که با اصلاح سطح آن‌ها این ریزذرات فوق آب‌گریز گشته و مانع نفوذ آب به داخل سازه می‌شوند. ایجاد خاصیت آب‌گریزی در کل حجم ملات یا پلاستر استفاده شده مزیت اصلی استفاده از محصول  PPK-101 این محصول مواد طبیعی بوده و هیچ ماده مصنوعی در آن به کار نرفته است است و به همین دلیل آن را یک محصول خاص برای استفاده در نفوذناپذیری انواع ملات‌ها و پلاسترها کرده است. رنگ کاملا سفید این محصول هیچ تغییری در نماهای سیمان سفید ایجاد نمی‌کند و با استفاده از این محصول از نفوذ آب کاملا جلوگیری می شود. مواد به‌کار رفته در این محصول مواد طبیعی بوده و هیچ ماده مصنوعی در آن به‌کار نرفته است",   
            others:{
              p1:{name:"افزودنی آبگریزکننده بتن و ملات سیمانی",pic:pic3},
              p2:{name:"افزودنی آبگریزکننده کاهگل و بناهای تاریخی",pic:pic2},
              link:{l1:"/PPK-100",l2:"/PPK-102"}

            },
            images:[pic6],
            pdf:ppk101
          }}/>
          }
        ></Route>
        <Route
          path="/PPK-102"
          element={
            <Products props={{
            name:"افزودنی آبگریزکننده کاهگل و بناهای تاریخی",
            description:"یکی از عمدهترین مشکلات انواع بتنها و ملات‌های سیمانی، نفوذپذیری آن‌ها در برابر آب است. این عامل باعث ایجاد خوردگی در خود مواد سیمانی گشته و حتی با نفوذ آب به داخل سازه می تواند منجر به خسارات جبران ناپذیر شود. امروزه روش‌های متعددی برای کاهش نفوذ آب به سازه‌های بتنی و ملات‌های سیمانی استفاده می‌شود. افزودنی  PPK-102که به صورت پودری سفیدرنگ می باشد. با بهره¬گیری از فناوری نانو، نفوذ ناپذیری را در کل حجم ملات سیمانی استفاده شده ایجاد کرده با ایجاد خاصیت فوق آب‌گریزی سطح، از غبارگرفتن و لک شدن آن جلوگیری می‌کند. در این محصول از ریزذرات اصلاح سطح شده استفاده شده است که با اصلاح سطح آن‌ها این ریزذرات فوق آب‌گریز گشته و مانع نفوذ آب به داخل سازه می‌شوند. ایجاد خاصیت آب‌گریزی در کل حجم ملات یا پلاستر استفاده شده مزیت اصلی استفاده از محصول  PPK-102است و به همین دلیل آن را یک محصول منحصربفرد برای استفاده در نفوذناپذیری انواع ملات‌ها و پلاسترها کرده است. رنگ کاملا سفید این محصول هیچ تغییری در نماهای سیمان سفید ایجاد نمی‌کند و با استفاده از این محصول از نفوذ آب کاملا جلوگیری می شود. مواد به‌کار رفته در این محصول مواد طبیعی بوده و هیچ ماده مصنوعی در آن به‌کار نرفته است",             
            others:{
              p1:{name:"افزودنی آبگریزکننده بتن و ملات سیمانی",pic:pic3},
              p2:{name:"افزودنی آبگریزکننده ملات سیمانی",pic:pic6},
              link:{l1:"/PPK-100",l2:"/PPK-101"}

            },
            images:[pic2],
            pdf:ppk102
          }}/>
          }
        ></Route>
         <Route
          path="/"
          element={
            <MainPage/>
          }
        ></Route>
         <Route
          path="/ContactUs"
          element={
            <Contactus/>
          }
        ></Route>
         <Route
          path="/AboutUs"
          element={
            <Aboutus/>
          }
        ></Route>
         <Route
          path="/Resualts"
          element={
            <Resualts/>
          }
        ></Route>

        {/*<Route
          path="/Student"
          element={
            <PrivateRoutes>
              <Student />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/SignUp"
          element={
            <PrivateRoutes>
              <SignUp />
            </PrivateRoutes>
          }
        ></Route>

        <Route element={<Login />} path="/" /> */}
      </Routes>

 {/* </Responsive> */}
 {/* </ThemeProvider> */}
 <Footer/>
 </div>
  )
}

export default App

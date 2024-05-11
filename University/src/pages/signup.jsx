import React, { useState } from 'react';
import {Link} from "react-router-dom"
import Navbar from '../components/navbar';
import background from "../assets/images/Signup.jpg"
import style from "./signup.module.css"
import { useNavigate  } from "react-router-dom";
import axios from 'axios';

export default function Signup(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (password!==cpassword) {
                alert("رمز عبور و تکرار آن یکسان نیستند")
            }else{
                const Data={
                    username:username,
                    password:password,
                    email:email
                }
                const User=await axios.post("http://localhost:8000/createUser",Data);
                if (User.status===201||User.statusText==="Created") {
                    alert("کاربر با موفقیت ثبت نام شد!")
                    navigate("/login")
                }
            }
        } catch (error) {
          console.error('Error adding recipe:', error);
        }
     };


return(<>
    <Navbar/>
        <section className={``} style={{background: `url(${background})`, height:"750px"}}>
            <section className='p-5'>
                <div className={`${style["form-container"]} container-lg rounded-5 d-flex flex-column gap-2 justify-content-around align-items-center mt-5`}>
                    <div className='d-flex flex-column justify-content-around align-items-center gap-3'>
                        <h2 className=''>حساب کاربری بسازید</h2>
                        <Link to="/login">حساب کاربری دارید؟</Link>
                    </div>
                    <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center gap-3'>
                       <div className='d-flex flex-column gap-2'>
                            <label for="username" className='fs-5'>نام کاربری</label>
                            <input
                              className={`${style["input"]}`}
                              id='username'
                              type="text"
                              placeholder="..."
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                       </div>
                       <div className='d-flex flex-column gap-2'>
                            <label for="email" className='fs-5'>ایمیل</label>
                            <input
                              className={`${style["input"]}`}
                              id='email'
                              type="email"
                              placeholder="info@email.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                       </div>
                       <div className='d-flex flex-column gap-2'>
                            <label for="password" className='fs-5'>رمز عبور</label>
                            <input
                              className={`${style["input"]}`}
                              id='password'
                              type="password"
                              placeholder="*****"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                       </div>
                       <div className='d-flex flex-column gap-2'>
                            <label for="cpassword" className='fs-5'>تایید رمز عبور</label>
                            <input
                              className={`${style["input"]}`}
                              id='cpassword'
                              type="password"
                              placeholder="*****"
                              value={cpassword}
                              onChange={(e) => setCPassword(e.target.value)}
                            />
                       </div>

                    <button className={`${style["login"]} btn btn-success fs-4`}>ثبت نام</button>
                    </form>
                </div>
            </section>
        </section>
</>)

}
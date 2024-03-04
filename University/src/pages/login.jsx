import React, { useState } from 'react';
import {Link} from "react-router-dom"
import Navbar from '../components/navbar';
import background from "../assets/images/Signup.jpg"
import style from "./signup.module.css"
export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        // Implement login logic here
        console.log('Logging in with:', username, password);
    };
return(<>
    <Navbar/>
        <section className={``} style={{background: `url(${background})`, height:"750px"}}>
            <section className='p-5'>
                <div className={`${style["form-container"]} container-lg rounded-5 d-flex flex-column gap-2 justify-content-around align-items-center mt-5`}>
                    <div className='d-flex flex-column justify-content-around align-items-center gap-3'>
                        <h2 className=''>ورود به حساب کاربری</h2>
                        <Link to="/signup">حساب کاربری ندارید؟</Link>
                    </div>
                    <div className='d-flex flex-column align-items-center gap-3'>
                       <div className='d-flex flex-column gap-2'>
                            <label for="username" className='fs-5'>نام کاربری</label>
                            <input
                              className={`${style["input"]}`}
                              id='username'
                              type="text"
                              placeholder="info@email"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
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
                     <Link to="/signup">نیاز به کمک دارید؟</Link>

                    </div>
                    <button onClick={handleLogin} className={`${style["login"]} btn btn-success fs-4`}>ورود</button>
                </div>
            </section>
        </section>
</>)

}
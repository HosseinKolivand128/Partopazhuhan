import React, { useState } from 'react';
import {Link} from "react-router-dom"
import background from "../assets/images/Signup.jpg"
import style from "./signup.module.css"
export default function Signup(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const handleLogin = (e) => {
        // Implement login logic here
        e.preventDefault();
        if (cpassword===password) {
            alert(`Singed in with: ${username} ${password}`);
            setUsername("");
            setPassword("");
            setCPassword("");
        }else{
            alert("Passwords field's are not same");

        }
    };
return(<>
            <section className={``} style={{background: `url(${background})`, backgroundSize:"cover",height:"100vh",width:"100vw",backgroundPosition:"center"}}>
            <section className='p-5 '>
                <div className={`${style["form-container"]} container-lg rounded-5 `}>

                    <form action='#' method=''className={`d-flex flex-column gap-3 justify-content-around align-items-center mt-5`}>

                    <div className='d-flex flex-column justify-content-around align-items-center gap-3'>
                        <h2 className='fw-bold fs-1'style={{color:"#102c30",borderBottom:"1px solid black"}}>Sign up</h2>

                        <Link to="/login" style={{color:"gold"}}>Have an account?</Link>
                    </div>
                    <div className='d-flex flex-column align-items-center gap-5'>
                       <div className='d-flex flex-column gap-2'>
                            {/* <label for="username" className='fs-5 fw-bold '>Username</label> */}
                            <input
                            style={{color:"white"}}
                              className={`${style["input"]} fw-bold fs-5`}
                              id='username'
                              type="text"
                              placeholder="Enter your username"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              />
                       </div>
                       <div className='d-flex flex-column gap-3'>
                            {/* <label for="password" className='fs-5 fw-bold '>Password</label> */}
                            <input
                            style={{color:"white"}}
                              className={`${style["input"]} fw-bold fs-5`}
                              id='password'
                              type="password"
                              placeholder="Enter your password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              />
                       </div>
                       <div className='d-flex flex-column gap-3'>
                            {/* <label for="cpassword" className='fs-5 fw-bold '>Confirm Password</label> */}
                            <input
                            style={{color:"white"}}
                              className={`${style["input"]} fw-bold fw-bold fs-5`}
                              id='cpassword'
                              type="password"
                              placeholder="Confirm your password"
                              value={cpassword}
                              onChange={(e) => setCPassword(e.target.value)}
                              />
                       </div>
                    </div>
                    <button onClick={handleLogin} style={{backgroundColor:"#0e2c31",color:"gold"}} className={`${style["login"]} btn fs-5 fw-bold mt-4`}>Sign up</button>
                    </form>
                </div>
            </section>
        </section>
</>)

}
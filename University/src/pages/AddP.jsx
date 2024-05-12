import React, { useState } from 'react';
// import {Link } from "react-router-dom";
// import { useNavigate  } from "react-router-dom";
import Navbar from '../components/navbar';
// import background from "../assets/images/Signup.jpg"
// import style from "./signup.module.css"
import axios from 'axios';
export default function AddProduct(){
    // const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const User=await axios.post("http://localhost:8000/getByUsername",{username:username});
//       if (!User.data) {
//         alert("کاربر با این نام کاربری یافت نشد")
//       }else{
//             if (!User.data.password||User.data.password!==password) {
//                 alert("نام کاربری یا کلمه عبور نامعتبر")
//             }else{
//                 navigate("/adminPanel");
//             }
//       }
//     } catch (error) {
//       console.error('Error adding recipe:', error);
//     }
//   };
const [recipe, setRecipe] = useState({
    description: '',
    title: '',
    instructions: '',
    name: '',
    image: '',
    usage: '',
    file: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const User=await axios.post("http://localhost:8000/sendProduct",recipe);
      // Assuming successful submission, you can redirect or show a success message here
      console.log('Recipe added successfully');
    } catch (error) {
      console.error('Error adding recipe:', error);
      // Handle error
    }
  };
  
return(<>
    <Navbar/>
        <div>
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={recipe.description} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={recipe.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="instructions">Instructions:</label>
          <input type="text" id="instructions" name="instructions" value={recipe.instructions} onChange={handleChange}></input>
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={recipe.name} onChange={handleChange} />
        </div>
        {/* <div>
          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" name="image" value={recipe.image} onChange={handleChange} />
        </div> */}
        {/* <div>
          <label htmlFor="usage">Usage:</label>
          <input type="text" id="usage" name="usage" value={recipe.usage} onChange={handleChange} />
        </div> */}
        {/* <div>
          <label htmlFor="file">File:</label>
          <input type="text" id="file" name="file" onChange={handleChange} />
        </div> */}
        <button type="submit">Submit</button>
      </form>
    </div>
</>)

}
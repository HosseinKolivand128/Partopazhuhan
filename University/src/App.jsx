import { useState } from 'react'
import{createBrowserRouter, RouterProvider} from 'react-router-dom'


// import './App.css'

import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'
import NotFound from './pages/notFound.jsx'


const router=createBrowserRouter([
  {
    path:"/login",
    element:<Login/>,
    errorElement:<NotFound/>
  },
  {
    path:"/signup",
    element:<Signup/>,
    errorElement:<NotFound/>
  },
]);

function App() {

  return (
    <>
      {/* <Navbar/> */}
      <RouterProvider router={router}/>
      {/* <Footer/> */}
    </>
  )
}

export default App

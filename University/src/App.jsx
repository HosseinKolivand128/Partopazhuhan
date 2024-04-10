import { useState } from 'react'
import{createBrowserRouter, RouterProvider} from 'react-router-dom'

import Jobs from './pages/Jobs';
import NotFound from './pages/notFound';
const router=createBrowserRouter([
  {
    path:"/jobs",
    element:<Jobs/>,
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

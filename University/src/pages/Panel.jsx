import Navbar from "../components/navbar";
export default function Panel({user}) {
  return (
    <>
    <Navbar/>
    <div style={{height:"700px"}}>

    <h1 style={{textAlign:"center",paddingTop:"50%"}}>
        Welcome to Admin Panel
    </h1>
    </div>
    </>
  );
}
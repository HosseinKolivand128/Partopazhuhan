import Navbar from "../components/navbar";
import nofouz from "../assets/images/nofouz.jpg"
import style from "./result.module.css"
import { Link } from "react-router-dom";
import Banner from "../components/banner";
import video1 from "../assets/video/1_6320137056.mp4"
import video2 from "../assets/video/1_6320139131.mp4"
export default function Results(){
    return(
    <>
    <Navbar/>
       <section>
            <Banner props={{title:"نتایج",image:nofouz}}/>
             <section className={`${style["resualt-content"]} container-fluid rounded-top-5 pb-5 d-flex flex-column justify-content-center align-items-center`}>
            <h2 className={`${style["heading"]} text-center fw-medium mt-3 mb-5`}> نتایج شگفت انگیز </h2>
            <div className="row justify-content-center gap-3">
                <video className="col-md-5 rounded-2" controls>
                    <source src={video1} type="video/mp4" />
                    {/* <source src="movie.ogg" type="video/ogg"> */}
                    Your browser does not support the video tag.
                </video>
                <video className="col-md-5 rounded-2" controls>
                    <source src={video2} type="video/mp4" />
                    {/* <source src="movie.ogg" type="video/ogg"> */}
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
        </section> 
    </>)
}
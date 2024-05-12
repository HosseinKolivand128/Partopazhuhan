import Navbar from "../components/navbar";
import nano from "../assets/images/Nano.jpg"
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
            <Banner props={{title:"راهنمای مصرف",image:nano}}/>
             <section className={`${style["resualt-content"]} container-fluid rounded-top-5 pb-5 d-flex flex-column justify-content-center align-items-center`} style={{minHeight:"450px"}}>
            <h2 className={`${style["heading"]} text-center fw-medium mt-3 mb-5`}> راهنمای مصرف محصولات</h2>
            <div className="row justify-content-center gap-3">
                برای مصرف کننده از لحاظ هزینه اختصاص داده شده به خرید کود در باغات، دستور مصرف کودهای کلاته خضراء در 3 دسته “اولیه”، “میانی”و “تخصصی”رده بندی میشونددر هر سه نوع رده بندی، دستور مصرف ارائه شده به شکل مکمل است و باید کودهای پایه (اوره، سولفات پتاسیم و سوپر فسفات تریپل و کودهای حیوانی و…) طبق آنالیز خاک و نیاز باغ تأمین گردد. در “رده بندی اولیه”، جهت صرف کمترین هزینه، حداقل تعداد و مقدار کود مورد نیاز گیاه لحاظ شده است. در “رده بندی میانی”، جهت بهره وری بالاتر، تعداد و مقدار کودهای بیشتری (با در نظر گرفتن هزینه) مد نظر قرار داده شده است. در “رده بندی تخصصی”، یک دستور مصرف کامل با توجه به جمیع نیازهای فیزیولوژیک و لحاظ کردن کمبودهای احتمالی گیاه مد نظر قرار داده شده است.
            </div>
        </section>
        </section> 
    </>)
}
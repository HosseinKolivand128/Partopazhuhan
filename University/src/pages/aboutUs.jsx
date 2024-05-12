import { Link } from "react-router-dom";
import about from "../assets/images/Aboutus.jpg";
import style from "./result.module.css";
import Banner from "../components/banner";
import Navbar from "../components/navbar";
export default function AboutUs() {
    return (
        <>
        <Navbar/>
            <Banner props={{ title: "درباره ما" ,image:about}}/>
            <main className={`${style["about-main"]} p-3 mt-5 mb-5`}>
                <section className="text-center container-lg">
                    <h2 className={`${style["heading"]} text-center`}>
                        شرکت پرتوپژوهان
                    </h2>
                    <p className={`${style["about-desc"]} mt-3 fw-medium fs-5`}>
با توجه به توسعه به کار گیری پرتو در امور مختلف پزشکی، صنعت و … همچنین مخرب بودن اثر پرتو های پر انرژی روی بدن و سلامتی افراد، حفاظ گذاری روی چشمه ها نقش حائز اهمیتی دارد. شرکت پرتوپژوهان با هدف طراحی و تولید محصولات حفاظ گذاری فعالیت خود را آغاز نمود و با بهره مندی از دانش و توان متخصصان علمی توانست طیفی از محصولات از جمله بلوک های ضد اشعه و افزودنی های آبگریز را طراحی و تولید نماید.                    </p>
                </section>
            </main>
        </>
    )
}
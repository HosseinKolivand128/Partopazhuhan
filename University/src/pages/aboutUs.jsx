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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequuntur aliquam explicabo
                        quas labore nemo, veniam nobis, pariatur maxime dolorum eaque recusandae eos consequatur adipisci. Eius
                        repudiandae nesciunt corporis quas ea? Nesciunt tempora adipisci nisi ex beatae sunt reiciendis dolorum
                        est rerum sequi deserunt nihil temporibus explicabo, non sapiente ratione quasi facilis perspiciatis
                        quibusdam laborum nemo aliquam. Libero consequatur, quam architecto fuga, magni ab sed suscipit id
                        cupiditate eius, asperiores expedita quasi ullam temporibus neque est eos? Vero velit hic laborum
                        voluptas cum tempore, vitae aspernatur reiciendis nisi ipsum veritatis expedita quaerat ducimus
                        molestias. Laudantium error voluptate eligendi at nesciunt!
                    </p>
                </section>
            </main>
        </>
    )
}
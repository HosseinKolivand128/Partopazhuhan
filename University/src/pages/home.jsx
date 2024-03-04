import Carousel from "../components/carousel";
import Navbar from "../components/navbar";
import imgPPK100 from "../assets/images/PPK100.jpg"
import imgPPK1001 from "../assets/images/PPK100-1.jpg"
import imgPPK101 from "../assets/images/PPK101.jpg"
import imgPPK1012 from "../assets/images/PPK1012.jpg"
import imgPPK102 from "../assets/images/PPK102.jpg"
import imgPPK1022 from "../assets/images/ppk1022.jpg"
import abgoriz from "../assets/images/Abgoriz.jpg"
import nofouz from "../assets/images/nofouz.jpg"
import sami from "../assets/images/sami.jpg"
import style from "./home.module.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
    <Navbar/>
      <main>
        <section className={`${style['p1']}`}>
          <section className="container-lg d-flex flex-wrap-reverse flex-md-nowrap flex-row justify-content-around align-items-center gap-5 ">
            <Carousel images={[imgPPK101,imgPPK100,imgPPK102]} style={{ width: "350px", height: "350px" }} />
            <div className="text-center mt-2">
              <h1 className="mb-4">شرکت پرتوپژوهان</h1>
              <p id="companyDescription">
                {/* <!-- //! GET Company Desc --> */}
                hello this is description of the website and company
              </p>
            </div>
          </section>
        </section>
        <section className={`${style["p p2"]}`}>
          <section className="d-flex justify-content-center flex-column align-items-center">
            <div className={`${style['s2-title']} text-center mt-5 fs-4 `}>
              دسته بندی محصولات افزودنی
            </div>
            <div className={`${style["divider"]}`}>
              <span className={`${style["icon"]}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-droplet-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13" />
                </svg>
              </span>
            </div>
            <section className="container-lg mt-4 mb-4 p-5 mt-5 d-flex flex-wrap justify-content-center align-items-center gap-5">
              <div
                className={`${style["product-card"]}`}
                style={{ backgroundImage: `url(${imgPPK1001})` }}
              >
                <div className={`${style['cards-content']} d-flex flex-column align-items-center justify-content-center`}>
                  <strong>
                  بتن و ملات سیمانی
                  </strong>
                  <div>
                    PPK-100
                  </div>
                  <Link to="/products/PPK-100" target="_blank">
                    <button type="button" className="btn btn-outline-light">
                      مشاهده
                    </button>
                  </Link>
                </div>
              </div>
              <div
                className={`${style["product-card"]}`}
                style={{ backgroundImage: `url(${imgPPK1022})` }}
              >
                <div className={`${style['cards-content']} d-flex flex-column align-items-center justify-content-center`}>
                  <strong>
                    ملات سیمانی
                  </strong>
                  <div>PPK-101</div>
                  <Link to="/products/PPK-101" target="_blank">
                    <button type="button" className="btn btn-outline-light">
                      مشاهده
                    </button>
                  </Link>
                </div>
              </div>
              <div
                className={`${style["product-card"]}`}
                style={{ backgroundImage: `url(${imgPPK1012})` }}
              >
                <div className={`${style['cards-content']} d-flex flex-column align-items-center justify-content-center`}>
                  <strong>
                    کاهگل و بناهای تاریخی
                  </strong>
                  <div>
                    PPK-102
                  </div>
                  <Link to="/products/PPK-102" target="_blank">
                    <button type="button" className="btn btn-outline-light">
                      مشاهده
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </section>
        </section>
        <section className={`${style["p1"]} mt-5`}>
          <section className="d-flex justify-content-center flex-column align-items-center">
            <div className={`${style['s2-title']} text-center mt-5 fs-4 `}>
              ویژگی های افزودنی های نفوذناپذیر
            </div>
            <div className={`${style["divider"]}`}>
              <span className={`${style["icon"]}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-droplet-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13" />
                </svg>
              </span>
            </div>
            <section className="container-lg mt-4 mb-4 d-flex  flex-wrap  justify-content-around align-items-center gap-5 p-5">
              <div
                className={`${style["card"]} rounded-2`}
                style={{ width: "20rem", height: "20rem" }}
              >
                <img
                  src={abgoriz}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body mt-4">
                  <p className={`${style["card-text"]} text-center`}>
                    ایجاد آب گریزی در سطح بناهای تاریخی و ضد گرد و غبار کردن آن
                  </p>
                </div>
              </div>

              <div
                className={`${style["card"]} rounded-2`}
                style={{ width: "20rem", height: "20rem" }}
              >
                <img
                  src={nofouz}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body mt-4">
                  <p className={`${style["card-text"]} text-center`}>
                    کاهش شدید نفوذپذیری کاهگل در برابر و سایر سیال ها
                  </p>
                </div>
              </div>
              <div
                className={`${style["card"]} rounded-2`}
                style={{ width: "20rem", height: "20rem" }}
              >
                <img
                  src={sami}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body mt-3">
                  <p className={`${style["card-text"]} text-center`}>
                    غیر سمی و فاقد یون کلر و قابل استفاده برای تمام سازه های
                    تاریخی و گلی
                  </p>
                </div>
              </div>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}
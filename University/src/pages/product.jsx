import { useParams } from "react-router-dom";
import Carousel from "../components/carousel";
import Navbar from "../components/navbar";
import style from "./product.module.css";

export default function Product({ props }) {
  // const params=useParams();
  function productUsage(usages) {
    return usages.map((item) => {
      return <li>{item}</li>;
    });
  }
  console.log(style["divider"]);
  return (
    <>
    <Navbar/>
      <main>
        {/* <section className="container-lg banner"> */}
        <section className={`${style["banner"]} container-lg`}>
          <section className="d-flex flex-wrap-reverse flex-lg-nowrap flex-row justify-content-around align-items-center gap-5 ">
            <div className="text-center mt-2">
              <h1 className="text-primary-emphasis" id="productTitle">
                {props.title}
              </h1>
              <p className="fs-4 text-primary-emphasis mt-1" id="productName">
                {props.name}
              </p>
              <div className={`${style["divider"]}`}></div>
              {/* <p className="description fs-5 fw-medium" id="productDescription"> */}
              <p
                className={`${style.description} fs-6 fw-medium`}
                id="productDescription"
              >
                {props.description}
              </p>
            </div>
            <Carousel images={props.images} style={{ width: "350px", height: "350px" }} />
          </section>
        </section>
        {/* <section className="p container-sm p-2 mt-5"> */}
        <section className={`container-sm p-2 mt-5`}>
          <p className="fs-3 fw-medium text-primary-emphasis">
            کاربرد ها و فواید مصرف
          </p>
          <ul className="fs-5 fw-normal p-3" id="usageList">
            {/* <!-- //!Create Li for usages --> */}
            {productUsage(props.usages)}
          </ul>
        </section>

        <section className="p container-sm p-3 mt-5">
          {/* <details className="description fs-5" id="instruction"> */}
          <details className={`${style["description"]} fs-5`} id="instruction">
            <summary className="fs-3 fw-medium text-primary-emphasis mb-3">
              روش استفاده
            </summary>
            {/* <!-- //!How to use Desc --> */}
            <span className="fs-5 fw-medium title-way">روش اول:</span>
            {props.instructions}
          </details>
        </section>
        <section className="mb-5">
          <div className="text-center m-5 gap-3">
            <a href={props.file} download={props.title}>
            <button type="button" className="btn btn-warning " id="file">
              دانلود بروشور
            </button>
            </a>
            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              سفارش محصول
            </button>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header d-flex justify-content-between">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      سفارش محصول
                    </h1>
                  </div>
                  <div className="modal-body">
                    <div>
                      <p>اطلاعات تماس جهت سفارش محصول</p>
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <p>تلفن:</p>
                        <p>0910</p>
                      </div>
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <p>ایمیل:</p>
                        <p>0910</p>
                      </div>
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <p>تلگرام:</p>
                        <p>0910</p>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      بستن
                    </button>
                    {/* <!-- <button type="button" className="btn btn-primary">Understood</button> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>{/* for other products */}</section>
      </main>
    </>
  );
}

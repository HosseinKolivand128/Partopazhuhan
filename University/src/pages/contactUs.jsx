import Banner from "../components/banner";
import contact from "../assets/images/contactus-1.jpg"
import style from "./result.module.css"
import Navbar from "../components/navbar";
export default function ContactUs(){
    return(
        <>
            <Navbar/>
            <Banner props={{title:"ارتباط با ما",image:contact}}/>
            <section className={`${style["cbody"]} p-5 mt-5 mb-5`}>
            <section className="row justify-content-center gap-5">
                <div className="card fs-5 shadow-lg col-4 pt-4 d-flex justify-content-center flex-row align-items-baseline" style={{ width: '22rem', height: '11rem' }}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className={`${style['bi']} bi-telephone-fill`} viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>
                    </div>
                    <div className="card-body">
                        <div className="card-text">
                            <div className="fw-medium">تلفن: </div>
                            <div className="mt-2">
                                <p>0991-9302969</p>
                                <p>031-55913043</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card fs-5 shadow-lg col-4 pt-4 d-flex justify-content-center flex-row align-items-baseline" style={{ width: '22rem', height: '11rem' }}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className={`${style['bi']} bi-geo-alt-fill`} viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                    </div>
                    <div className="card-body">
                        <div className="card-text">
                            <div className="fw-medium">آدرس: </div>
                            <p className="p-1">
                                کاشان، بلوار نماز، میدان امیر به انتهای خیابان دانشگاه
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card fs-5 shadow-lg col-4 pt-4 d-flex justify-content-center flex-row align-items-baseline" style={{ width: '22rem', height: '11rem' }}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className={`${style['bi']} bi-envelope-at-fill`} viewBox="0 0 16 16">
                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                        </svg>
                    </div>
                    <div className="card-body">
                        <div className="card-text">
                            <div className="fw-medium">ایمیل: </div>
                            <p className="p-3">
                                sdgh@kashanu.ac.ir
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        </>
    )
}
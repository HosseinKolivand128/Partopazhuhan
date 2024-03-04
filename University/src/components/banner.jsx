import { Link } from "react-router-dom"
import style from "./banner.module.css"

export default function Banner({props}){
    return(<>

            <section className={`${style["banner"]} mb-2`} style={{background: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.40)), url(${props.image})`}}>
                <div className="text-center mr-auto ml-auto">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <h2 className="fw-bold">
                                {props.title}
                            </h2>
                        </div>
                        <div>
                            <span className={`${style["path"]} d-flex align-items-baseline`}>
                                <span>
                                    <Link to="/">پرتوپژوهان</Link>
                                </span>
                                »
                                <span>
                                    {props.title}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
    </>)
}
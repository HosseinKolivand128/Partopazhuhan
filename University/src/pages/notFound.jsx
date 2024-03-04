import { Link } from "react-router-dom";

export default function NotFound(){
    return(<>
    <div style={{height:"500px", textAlign:"center",marginTop:"300px"}} className="fs-2">

    <div >:404</div>
    <div >صفحه مورد نظر پیدا نشد</div>
    <Link to="/">بازگشت به سایت</Link>
    </div>
    </>)
}
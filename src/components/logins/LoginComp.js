import HeaderV2 from "../headerCon/HeaderV2.js";
import Footer from "../Footers/Footercontainer/Footer.js";
import LoginBody from "./LoginBody.js";
import TopAdd from "../addsComponents/TopAdd";


function LoginCompo (){

    return(
        <div>
            <TopAdd/>
            <HeaderV2/>
            <LoginBody/>
            <Footer/>
        </div>
    )
}
export default LoginCompo;
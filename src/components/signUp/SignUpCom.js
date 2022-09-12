import Footer from "../Footers/Footercontainer/Footer";
import TopAdd from "../addsComponents/TopAdd";
import HeaderV3 from "../headerCon/HeaderV3";
import SignUpBody from "./SignUpBody";

function SignUpCom(){
    return(
        <div>
            <TopAdd/>
            <HeaderV3/>
            <SignUpBody/>
            <Footer/>
        </div>
    )
}
export default SignUpCom;
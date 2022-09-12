import LoginCompo from "../components/logins/LoginComp";
import HomePage from "../components/@home/Homepage";
import SignUpCom from "../components/signUp/SignUpCom";
import StoreCart from "../components/cartsComp/Cart";
import AboutUs from "../components/Footers/Dependencies/AboutUs";
import Privacy from "../components/Footers/Dependencies/Privacy";
import ReturnPolicy from "../components/Footers/Dependencies/ReturnPolicy";
import Delivery from "../components/Footers/Dependencies/Delivery";
import LargePurchase from '../components/Footers/Dependencies/LargePurchase';
import Faqs from "../components/Footers/Dependencies/Faqs";
import DeliveryTF from "../components/Footers/Dependencies/DeliveryTF";
import LogisticServices from "../components/Footers/Dependencies/LogisticServices";
import ContactUs from "../components/Footers/Dependencies/ContactUs";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function RouteV2(){
    return (
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="account/login" element= {<LoginCompo/>} />
                <Route path="account/signup" element= {<SignUpCom/>} />
                <Route path="/cart" element={<StoreCart/>}/>
                <Route path='/About' element={<AboutUs/>}/>
                <Route path='/privacy-protection' element={<Privacy/>}/>
                <Route path='/return-policy' element={<ReturnPolicy/>}/>
                <Route path='/goodsandservices-delivery' element={<Delivery/>}/>
                <Route path='/large-purchase' element={<LargePurchase/>}/>
                <Route path="/FAQs" element={<Faqs/>}/>
                <Route path="/delivery-timeframe" element={<DeliveryTF/>}/>
                <Route path="/logistic-services" element={<LogisticServices/>}/>
                <Route path="/contact-us" element={<ContactUs/>}/>
            </Routes>
    )
}
export default RouteV2;
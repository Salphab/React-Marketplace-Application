
import './Footer.css';
import {Link} from 'react-router-dom';
function Footer (){
    return(
        <footer id='footercon'>
           <div id ='footer1'>
            <div id='newsletter'>
                <h4>BUSINESS NAME NEWSLETTER</h4>
                <p>Subcribe to our newsletter for updates on new and existing products</p>
                <form action='' method=''>
                    <input id='subbox' name='subscription' placeholder='Email Address...' type='text' onFocus={(e)=>{
                            e.preventDefault
                            e.currentTarget.placeholder = '';
                    }} onBlur={(e)=>{
                        e.preventDefault;
                        e.currentTarget.placeholder = 'Email Address...';
                    }}/>
                    <input id='subbutton' name='submit' type='submit' value='Subcribe'/>
                </form>
            </div>
            <div  id='mobileapp'>   
                <div id='appleandandroidheader'>
                   <h4>DOWNLOAD OUR APP ON</h4>
                   <p>For more exotic deals and experience </p>
                </div>
                <div id='appleandandroidcon'>
                <a href='df' id='androidcon'>
                    <i className='bx bxl-play-store'></i>
                    <div>
                        <p>Download on </p>
                        <h4>PlayStore</h4>
                    </div>         
                </a>
                <a href='sd' id='applecon'>
                    <i className='bx bxl-apple'></i>
                    <div>
                        <p>Download on </p>
                        <h4>AppStore</h4>
                    </div>
                </a>
                </div>    
                
            </div>
           </div>
           <div id='footer2con'>
                <div id='footer2'>
                    <div className ='aboutcon'>
                        <h4>ABOUT OUR SERVICE</h4>
                        <ul id='aboutlist'>
                            <li><Link to='/About'>About Us</Link></li>
                            <li><Link to='/contact-us'>Contact Us</Link></li>
                            <li><a href='aa'>Career</a></li>
                            <li><Link to='/privacy-protection'>Privacy and Cookies</Link></li>
                            <li><a href='aa'>Report a Product</a></li>
                            <li><a href='aa'>Terms and Condition</a></li>
                        </ul>
                    </div>
                    <div className='aboutcon'>
                        <h4>BUY ON OUR BUSINESS</h4>
                        <ul id='aboutlist'>
                            <li><a href='aa'>Buyer's Help Centre</a></li>
                            <li><Link to='/return-policy'>Return Policy</Link></li>
                            <li><Link to='/large-purchase'>Large Quantity Purchase</Link></li>
                            <li><Link to='/goodsandservices-delivery'>Delivery</Link></li>
                            <li><a href='aa'>Order Tracker</a></li>
                            <li><Link to='/FAQs'>FAQs</Link></li>
                        </ul>
                    </div>
                    <div className='aboutcon'>
                        <h4>PAYMENT METHODS</h4>
                        <ul id='aboutlist'>
                            <li><a href='aa'>MasterCard</a></li>
                            <li><a href='aa'>Visa</a></li>
                            <li><a href='aa'>Verve</a></li>
                            <li><a href='aa'>Flutterwave</a></li>
                            <li><a href='aa'>InterSwitch</a></li>
                            <li><a href='aa'>Wallet</a></li>
                        </ul>
                    </div>
                    <div className='aboutcon'>
                        <h4>HELP AND SUPPORT</h4>
                        <ul id='aboutlist'>
                            <li><a href='aa'>Help Center</a></li>
                            <li><Link to='/delivery-timeframe'>Delivery types and timelines</Link></li>
                            <li><a href='aa'>How to return a product on Jumia?</a></li>
                            <li><a href='aa'>Sell on Rhanda</a></li>
                            <li><Link to='/logistic-services'>Ship your package anywhere in Nigeria</Link></li>
                            <li><a href='aa'>Dispute Resolution Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div id='footer2mini'>
                <div id='socialmedia'>
                    <h4>WE ARE AVAILABLE ON</h4>
                    <div>
                        <a href='ddj'><span><i className='bx bxl-facebook'></i></span></a>
                        <a href='ddj'><span><i className='bx bxl-twitter'></i></span></a>
                        <a href='ddj'><i className='bx bxl-instagram'></i></a>
                        <a href='ddj'><i className='bx bxl-youtube'></i></a>
                    </div>
                </div>
                <div id='contactus'>
                    <h4>URGENT CONTACTS</h4>
                    <div className='contactussub'>
                        <i className='bx bx-envelope'></i><span>Email:Randomaddress@domain.com</span>
                    </div>
                    <div className='contactussub'>
                        <i className='bx bx-phone-call'></i><span>070000343343</span>
                    </div>
                    <div className='contactussub'>
                        <i className='bx bxl-whatsapp' ></i><span>0803435453433</span>
                    </div>
                    
                </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
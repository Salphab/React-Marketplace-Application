import './HelpNav.css';
import {Link} from 'react-router-dom';

function HelpNav(){
    return(
    <div className='helpnav'>
        <ul>
            <Link to='/'><li>Help Centre</li></Link>
            <Link to='/'><li>Track Order</li></Link>
            <Link to='/'><li>Order Cancellation</li></Link>
            <Link to='/'><li>Return and Refund Policies</li></Link>
            <Link to='/'><li>Contact Us</li></Link>
        </ul>
    </div>)
}
export default HelpNav;

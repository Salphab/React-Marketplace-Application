import react from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import HelpNav from '../helpCon/HelpNav';

const search = require('../../../src/png/search.png');
const cart = require('../../../src/png/shopping2-cart.png')

function Header (){
    
    const [cartCount, setCartCount]=react.useState(0);
    return(
        <header className='mainHeader' >
            <HelpNav/>
            <Link className='homeLogo' to='/'>
                <img src='' alt='siteLogo'/>               
            </Link>
           <form action='' method='Get'>
                <input type ='text' name='itemSearch'id='searchBar' placeholder='Iphone 13 pro max...'/>
                <input type='image' src={search} alt='submit' id='search'/>

           </form>
           
           <div id ='accBar'>
                <div id='accItems'>
                    <i class='bx bx-help-circle'></i>
                    <p> Help</p>
                    <button type='button' id='helpdown' onClick={(e)=>{
                            e.preventDefault;
                            e.currentTarget.style.display='none';
                            const btnup = document.getElementById('helpup');
                            btnup.style.display = 'flex';
                            const HelpNav = document.querySelector('.helpnav');
                            HelpNav.style.display = 'block';
                    }}>
                        <i class='bx bx-chevron-down'></i>
                    </button>
                    <button type='button' id='helpup' onClick={(e)=>{
                            e.preventDefault;
                            e.currentTarget.style.display='none';
                            const btnup = document.getElementById('helpdown');
                            btnup.style.display = 'flex';
                            const HelpNav = document.querySelector('.helpnav');
                            HelpNav.style.display = 'none';
                    }}>
                        <i class='bx bx-chevron-up'></i>
                    </button>
                </div>
                <Link id='accItems2' to='/account/login'>Log In</Link>
                <div id='accItems3'>
                <Link to='/account/signup' id='signup'>Sign Up</Link>
                </div>
                <Link to='/cart' id='accItems4'>
                    <img src={cart} alt='shoppingCart'/>
                    <p>My<br/>Cart</p>
                    <div>
                        <p>{cartCount}</p>
                    </div>
                </Link>
           </div>
        </header>
        
        
    
    )
}
export default Header;
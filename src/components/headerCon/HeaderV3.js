
import react from 'react';
import './HeaderV2.css';
import {Link} from 'react-router-dom';
import CatListV2 from '../cartsComp/CatListV2';
import HelpNav from '../helpCon/HelpNav';


const search = require('../../png/search.png');
const cart = require('../../png/shopping2-cart.png');

function HeaderV2 (){
    
    
    const [cartCount, setCartCount]=react.useState(0);
    return(
        <header className='mainHeaderV2'>
            <CatListV2/>
            <HelpNav/>
            <div className='catappearance'onMouseOver={(e)=>{
                e.preventDefault;
                const catappearance = document.querySelector('.catandsubcatV2');
                catappearance.style.display = 'flex';
                }} onMouseLeave={(e)=>{
                e.preventDefault;
                const catappearance = document.querySelector('.catandsubcatV2');
                catappearance.style.display = 'none';
                }}>         
                <p>Category</p>
                <img src={require('../../../src/png/menu.png')}/>
            </div>
            <Link className='homeLogoV2' to='/'>
                <img src='' alt='siteLogo'/>               
            </Link>
           <form action='' method='Get' className='searchitems'>
                <input type ='text' name='itemSearch'id='searchBarV2' placeholder='Iphone 13 pro max... '/>
                <input type='image' src={search} alt='submit' id='searchV2'/>
           </form>
           
           <div id ='accBarV2'>
           <div id='accItemsV2'>
                    <i class='bx bx-help-circle'></i>
                    <p> Help</p>
                    <button type='button' id='helpdownV2' onClick={(e)=>{
                        e.preventDefault;
                        e.currentTarget.style.display='none';
                        const btnupV2 = document.getElementById('helpupV2');
                        btnupV2.style.display = 'flex';
                        const HelpNav = document.querySelector('.helpnav');
                        HelpNav.style.display = 'block';
                    }}>
                        <i class='bx bx-chevron-down'></i>
                    </button>
                    <button type='button' id='helpupV2' onClick={(e)=>{
                        e.preventDefault;
                        e.currentTarget.style.display='none';
                        const btnupV2 = document.getElementById('helpdownV2');
                        btnupV2.style.display = 'flex';
                        const HelpNav = document.querySelector('.helpnav');
                        HelpNav.style.display = 'none';
                    }}>
                        <i class='bx bx-chevron-up'></i>
                    </button>
                </div>
                <div id='accItems2V2'>
                <Link id='accItems2' to='/account/login'>Log In</Link>
                </div>
                <Link to='/cart' id='accItems4V2'>
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
export default HeaderV2;
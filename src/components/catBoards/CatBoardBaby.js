import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import './CatBoardBaby.css';
import {DisplayFlex} from './DisplayInteractionFlex';
import {Disappear} from './DisappearInteraction';
function CatBoardBaby(){
    return(
        <div className='mainboardbaby' onMouseOver ={DisplayFlex} onMouseLeave={Disappear}>
            <div className='catitemsbaby'>
                <div className='itemsconbaby'>
                <p><Link to='google.com'  className='link'>Boys Fashion</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Polos &  T-shirts</Link></li>
                    <li><Link to='google.com' className='link2'>Sets</Link></li>
                    <li><Link to='google.com' className='link2'>Watches</Link></li>
                    <li><Link to='google.com' className='link2'>Denim & Trouser</Link></li>
                    <li><Link to='google.com' className='link2'>Bodysuits & Playsuit</Link></li>
                    <li><Link to='google.com' className='link2'>Underwears</Link></li>
                    <li><Link to='google.com' className='link2'>Shoes</Link></li>
                    <li><Link to='google.com' className='link2'>Shirts</Link></li>
                    </ul>
                </div>
                <div className='itemsconbaby'>
                <p><Link to='google.com'  className='link'>Baby Essentials</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Bibs & Burp Cloths</Link></li>
                    <li><Link to='google.com' className='link2'>Bottle Feeding</Link></li>
                    <li><Link to='google.com' className='link2'>Breast Feeding</Link></li>
                    <li><Link to='google.com' className='link2'>Baby Foods & Formula</Link></li>
                    <li><Link to='google.com' className='link2'>Feeding  &  Nursing</Link></li>
                    </ul>
                </div>
            </div>
            <div className='catitemsbaby'>
                <div className='itemsconbaby2'>
                <p><Link to='google.com'  className='link'>Girls Fashion</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Dresses</Link></li>
                    <li><Link to='google.com' className='link2'>Shoes</Link></li>
                    <li><Link to='google.com' className='link2'>Shirts</Link></li>
                    <li><Link to='google.com' className='link2'>Tops,Jackets & Sweat Wears</Link></li>
                    <li><Link to='google.com' className='link2'>Watches</Link></li>
                    <li><Link to='google.com' className='link2'>Denim, Trousers & Leggings</Link></li>
                    <li><Link to='google.com' className='link2'>Bodysuits & Playsuits</Link></li>
                    <li><Link to='google.com' className='link2'>Underwears</Link></li>
                    </ul>
                </div>
                <p><Link to='google.com'  className='link'>School Needs</Link></p>
                        <ul>
                        <li><Link to='google.com' className='link2'>Bags & Backpack</Link></li>
                        <li><Link to='google.com' className='link2'>Lauchboxes  & Waterbottles</Link></li>
                        <li><Link to='google.com' className='link2'>Schools Shoes</Link></li>
                        <li><Link to='google.com' className='link2'>Socks</Link></li>
                        </ul>
            </div>
            <div className='catitemsbaby'>
                <div className='itemsconbaby3'>
                <p><Link to='google.com'  className='link'>Diapering & Daily Care</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Daily Care</Link></li>
                    <li><Link to='google.com' className='link2'>BAth Essentials</Link></li>
                    <li><Link to='google.com' className='link2'>Diapers & Wipes</Link></li>
                    <li><Link to='google.com' className='link2'>Diapers Bags</Link></li>
                    <li><Link to='google.com' className='link2'>Potty</Link></li>
                    </ul>
                    <p><Link to='google.com'  className='link'>Maternity</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Maternity Tops & Jackets</Link></li>
                    <li><Link to='google.com' className='link2'>Maternity  Dresses</Link></li>
                    <li><Link to='google.com' className='link2'>Maternity Underwear</Link></li>
                    <li><Link to='google.com' className='link2'>Maternity Accessories</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default CatBoardBaby;
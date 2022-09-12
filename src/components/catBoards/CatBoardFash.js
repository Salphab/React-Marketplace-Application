import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import './CatBoardFash.css';
import {DisplayFlex} from './DisplayInteractionFlex';
import {Disappear} from './DisappearInteraction';
function CatBoardFash(){
    return(
        <div className='mainboardFash' onMouseOver ={DisplayFlex} onMouseLeave={Disappear}> 
            <div className='catitemsfashion'>
                <div className='itemsconfashion'>
                <p><Link to='google.com'  className='link'>Women's Wear</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Dresses</Link></li>
                    <li><Link to='google.com' className='link2'>Tops</Link></li>
                    <li><Link to='google.com' className='link2'>Trousers</Link></li>
                    <li><Link to='google.com' className='link2'>Skirts</Link></li>
                    <li><Link to='google.com' className='link2'>Jumpsuits & playsuit</Link></li>
                    <li><Link to='google.com' className='link2'>Suits &  Blazzers</Link></li>
                    </ul>
                    <p><Link to='google.com'  className='link'>Women Accessories</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Heels</Link></li>
                    <li><Link to='google.com' className='link2'>Sandals & Slippers</Link></li>
                    <li><Link to='google.com' className='link2'>Bags & Purses</Link></li>
                    <li><Link to='google.com' className='link2'>Belts</Link></li>
                    <li><Link to='google.com' className='link2'>Jewellery</Link></li>
                    <li><Link to='google.com' className='link2'>Hats & Scarfs</Link></li>
                    <li><Link to='google.com' className='link2'>Underwears & Sleepwears</Link></li>
                    </ul>
                </div> 
            </div>
            <div className='catitemsfashion'>
                <div className='itemsconfashion'>
                <p><Link to='google.com'  className='link'>Men's Wear</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Shirts</Link></li>
                    <li><Link to='google.com' className='link2'>T-shirts</Link></li>
                    <li><Link to='google.com' className='link2'>Polo</Link></li>
                    <li><Link to='google.com' className='link2'>Jeans & Chinos</Link></li>
                    <li><Link to='google.com' className='link2'>Trousers & Shorts</Link></li>
                    <li><Link to='google.com' className='link2'>Suit,  Blazzers & Jackets</Link></li>
                    <li><Link to='google.com' className='link2'>Jersey</Link></li>
                    <li><Link to='google.com' className='link2'>Casual Shoes</Link></li>
                    <li><Link to='google.com' className='link2'>Formal Shoes</Link></li>
                    <li><Link to='google.com' className='link2'>Slippers & Sandals</Link></li>
                    <li><Link to='google.com' className='link2'>Shoes Care & Accessories</Link></li>
                    </ul>
                </div>
            </div>
            <div className='catitemsfashion'>
            <div className='itemsconfashion'>
                <p><Link to='google.com'  className='link'>Men's Accessories</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Belts</Link></li>
                    <li><Link to='google.com' className='link2'>UnderWears</Link></li>
                    <li><Link to='google.com' className='link2'>Caps & Hats</Link></li>
                    <li><Link to='google.com' className='link2'>Bags</Link></li>
                    <li><Link to='google.com' className='link2'>Jewellery</Link></li>
                    </ul>
                <p><Link to='google.com'  className='link'>Watches</Link></p>
                    <ul>
                        <li><Link to='google.com' className='link2'>Men's Watches</Link></li>
                        <li><Link to='google.com' className='link2'>Women's Watches</Link></li>
                        <li><Link to='google.com' className='link2'>Unisexs Watches</Link></li>
                    </ul>
                    <p><Link to='google.com'  className='link'>Traditional Makings</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Fabrics Materials  for Men</Link></li>
                    <li><Link to='google.com' className='link2'>Ankara Textiles</Link></li>
                    <li><Link to='google.com' className='link2'>Shadda/Gini Fabrics</Link></li>
                    <li><Link to='google.com' className='link2'>Lace Fabrics</Link></li>
                    <li><Link to='google.com' className='link2'>Veils/Abaya Dresses</Link></li>
                    </ul>
                </div>
            </div>                
        </div>
    )
}
export default CatBoardFash;
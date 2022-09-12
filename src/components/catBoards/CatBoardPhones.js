import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import './CatBoardPhones.css';
import {Disappear} from './DisappearInteraction';
import {DisplayFlex} from './DisplayInteractionFlex';
function CatBoardPhones(){
    return(
        <div className='mainboardPhones' onMouseOver ={DisplayFlex} onMouseLeave={Disappear}>
            <div className='catitemsphones'>
                <div  className='itemscomphones'>
                <p><Link to='google.com'  className='link'>Phones</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>smartphones</Link></li>
                    <li><Link to='google.com' className='link2'>Basic  Phones</Link></li>
                    <li><Link to='google.com' className='link2'>Refurblished Phones</Link></li>
                    </ul>
                </div>
                <div  className='itemscomphones'>
                <p><Link to='google.com'  className='link'>Tablets</Link></p>
                    <ul>
                        <li><Link to='google.com' className='link2'>Ipads</Link></li>
                        <li><Link to='google.com' className='link2'>Android Tablets</Link></li>
                        <li><Link to='google.com' className='link2'>Window Tablets</Link></li>
                        <li><Link to='google.com' className='link2'>Tablets Accessories</Link></li>
                    </ul>
                </div>
            </div>
            <div className='catitemsphones'>
                <div className='itemscomphones2'>
                <p><Link to='google.com'  className='link'>Mobile Phones Accessories</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Cables</Link></li>
                    <li><Link to='google.com' className='link2'>Cases & Covers</Link></li>
                    <li><Link to='google.com' className='link2'>Screen Protectors</Link></li>
                    <li><Link to='google.com' className='link2'>Chargers & Power Banks</Link></li>
                    <li><Link to='google.com' className='link2'>Earphones and Headphones</Link></li>
                    <li><Link to='google.com' className='link2'>Smartwatches & Bands</Link></li>
                    <li><Link to='google.com' className='link2'>Batteries</Link></li>
                    <li><Link to='google.com' className='link2'>Micro SDCards</Link></li>
                    <li><Link to='google.com' className='link2'>Car Accessories</Link></li>
                    <li><Link to='google.com' className='link2'>Bluetooth Headsets</Link></li>
                    </ul>
                </div>
            </div>
            <div className='catitemsphones'>
                <div  className='itemscomphones'>
                <p><Link to='google.com'  className='link'>Top Phone Brands</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Apple</Link></li>
                    <li><Link to='google.com' className='link2'>Samsung</Link></li>
                    <li><Link to='google.com' className='link2'>Xiaomi</Link></li>
                    <li><Link to='google.com' className='link2'>Nokia</Link></li>
                    <li><Link to='google.com' className='link2'>Tecno</Link></li>
                    <li><Link to='google.com' className='link2'>Huwaii</Link></li>
                    </ul>
                </div>
                <div  className='itemscomphones'>

                </div>
            </div>
        </div>
    )
}
export default CatBoardPhones;
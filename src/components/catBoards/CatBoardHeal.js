import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import './CatBoardHeal.css';
import {DisplayFlex} from './DisplayInteractionFlex';
import {Disappear} from './DisappearInteraction';
function CatBoardHeal(){
    return(
        <div className='mainboardheal'  onMouseOver ={DisplayFlex} onMouseLeave={Disappear}>
            <div className='catitemshealth'>
                <div className='itemsconhealth1'>
                    <p><Link to='google.com'  className='link'>Make-Up</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Foundation</Link></li>
                    <li><Link to='google.com' className='link2'>Powder</Link></li>
                    <li><Link to='google.com' className='link2'>Lipsticks</Link></li>
                    <li><Link to='google.com' className='link2'>Eyeliner & Kejal</Link></li>
                    <li><Link to='google.com' className='link2'>Cleanser</Link></li>
                    <li><Link to='google.com' className='link2'>Eyeshadow</Link></li>
                    <li><Link to='google.com' className='link2'>Mascara</Link></li>
                    <li><Link to='google.com' className='link2'>Lip Liner</Link></li>
                    </ul>
                    <p><Link to='google.com'  className='link'>Frangrance</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Men's Frangrance</Link></li>
                    <li><Link to='google.com' className='link2'>women Fragrance</Link></li>
                    </ul>
                </div>
            </div>
            <div className='catitemshealth'>
            <p><Link to='google.com'  className='link'>Hair Care</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Clippers</Link></li>
                    <li><Link to='google.com' className='link2'>Hair Lotions & Creams</Link></li>
                    <li><Link to='google.com' className='link2'>Shampoo & Conditioner</Link></li>
                    <li><Link to='google.com' className='link2'>Hair & Beard Enhancer</Link></li>
                    <li><Link to='google.com' className='link2'>Hair Accessories</Link></li>
                    </ul>
                    <p><Link to='google.com'  className='link'>Health Care</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Thermometer</Link></li>
                    <li><Link to='google.com' className='link2'>Supplements</Link></li>
                    <li><Link to='google.com' className='link2'>Hands Sanitizer</Link></li>
                    <li><Link to='google.com' className='link2'>skin Care</Link></li>
                    <li><Link to='google.com' className='link2'>First Aids</Link></li>
                    </ul>
            </div>
            <div className='catitemshealth'>
            <p><Link to='google.com'  className='link'>Sexual wellness</Link></p>
                <ul>
                    <li><Link to='google.com' className='link2'>Contraceptive & Lubricants</Link></li>
                    <li><Link to='google.com' className='link2'>Feminine care</Link></li>
                </ul>
            <p><Link to='google.com'  className='link'>Oral Care</Link></p>
                <ul>
                    <li><Link to='google.com' className='link2'>Teeth  Whitening</Link></li>
                    <li><Link to='google.com' className='link2'>ToothBrushes</Link></li>
                    <li><Link to='google.com' className='link2'>Tooth Pastes</Link></li>
                </ul>
            </div>
            
        </div>
    )
}
export default CatBoardHeal;
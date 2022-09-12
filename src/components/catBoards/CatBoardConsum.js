import React, {useRef} from 'react';
import './CatBoardConsum.css';
import {Link} from 'react-router-dom';
import {DisplayBlock} from './DisplayInteractionBlock';
import {Disappear} from './DisappearInteraction';
function CatBoardConsum(){
    return(
        <div className='mainboardconsum' onMouseOver ={DisplayBlock}  onMouseLeave={Disappear}>
                <div className='catitem'>
                    <div className='items'>
                    <p><Link to='google.com'  className='link'>Televisons</Link></p>
                        <ul>
                        <li><Link to='google.com' className='link2'>Smarts TVs</Link></li>
                        <li><Link to='google.com' className='link2'>LED TVs</Link></li>
                        <li><Link to='google.com' className='link2'>Curved TVs</Link></li>
                        <li><Link to='google.com' className='link2'>OLED TVs</Link></li>
                        <li><Link to='google.com' className='link2'>Plasma TVs</Link></li>
                        </ul>
                    </div>
                    <div className='items'>
                    <p><Link to='google.com'  className='link'>Cameras and Photos</Link></p>
                        <ul>
                        <li><Link to='google.com' className='link2'>Digital Cameras</Link></li>
                        <li><Link to='google.com' className='link2'>Camcoders</Link></li>
                        <li><Link to='google.com' className='link2'>Projectors</Link></li>
                        <li><Link to='google.com' className='link2'>CCTV's</Link></li>
                        <li><Link to='google.com' className='link2'>Camera Lenses & Accessories</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='catitem'>
                    <div className='items2'>
                    <p><Link to='google.com'  className='link'>Home Threatre, Speakers & Sound Systems</Link></p>
                        <ul>
                        <li><Link to='google.com' className='link2'>Home Threatres</Link></li>
                        <li><Link to='google.com' className='link2'>Hifi Systems</Link></li>
                        <li><Link to='google.com' className='link2'>Bluetooth Speakers</Link></li>
                        <li><Link to='google.com' className='link2'>Dj Instruments</Link></li>
                        <li><Link to='google.com' className='link2'>Public Addresses</Link></li>
                        </ul>
                    </div>
                    <div className='items2'>
                    <p><Link to='google.com'  className='link'>Power Generator & Energy Supply</Link></p>
                        <ul>
                        <li><Link to='google.com' className='link2'>Generator</Link></li>
                        <li><Link to='google.com' className='link2'>Inverters</Link></li>
                        <li><Link to='google.com' className='link2'>Solar Panels</Link></li>
                        <li><Link to='google.com' className='link2'>Battery Cells</Link></li>
                        </ul>
                    </div>
                </div>
        

                
            
        </div>
    )
}
export default CatBoardConsum;
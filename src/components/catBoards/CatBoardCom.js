import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import './CatBoardCom.css';
import {Disappear} from './DisappearInteraction';
import {DisplayBlock} from './DisplayInteractionBlock';
function CatBoardCom(){
    return(
        <div className='mainboardcom' onMouseOver ={DisplayBlock} onMouseLeave={Disappear}>
            <div className='catitemscom'>
                <div className='itemscom'>
                <p><Link to='google.com'  className='link'>Computer</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Desktop</Link></li>
                    <li><Link to='google.com' className='link2'>Laptop</Link></li>
                    <li><Link to='google.com' className='link2'>All in One</Link></li>
                    </ul>
                </div>
                <div className='itemscom'>
                <p><Link to='google.com'  className='link'>Computer Accessories</Link></p>
                        <ul>
                        <li><Link to='google.com' className='link2'>Computer Peripherals</Link></li>
                        <li><Link to='google.com' className='link2'>Bags, Cases, Covers, Sleeves & Stickers</Link></li>
                        <li><Link to='google.com' className='link2'>UPS</Link></li>
                        <li><Link to='google.com' className='link2'>Cables</Link></li>
                        <li><Link to='google.com' className='link2'>Biometrics Devices</Link></li>
                        <li><Link to='google.com' className='link2'>Monitors</Link></li>
                        </ul>
                </div>
                <div className='itemscom'>
                        <p><Link to='google.com'  className='link'>Software and Security</Link></p>
                        <ul>
                        <li><Link to='google.com' className='link2'>Utilities Softwares</Link></li>
                        <li><Link to='google.com' className='link2'>Antivirus</Link></li>
                        <li><Link to='google.com' className='link2'>Operating System</Link></li>
                        <li><Link to='google.com' className='link2'>Internet Security</Link></li>
                        </ul>
                </div>
            </div>
            <div className='catitemscom2'>
                <div className='itemscom2'>
                <p><Link to='google.com'  className='link'>Printer and Scanners</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Printers</Link></li>
                    <li><Link to='google.com' className='link2'>Scanners</Link></li>
                    <li><Link to='google.com' className='link2'>Ink, Toner & Catridges</Link></li>
                    </ul>
                </div>
                <div className='itemscom2'>
                <p><Link to='google.com'  className='link'>Storages and Memory</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>External Hard Drives</Link></li>
                    <li><Link to='google.com' className='link2'>FlashDrives</Link></li>
                    <li><Link to='google.com' className='link2'>Memory Cards</Link></li>
                    <li><Link to='google.com' className='link2'>RAM</Link></li>
                    </ul>
                </div>
                <div className='itemscom2'>
                    
                </div>
            </div>
            
        </div>
    )
}
export default CatBoardCom;
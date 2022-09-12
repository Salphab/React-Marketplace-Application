import React, {useRef} from 'react';
import {Link}  from 'react-router-dom';
import './CatBoardSports.css';
import {DisplayFlex} from './DisplayInteractionFlex';
import {Disappear} from './DisappearInteraction';
function CatBoardSports(){
    return(
        <div className='mainboardSports' onMouseOver ={DisplayFlex} onMouseLeave={Disappear}>
            <div className='catitemshome'>
                <div className='itemsconhome1'>
                    <p><Link to='google.com'  className='link'>Home Appliances</Link></p>
                        <ul>
                        <li><Link to='google.com' className='link2'>Refrigerators</Link></li>
                        <li><Link to='google.com' className='link2'>Washing Machines</Link></li>
                        <li><Link to='google.com' className='link2'>Ironing & Laundry</Link></li>
                        <li><Link to='google.com' className='link2'>Air Condition</Link></li>
                        <li><Link to='google.com' className='link2'>Fans</Link></li>
                        <li><Link to='google.com' className='link2'>Freezers</Link></li>
                        <li><Link to='google.com' className='link2'>Water Dispenser</Link></li>
                        <li><Link to='google.com' className='link2'>Vaccum Cleaner</Link></li>
                        <li><Link to='google.com' className='link2'>Air Conditioner</Link></li>
                        </ul>
                </div>
                <div className='itemsconhome2'>

                </div>
            </div>
            <div className='catitemshome'>
            <div className='itemsconhome1'>
            <p><Link to='google.com'  className='link'>Kitchen</Link></p>
                        <ul>
                        <li><Link to='google.com' className='link2'>Eletric  Cookers</Link></li>
                        <li><Link to='google.com' className='link2'>Blenders, Mixer & Juicer</Link></li>
                        <li><Link to='google.com' className='link2'>Ovens & Microwaves</Link></li>
                        <li><Link to='google.com' className='link2'>Steamer</Link></li>
                        <li><Link to='google.com' className='link2'>Dish Washer</Link></li>
                        <li><Link to='google.com' className='link2'>Food Porcessor</Link></li>
                        <li><Link to='google.com' className='link2'>Toaster & sandwich Maker</Link></li>
                        <li><Link to='google.com' className='link2'>Deep Fryer  &  Rice Cooker</Link></li>
                        <li><Link to='google.com' className='link2'>Electric Kettles</Link></li>
                        <li><Link to='google.com' className='link2'>Yam Pounder</Link></li>
                        <li><Link to='google.com' className='link2'>Kitchen Utensils</Link></li>
                        </ul>
                </div>
                <div className='itemsconhome2'>
                    
                </div>
            </div>
            <div className='catitemshome'>
                <div className='itemsconhome1'>
                <p><Link to='google.com'  className='link'>Home/Office Furnishing</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>Bed & Bathroom Furnishing</Link></li>
                    <li><Link to='google.com' className='link2'>Curtains & Binds</Link></li>
                    <li><Link to='google.com' className='link2'>Decor</Link></li>
                    <li><Link to='google.com' className='link2'>Light Fixture</Link></li>
                    <li><Link to='google.com' className='link2'>Rugs &  carpets</Link></li>
                    <li><Link to='google.com' className='link2'>Living Room Furniture</Link></li>
                    <li><Link to='google.com' className='link2'>Office Furnitures</Link></li>
                    <li><Link to='google.com' className='link2'>Kitchen Furniture</Link></li>
                    </ul>
                </div>
                
            </div>
            
        </div>
    )
}
export default CatBoardSports;
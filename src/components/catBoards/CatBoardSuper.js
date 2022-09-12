import React, {useRef} from 'react';
import {Link}  from 'react-router-dom';
import './CatBoardSuper.css';
import {DisplayFlex} from './DisplayInteractionFlex';
import {Disappear} from './DisappearInteraction';
function CatBoardSuper(){
    return(
        <div className='mainboardSuper' onMouseOver ={DisplayFlex} onMouseLeave={Disappear}>
                <div className='catitemssuper'>
                    <div className='itemsconsuper'>
                    <p><Link to='/foods-consumable-supplies'  className='link'>Foods and Consumables</Link></p>
                        <ul>
                            <li><Link to='/rice-grains' className='link2'>Rice and Grains</Link></li>
                            <li><Link to='/pasta-noodles' className='link2'>Pasta & Noodles</Link></li>
                            <li><Link to='/breakfast-foods-cereals' className='link2'>BreakFast Foods & Cereals</Link></li>
                            <li><Link to='/spices-seasoning' className='link2'>Spices & Seasoning</Link></li> 
                            <li><Link to='/coffee' className='link2'>Coffee</Link></li>      
                            <li><Link to='/purified-water' className='link2'>Purified Bottled Water</Link></li>  
                            <li><Link to='/cooking-oil' className='link2'>Cooking Oil</Link></li> 
                            <li><Link to='/juice' className='link2'>Juices</Link></li>
                            <li><Link to='/drinks' className='link2'>Drinks</Link></li>
                            <li><Link to='/canned-package-food' className='link2'>Canned & Package Food</Link></li> 
                            <li><Link to='/candy-chocolates-biscuit' className='link2'>Candy, Chocolates & Biscuits</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='catitemsfashion'>
                    <div className='itemsconsuper2'>
                    <p><Link to='/toiletries'  className='link'>Toiletries and Household Cleaning</Link></p>                      
                        <ul>
                        <li><Link to='/detergents-bleach-disinfectant' className='link2'>Detergents, Bleach & Disinfectant</Link></li>
                        <li><Link to='/wipes-toiletpaper-' className='link2'>Wipes & ToiletPaper</Link></li>
                        <li><Link to='google.com' className='link2'>Dish Washing</Link></li>
                        </ul>
                        <p><Link to='/alcoholic-beverages'  className='link'>Alcoholic Beverages</Link></p>                     
                        <ul>
                        <li><Link to='google.com' className='link2'>Beer</Link></li>
                        <li><Link to='google.com' className='link2'>Vodka</Link></li>
                        <li><Link to='google.com' className='link2'>Red Wine</Link></li>
                        <li><Link to='google.com' className='link2'>Liquors</Link></li>
                        <li><Link to='google.com' className='link2'>Champagne & Sparkling Wines</Link></li>
                        <li><Link to='google.com' className='link2'>Whisky</Link></li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}
export default CatBoardSuper;
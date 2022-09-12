import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import './CatBoardGame.css';
import {DisplayFlex} from './DisplayInteractionFlex';
import {Disappear} from './DisappearInteraction';
function CatBoardGame(){
    return(
        <div className='mainboardgame'  onMouseOver ={DisplayFlex} onMouseLeave={Disappear}>
            <div className='catitemsgame'>
                <div   className='itemscongame1'>
                <p><Link to='google.com'  className='link'>Video Game Console</Link></p>
                    <ul>
                    <li><Link to='google.com' className='link2'>PlayStation</Link></li>
                    <li><Link to='google.com' className='link2'>Xbox</Link></li>
                    <li><Link to='google.com' className='link2'>Nintendo</Link></li>
                    <li><Link to='google.com' className='link2'>PS Vita</Link></li>
                    <li><Link to='google.com' className='link2'>Nintendo Switch</Link></li>
                    </ul>
                </div>
                <div  className='itemscongame2'>
                <p><Link to='google.com'  className='link'>video Games Accessories</Link></p>
                <ul>
                <li><Link to='google.com' className='link2'>Control Pads</Link></li>
                <li><Link to='google.com' className='link2'>Virtual Realities</Link></li>
                <li><Link to='google.com' className='link2'>Batteries & Chargers</Link></li>
                </ul>
                </div>
                <p><Link to='google.com'  className='link'>Board & Deck Games</Link></p>
                <ul>
                <li><Link to='google.com' className='link2'>Chess</Link></li>
                <li><Link to='google.com' className='link2'>Checker</Link></li>
                <li><Link to='google.com' className='link2'>Monopoly</Link></li>
                <li><Link to='google.com' className='link2'>Scrabble</Link></li>
                <li><Link to='google.com' className='link2'>Ludo</Link></li>
                <li><Link to='google.com' className='link2'>Decks & Cards</Link></li>
                </ul>
            </div>
            <div className='catitemsgame'>
            <p><Link to='google.com'  className='link'>Video Games</Link></p>
                <ul>
                <li><Link to='google.com' className='link2'>FIFA</Link></li>
                <li><Link to='google.com' className='link2'>PES</Link></li>
                <li><Link to='google.com' className='link2'>Grand Theft Auto</Link></li>
                <li><Link to='google.com' className='link2'>Call of Duty</Link></li>
                <li><Link to='google.com' className='link2'>God of War</Link></li>
                <li><Link to='google.com' className='link2'>Far Cry</Link></li>
                <li><Link to='google.com' className='link2'>Battlefield</Link></li>
                <li><Link to='google.com' className='link2'>Uncharted</Link></li>
                <li><Link to='google.com' className='link2'>Witchers</Link></li>
                <li><Link to='google.com' className='link2'>Metal  Gear</Link></li>
                </ul>
            </div>
            <div className='catitemsgame'>
            <p><Link to='google.com'  className='link'>Sport $ Fitness</Link></p>
                <ul>
                <li><Link to='google.com' className='link2'>Outdoor & Indoor Games</Link></li>
                <li><Link to='google.com' className='link2'>Fitness</Link></li>
                <li><Link to='google.com' className='link2'>Sport Kits</Link></li>
                <li><Link to='google.com' className='link2'>Football</Link></li>
                <li><Link to='google.com' className='link2'>Basketball</Link></li>
                <li><Link to='google.com' className='link2'>Swimming</Link></li>
                <li><Link to='google.com' className='link2'>Cycling</Link></li>
                <li><Link to='google.com' className='link2'>Tennis & Racquets</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default CatBoardGame;
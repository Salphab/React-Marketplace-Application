import React, {useRef} from 'react';
import {DisplayFlex} from './DisplayInteractionFlex';
import {Disappear} from './DisappearInteraction';
import './CatBoardAuto.css';
function CatBoardAuto(){
    return(
        <div className='mainboardauto' onMouseOver ={DisplayFlex}  onMouseLeave={Disappear}>
            
        </div>
    )
}
export default CatBoardAuto;
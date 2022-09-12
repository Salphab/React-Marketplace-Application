import './Bar.css';
import CatList from '../cartsComp/CatList.js'
import SlideCon  from './ImageSlide';
import CatBoardSuper from '../catBoards/CatBoardSuper';
import CatBoardFash from '../catBoards/CatBoardFash';
import CatBoardPhones from '../catBoards/CatBoardPhones';
import CatBoardCom from '../catBoards/CatBoardCom';
import CatBoardConsum from '../catBoards/CatBoardConsum';
import CatBoardHeal from '../catBoards/CatBoardHeal';
import CatBoardGame from '../catBoards/CatBoardGame';
import CatBoardBaby from '../catBoards/CatBoardBaby';
import CatBoardSports from '../catBoards/CatBoardSports';
import CatBoardAuto from '../catBoards/CatBoardAuto';

function Bar (){
    return(
        <div className='navBar'>
            <CatList/>
            <SlideCon/>
            <CatBoardSuper/>
            <CatBoardFash/>
            <CatBoardPhones/>
            <CatBoardCom/>
            <CatBoardConsum/>
            <CatBoardHeal/>
            <CatBoardGame/>
            <CatBoardBaby/>
            <CatBoardSports/>
            <CatBoardAuto/>
        </div>
    )
}
export default Bar;
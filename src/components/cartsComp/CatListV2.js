import './CatListV2.css';
import CatBoardSuper from '../catBoards/CatBoardSuper';
import CatBoardFash from '../catBoards/CatBoardFash';
import CatBoardPhones from '../catBoards/CatBoardPhones';
import CatBoardCom from '../catBoards/CatBoardCom';
import CatBoardConsum from '../catBoards/CatBoardConsum';
import CatBoardHeal from '../catBoards/CatBoardHeal';
import CatBoardGame from '../catBoards/CatBoardGame';
import CatBoardSports from '../catBoards/CatBoardSports';
import CatBoardBaby from '../catBoards/CatBoardBaby';
import {Link} from 'react-router-dom';
function CatlListV2(){
    return(
        <div className='catandsubcatV2' onMouseOver={(e)=>{
            e.preventDefault;
            const catappearance = document.querySelector('.catandsubcatV2');
            catappearance.style.display = 'flex';
            }} onMouseLeave={(e)=>{
            e.preventDefault;
            const catappearance = document.querySelector('.catandsubcatV2');
            catappearance.style.display = 'none';}}>
                <nav className='catContainerV2' >
                <Link to='/superstore' onMouseOver={(e)=>{
                    e.preventDefault;
                    const board = document.querySelector('.mainboardSuper');
                    board.style.display = 'flex';
                    board.style.left = '26%';
                    board.style.top = '0px';
                    board.style.height = '400px';
                    board.style.maxWidth = '74%';
                    board.style.border = '1px solid rgb(187, 187, 187)';
                    }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board = document.querySelector('.mainboardSuper');
                        board.style.display = 'none';
                    }}>
                <div id='catLastConV2'>
                <img src={require('../../../src/png/more-information.png')}/>
                        <span>SuperStores</span>
                </div>
                </Link>
                <a href='http://google.com' onMouseOver={(e)=>{
                        e.preventDefault;
                        const board2 = document.querySelector('.mainboardFash');
                        board2.style.display = 'flex';
                        board2.style.left = '26%';
                        board2.style.top = '0px';
                        board2.style.height = '400px';
                        board2.style.maxWidth = '74%';
                        board2.style.border = '1px solid rgb(187, 187, 187)';
                        }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board2 = document.querySelector('.mainboardFash');
                        board2.style.display = 'none';
                    }}>
                    <div className='itemsConV2'>
                        <img src={require('../../../src/png/tshirt.png')}/>
                        <span>Fashion</span>
                    </div>
                </a>
                <Link to='/fashion' onMouseOver={(e)=>{
                        e.preventDefault;
                        const board3 = document.querySelector('.mainboardPhones');
                        board3.style.display = 'flex';
                        board3.style.left = '26%';
                        board3.style.top = '0px';
                        board3.style.height = '400px';
                        board3.style.maxWidth = '74%';
                        board3.style.border = '1px solid rgb(187, 187, 187)';
                        }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board3 = document.querySelector('.mainboardPhones');
                        board3.style.display = 'none';
                    }}>
                    <div className='itemsConV2'>
                    <img src={require('../../../src/png/smartphone.png')}/>
                        <span>phones and Tablets</span>
                    </div>
                </Link>
                <Link to='/computer-laptop' onMouseOver={(e)=>{
                        e.preventDefault;
                        const board4 = document.querySelector('.mainboardcom');
                        board4.style.display = 'block';
                        board4.style.left = '26%';
                        board4.style.top = '0px';
                        board4.style.height = '400px';
                        board4.style.maxWidth = '74%';
                        board4.style.border = '1px solid rgb(187, 187, 187)';
                        }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board4 = document.querySelector('.mainboardcom');
                        board4.style.display = 'none';
                    }}>
                    <div className='itemsConV2'>
                    <img src={require('../../../src/png/notebook-computer.png')}/>
                        <span>Computers and Accessories</span>
                    </div>
                </Link>
                <Link to='/home-office' onMouseOver={(e)=>{
                        e.preventDefault;
                        const board5 = document.querySelector('.mainboardSports');
                        board5.style.display = 'flex';
                        board5.style.left = '26%';
                        board5.style.top = '0px';
                        board5.style.height = '400px';
                        board5.style.maxWidth = '74%';
                        board5.style.border = '1px solid rgb(187, 187, 187)';
                        }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board5 = document.querySelector('.mainboardSports');
                        board5.style.display = 'none';
                    }}>
                    <div className='itemsConV2'>
                    <img src={require('../../../src/png/home.png')}/>
                        <span>Home and Office</span>
                    </div>
                </Link>
                <Link to='/consumers-electronics' onMouseOver={(e)=>{
                        e.preventDefault;
                        const board5 = document.querySelector('.mainboardcom');
                        board5.style.display = 'block';
                        board5.style.left = '26%';
                        board5.style.top = '0px';
                        board5.style.height = '400px';
                        board5.style.maxWidth = '74%';
                        board5.style.border = '1px solid rgb(187, 187, 187)';
                        }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board5 = document.querySelector('.mainboardcom');
                        board5.style.display = 'none';
                    }}>
                    <div className='itemsConV2'>
                    <img src={require('../../../src/png/laundry.png')}/>
                        <span>Consumers Electronics</span>
                    </div>
                </Link>
                <Link to='/health-beauty' onMouseOver={(e)=>{
                        e.preventDefault;
                        const board6 = document.querySelector('.mainboardheal');
                        board6.style.display = 'flex';
                        board6.style.left = '26%';
                        board6.style.top = '0px';
                        board6.style.height = '400px';
                        board6.style.maxWidth = '74%';
                        board6.style.border = '1px solid rgb(187, 187, 187)';
                        }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board6 = document.querySelector('.mainboardheal');
                        board6.style.display = 'none';
                    }}>
                    <div className='itemsConV2'>
                    <img src={require('../../../src/png/beauty-treatment.png')}/>
                        <span>Health and Beauty</span>
                    </div>
                </Link>
                <Link to='/gaming-sport' onMouseOver={(e)=>{
                        e.preventDefault;
                        const board7 = document.querySelector('.mainboardgame');
                        board7.style.display = 'flex';
                        board7.style.left = '26%';
                        board7.style.top = '0px';
                        board7.style.height = '400px';
                        board7.style.maxWidth = '74%';
                        board7.style.border = '1px solid rgb(187, 187, 187)';
                        }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board7 = document.querySelector('.mainboardgame');
                        board7.style.display = 'none';
                    }}>
                    <div className='itemsConV2'>
                    <img src={require('../../../src/png/console.png')}/>
                        <span>Gaming, Sports & Fitness</span>
                    </div>
                </Link>
                <Link to='/kids-baby' onMouseOver={(e)=>{
                        e.preventDefault;
                        const board5 = document.querySelector('.mainboardbaby');
                        board5.style.display = 'flex';
                        board5.style.left = '26%';
                        board5.style.top = '0px';
                        board5.style.height = '400px';
                        board5.style.maxWidth = '74%';
                        board5.style.border = '1px solid rgb(187, 187, 187)';
                        }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board5 = document.querySelector('.mainboardbaby');
                        board5.style.display = 'none';
                    }}>
                    <div className='itemsConV2'>
                    <img src={require('../../../src/png/baby-head.png')}/>
                        <span>Baby and Kids Products</span>
                    </div>
                </Link>
                <Link to='/automobile'>
                    <div className='itemsConV2'>
                    <img src={require('../../../src/png/car.png')}/>
                        <span>Automobiles</span>
                    </div>
                </Link>
            </nav>
            <CatBoardSuper/>
            <CatBoardFash/>
            <CatBoardPhones/>
            <CatBoardCom/>
            <CatBoardConsum/>
            <CatBoardHeal/>
            <CatBoardGame/>
            <CatBoardSports/>
            <CatBoardBaby/>
        </div>
        
    )
}
export default  CatlListV2;
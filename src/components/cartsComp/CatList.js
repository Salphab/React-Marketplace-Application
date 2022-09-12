import '../@home/Bar.css';
import {Link} from 'react-router-dom';

function CatlList(){
    return(
        <nav className='catContainer'>
                <div id='conHead'>
                    <img src={require('../../../src/png/menu.png')}/>
                    <span className='categoryText'>Category</span>
                </div>
                <Link to='/superstore' onMouseOver={(e)=>{
                    e.preventDefault;
                    const board = document.querySelector('.mainboardSuper');
                    board.style.display = 'flex';
                    }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board = document.querySelector('.mainboardSuper');
                        board.style.display = 'none';
                    }}
                >
                <div id='catLastCon'>
                    <img src={require('../../../src/png/more-information.png')}/>
                        <span>SuperStores</span>
                </div>
                </Link>
                <Link to='/fashion' onMouseOver={(e)=>{
                        e.preventDefault;
                        const board2 = document.querySelector('.mainboardFash');
                        board2.style.display = 'flex';
                        }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board2 = document.querySelector('.mainboardFash');
                        board2.style.display = 'none';
                    }}>
                    <div className='itemsCon'>
                        <img src={require('../../../src/png/tshirt.png')}/>
                        <span>Fashion</span>
                    </div>
                </Link>
                <Link to='/phones-Tablets' onMouseOver={(e)=>{
                        e.preventDefault;
                        const board3 = document.querySelector('.mainboardPhones');
                        board3.style.display = 'flex';
                        }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board3 = document.querySelector('.mainboardPhones');
                        board3.style.display = 'none';
                    }}>
                    <div className='itemsCon'>
                    <img src={require('../../../src/png/smartphone.png')}/>
                        <span>phones & Tablets</span>
                    </div>
                </Link>
                <Link to='/computer-Laptop' onMouseOver={(e)=>{
                        e.preventDefault;
                        const board4 = document.querySelector('.mainboardcom');
                        board4.style.display = 'block';
                        }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board4 = document.querySelector('.mainboardcom');
                        board4.style.display = 'none';
                    }}>
                    <div className='itemsCon'>
                    <img src={require('../../../src/png/notebook-computer.png')}/>
                        <span>Computers & Accessories</span>
                    </div>
                </Link>
                <Link to='/home-office' onMouseOver={(e)=>{
                        e.preventDefault;
                        const board9 = document.querySelector('.mainboardSports');
                        board9.style.display = 'flex';
                        }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board9 = document.querySelector('.mainboardSports');
                        board9.style.display = 'none';
                    }}>
                    <div className='itemsCon'>
                    <img src={require('../../../src/png/home.png')}/>
                        <span>Home and Office</span>
                    </div>
                </Link>
                <Link to='/consumers-electronics' onMouseOver={(e)=>{
                        e.preventDefault;
                        const board5 = document.querySelector('.mainboardconsum');
                        board5.style.display = 'block';
                        }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board5 = document.querySelector('.mainboardconsum');
                        board5.style.display = 'none';
                    }}>
                    <div className='itemsCon'>
                    <img src={require('../../../src/png/laundry.png')}/>
                        <span>Consumers Electronics</span>
                    </div>
                </Link>
                <Link to='/health-beauty' onMouseOver={(e)=>{
                        e.preventDefault;
                        const board6 = document.querySelector('.mainboardheal');
                        board6.style.display = 'flex';
                        }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board6 = document.querySelector('.mainboardheal');
                        board6.style.display = 'none';
                    }}>
                    <div className='itemsCon'>
                    <img src={require('../../../src/png/beauty-treatment.png')}/>
                        <span>Health and Beauty</span>
                    </div>
                </Link>
                <Link to='/gaming-sport' onMouseOver={(e)=>{
                        e.preventDefault;
                        const board7 = document.querySelector('.mainboardgame');
                        board7.style.display = 'flex';
                        }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board7 = document.querySelector('.mainboardgame');
                        board7.style.display = 'none';
                    }}>
                    <div className='itemsCon'>
                    <img src={require('../../../src/png/console.png')}/>
                        <span>Gaming, Sports & fitness</span>
                    </div>
                </Link>
                <Link to='/kids-baby' onMouseOver={(e)=>{
                        e.preventDefault;
                        const board8 = document.querySelector('.mainboardbaby');
                        board8.style.display = 'flex';
                        }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board8 = document.querySelector('.mainboardbaby');
                        board8.style.display = 'none';
                    }}>
                    <div className='itemsCon'>
                    <img src={require('../../../src/png/baby-head.png')}/>
                        <span>Baby and Kids Products</span>
                    </div>
                </Link>
                <Link to='/automobile' onMouseOver={(e)=>{
                        e.preventDefault;
                        const board10 = document.querySelector('.mainboardauto');
                        board10.style.display = 'block';
                        }} onMouseLeave={(e)=>{
                        e.preventDefault;
                        const board10 = document.querySelector('.mainboardauto');
                        board10.style.display = 'none';
                    }}>
                    <div className='itemsCon'>
                    <img src={require('../../../src/png/car.png')}/>
                        <span>Automobiles</span>
                    </div>
                </Link>
            </nav>
    )
}
export default  CatlList;
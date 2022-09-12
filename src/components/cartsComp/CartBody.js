import {Link} from 'react-router-dom';
import TopDeals from '../topDeals/TopDeals';
import './CartBody.css';

function CartBody(){
    return(
    <>
        <div className='cartbody'>
            <section className='emptycart'>
                <div className='emptycartimgcon'>
                    <div>
                        <img src={require('../../../src/png/add-to-basket.png')}/>
                    </div>
                    <p>Your cart is empty !</p>
                    <p id='brands'>Shop from our exortic brands and products</p>
                    <div id='linkhome'><Link to='/'><p>START SHOPPING</p></Link></div>
                </div>
            </section>
            <TopDeals conid = 'recentlyviewed' headerid = 'recentlyheader' more = 'More...' heading = "Recently viewed"/>
            <TopDeals conid ='recommended' headerid = 'recommendedheader' more = 'More...' heading = "Recommended For You"/>
        </div>
    </>
    )
}
export default CartBody;
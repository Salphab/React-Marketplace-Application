
import './AppBody.css';
import TopDeals from '../topDeals/TopDeals';
import Subcat from './Subcat.js';
import Adds from '../addsComponents/Adds.js';
import React from 'react';
function AppBody(){
    return(
        <div className='appbody'>
            <Subcat conid='catminor'/>
            <TopDeals conid = 'tdcontainer' headerid = 'tdheader' more = 'More...' heading = "Top Deal's"/>
            <TopDeals conid = 'recentlyviewed' headerid = 'recentlyheader' more = 'More...' heading = "Recently viewed"/>
            <TopDeals conid ='recommended' headerid = 'recommendedheader' more = 'More...' heading = "Recommended For You"/>
            <Adds conid = 'addcon'/>
            <Subcat conid='catminor'/>
            <TopDeals conid ='officialstores' headerid = 'officialheader' heading = "Official Stores"/>
        </div>

    )
}
export default AppBody;
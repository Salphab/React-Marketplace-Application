const {Foodstorecat,Foodstorebrands,lightData} = require('../../../assets/foodsAndConsumablesAssets');
import React from 'react';
import TopAdd from '../../../addsComponents/TopAdd';
import Header from '../../../headerCon/Header';
import Footer from '../../../Footers/Footercontainer/Footer';
import ConsumablesBody from './FoodConsumablesBody';
function foodConsumables(){
  React.useEffect(()=>{
     
  },[])
    return(
        <>
            <TopAdd/>
            <Header/>
            <ConsumablesBody CatData={Foodstorecat} BrandsData={Foodstorebrands} navData={lightData}/>
            <Footer/>
        </>
    )
}
export default foodConsumables;
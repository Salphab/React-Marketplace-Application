const {Coffeestorecat,Coffeestorebrands,lightData}= require('../../../../assets/CoffeeAsset');
import React from 'react';
import TopAdd from '../../../../addsComponents/TopAdd';
import Header from '../../../../headerCon/Header';
import Footer from '../../../../Footers/Footercontainer/Footer';
import CoffeeBody from './CoffeeBody';
function Coffee(){
  React.useEffect(()=>{
     
  },[])
    return(
        <>
            <TopAdd/>
            <Header/>
            <CoffeeBody CatData={Coffeestorecat} BrandsData={Coffeestorebrands} navData={lightData}/>
            <Footer/>
        </>
    )
}
export default Coffee;
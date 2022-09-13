const {CookingOilstorecat,CookingOilstorebrands,lightData} = require('../../../../assets/CookingOilAsset');
import React from 'react';
import TopAdd from '../../../../addsComponents/TopAdd';
import Header from '../../../../headerCon/Header';
import Footer from '../../../../Footers/Footercontainer/Footer';
import CookingOilBody from './CookingOilBody';
function CookingOil(){
  React.useEffect(()=>{
     
  },[])
    return(
        <>
            <TopAdd/>
            <Header/>
            <CookingOilBody CatData={CookingOilstorecat} BrandsData={CookingOilstorebrands} navData={lightData}/>
            <Footer/>
        </>
    )
}
export default CookingOil;
const {Waterstorecat,Waterstorebrands,lightData} = require('../../../../assets/PurifiedWaterAsset');
import React from 'react';
import TopAdd from '../../../../addsComponents/TopAdd';
import Header from '../../../../headerCon/Header';
import Footer from '../../../../Footers/Footercontainer/Footer';
import PuriedWaterBody from './PurifiedWaterBody';
function PurifiedWater(){
  React.useEffect(()=>{
     
  },[])
    return(
        <>
            <TopAdd/>
            <Header/>
            <PuriedWaterBody CatData={Waterstorecat} BrandsData={Waterstorebrands} navData={lightData}/>
            <Footer/>
        </>
    )
}
export default PurifiedWater;
const {Candystorecat,Candystorebrands,lightData} = require('../../../../assets/CandyChocolatesAsset');
import React from 'react';
import TopAdd from '../../../../addsComponents/TopAdd';
import Header from '../../../../headerCon/Header';
import Footer from '../../../../Footers/Footercontainer/Footer';
import CandyChocolatesBody from './CandyChocolatesBody';
function CandyChocolates(){
  React.useEffect(()=>{
     
  },[])
    return(
        <>
            <TopAdd/>
            <Header/>
            <CandyChocolatesBody CatData={Candystorecat} BrandsData={Candystorebrands} navData={lightData}/>
            <Footer/>
        </>
    )
}
export default CandyChocolates;
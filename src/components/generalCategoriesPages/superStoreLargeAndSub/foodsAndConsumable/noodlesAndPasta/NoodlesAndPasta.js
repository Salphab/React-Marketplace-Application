const {Noodlestorecat,Noodlestorebrands,lightData} =require('../../../../assets/NoodlesAndPastaAsset');
import React from 'react';
import TopAdd from '../../../../addsComponents/TopAdd';
import Header from '../../../../headerCon/Header';
import Footer from '../../../../Footers/Footercontainer/Footer';
import NoodlesAndPastaBody from './NoodlesAndPastaBody';
function NoodlesAndPasta(){
  React.useEffect(()=>{
     
  },[])
    return(
        <>
            <TopAdd/>
            <Header/>
            <NoodlesAndPastaBody CatData={Noodlestorecat} BrandsData={Noodlestorebrands} navData={lightData}/>
            <Footer/>
        </>
    )
}
export default NoodlesAndPasta;
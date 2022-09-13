const {Noodlestorecat,Noodlestorebrands,lightData} = require('../../../../assets/NoodlesAndPastaAsset');
import React from 'react';
import TopAdd from '../../../../addsComponents/TopAdd';
import Header from '../../../../headerCon/Header';
import Footer from '../../../../Footers/Footercontainer/Footer';
import RiceAndGrainBody from './RiceAndGrainsBody';
function RiceAndGrains(){
  React.useEffect(()=>{
     
  },[])
    return(
        <>
            <TopAdd/>
            <Header/>
            <RiceAndGrainBody CatData={Noodlestorecat} BrandsData={Noodlestorebrands} navData={lightData}/>
            <Footer/>
        </>
    )
}
export default RiceAndGrains;
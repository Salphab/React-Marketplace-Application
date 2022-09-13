const {Spicestorecat,Spicestorebrands,lightData} = require('../../../../assets/SpicesAndSeasoningAsset');
import React from 'react';
import TopAdd from '../../../../addsComponents/TopAdd';
import Header from '../../../../headerCon/Header';
import Footer from '../../../../Footers/Footercontainer/Footer';
import SpicesAndSeasoningBody from './SpicesAndSeasoningBody';
function SpicesAndSeasoning(){
  React.useEffect(()=>{
     
  },[])
    return(
        <>
            <TopAdd/>
            <Header/>
            <SpicesAndSeasoningBody CatData={Spicestorecat} BrandsData={Spicestorebrands} navData={lightData}/>
            <Footer/>
        </>
    )
}
export default SpicesAndSeasoning;
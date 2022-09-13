const {Juicestorecat,Juicestorebrands,lightData} = require('../../../../assets/JuiceAsset');
import React from 'react';
import TopAdd from '../../../../addsComponents/TopAdd';
import Header from '../../../../headerCon/Header';
import Footer from '../../../../Footers/Footercontainer/Footer';
import JuicesBody from './JuicesBody';
function Juices(){
  React.useEffect(()=>{
     
  },[])
    return(
        <>
            <TopAdd/>
            <Header/>
            <JuicesBody CatData={Juicestorecat} BrandsData={Juicestorebrands} navData={lightData}/>
            <Footer/>
        </>
    )
}
export default Juices;
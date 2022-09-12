const {Cerealstorecat,Cerealstorebrands,lightData} = require('../../../../assets/CerealsAsset');
import React from 'react';
import TopAdd from '../../../../addsComponents/TopAdd';
import Header from '../../../../headerCon/Header';
import Footer from '../../../../Footers/Footercontainer/Footer';
import CerealsBody from './CerealsBody';
function Cereals(){
  React.useEffect(()=>{
     
  },[])
    return(
        <>
            <TopAdd/>
            <Header/>
            <CerealsBody CatData={Cerealstorecat} BrandsData={Cerealstorebrands} navData={lightData}/>
            <Footer/>
        </>
    )
}
export default Cereals;
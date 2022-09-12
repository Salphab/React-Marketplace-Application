const  {Cannedstorecat,Cannedstorebrands,lightData} = require('../../../../assets/CannedAndPackageFoodAsset');
import React from 'react';
import TopAdd from '../../../../addsComponents/TopAdd';
import Header from '../../../../headerCon/Header';
import Footer from '../../../../Footers/Footercontainer/Footer';
import CannedAndPackageFoodBody from './CannedAndPackageFoodBody';
function CannedAndPackageFoods(){
  React.useEffect(()=>{
     
  },[])
    return(
        <>
            <TopAdd/>
            <Header/>
            <CannedAndPackageFoodBody CatData={Cannedstorecat} BrandsData={Cannedstorebrands} navData={lightData}/>
            <Footer/>
        </>
    )
}
export default CannedAndPackageFoods;
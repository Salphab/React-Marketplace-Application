const {AlcoholicBeveragestorecat,AlcoholicBeveragestorebrands,lightData} = require('../../../assets/AlcoholicBeverageAsset');
import React from 'react';
import TopAdd from '../../../addsComponents/TopAdd';
import Header from '../../../headerCon/Header';
import Footer from '../../../Footers/Footercontainer/Footer';
import AlcoholicBeverageBody from './AlcoholicBeverageBody';

function AlcoholicBeverage
(){
  React.useEffect(()=>{
     
  },[])
    return(
        <>
            <TopAdd/>
            <Header/>
            <AlcoholicBeverageBody CatData={AlcoholicBeveragestorecat} BrandsData={AlcoholicBeveragestorebrands} navData={lightData}/>
            <Footer/>
        </>
    )
}
export default AlcoholicBeverage
;
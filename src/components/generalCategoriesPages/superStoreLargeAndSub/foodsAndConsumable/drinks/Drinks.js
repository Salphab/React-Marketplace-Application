const {Drinkstorecat,Drinkstorebrands,lightData} =require('../../../../assets/DrinksAsset');
import React from 'react';
import TopAdd from '../../../../addsComponents/TopAdd';
import Header from '../../../../headerCon/Header';
import Footer from '../../../../Footers/Footercontainer/Footer';
import DrinksBody from './DrinksBody';
function Drinks(){
  React.useEffect(()=>{
     
  },[])
    return(
        <>
            <TopAdd/>
            <Header/>
            <DrinksBody CatData={Drinkstorecat} BrandsData={Drinkstorebrands} navData={lightData}/>
            <Footer/>
        </>
    )
}
export default Drinks;
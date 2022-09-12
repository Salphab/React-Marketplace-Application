const {Toiletriesstorecat,Toiletriesstorebrands,lightData}= require('../../../assets/ToiletriesAsset');
import React from 'react';
import TopAdd from '../../../addsComponents/TopAdd';
import Header from '../../../headerCon/Header';
import Footer from '../../../Footers/Footercontainer/Footer';
import ToiletriesBody from './ToiletreisBody';
function Toiletries(){
  React.useEffect(()=>{
     
  },[])
    return(
        <>
            <TopAdd/>
            <Header/>
            <ToiletriesBody CatData={Toiletriesstorecat} BrandsData={Toiletriesstorebrands} navData={lightData}/>
            <Footer/>
        </>
    )
}
export default Toiletries;
import TopAdds from '../addsComponents/TopAdd';
import Header from '../headerCon/Header';
import Bar from './Bar';
import Body from './AppBody';
import Footer from '../Footers/Footercontainer/Footer';
import React from 'react';
function HomePage(){
    React.useEffect(()=>{
        document.title = 'storeName | Online Shopping'
    },[])
    return(
        <>
            <TopAdds />
            <Header />
            <Bar />
            <Body />
            <Footer/>
        </>
    )
}
export default HomePage;
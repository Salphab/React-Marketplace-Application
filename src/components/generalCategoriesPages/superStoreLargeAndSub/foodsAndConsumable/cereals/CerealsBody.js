import './CerealsBody.css';
import {Link} from 'react-router-dom';
import Generalstorecat from '../../../../generalCategoriesBody/Subcat/Generalstorecat';
import Generalstorebrand from '../../../../generalCategoriesBody/Subcat/Generalstorebrand';
import Generalstoreprice from '../../../../generalCategoriesBody/Subcat/Generalstoreprice';
import Generalstorerating from '../../../../generalCategoriesBody/Subcat/Generalstorerating';
import Generalstoreshipping from '../../../../generalCategoriesBody/Subcat/Generalstoreshipping';
import Superstoreinncat from '../../../../generalCategoriesBody/InnerCategory/Superstoreinncat';
import Innerbodyitems from '../../../../generalCategoriesBody/Innerbodyitemscontainer/Innerbodyitemscontainer';
import Catdetails from '../../../../../Catdetails';
import React from 'react';

function foodConsumablesBody(props){
    React.useEffect(()=>{
        document.title = props.navData.pageHeader;
     },[])
    return(
        <>
            <div className='navigate'>
                <div>
                    <p><Link to='/'>Home</Link></p>
                    <span>&#62;</span>
                    <p><Link to={props.navData.routeData[0]}>{props.navData.navigator[0]}</Link></p>
                    <span>&#62;</span>
                    <p id='ndlink'><Link to={props.navData.routeData[1]}>{props.navData.navigator[1]}</Link></p>
                </div>
            </div>
            <div className='foodsbodycontainer'>
                <nav className='aside'>
                    <Generalstorecat Data={props.CatData}/>
                    <Generalstorebrand Brands={props.BrandsData}/>
                    <Generalstoreprice/>
                    <Generalstorerating/>
                    <Generalstoreshipping/>
                </nav>
                <div className='superstorebody'>
                    <Superstoreinncat/>
                    <Innerbodyitems/>
                </div>
            </div>
        </>
    )
}
export default foodConsumablesBody;
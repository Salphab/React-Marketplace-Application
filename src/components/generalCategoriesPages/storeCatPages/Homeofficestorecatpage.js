import './Generalstorecatpage.css';
import {Link} from 'react-router-dom';
import Generalstorecat from '../../generalCategoriesBody/Subcat/Generalstorecat';
import Generalstorebrand from '../../generalCategoriesBody/Subcat/Generalstorebrand';
import Generalstoreprice from '../../generalCategoriesBody/Subcat/Generalstoreprice';
import Generalstorerating from '../../generalCategoriesBody/Subcat/Generalstorerating';
import Superstoreinncat from '../../generalCategoriesBody/InnerCategory/Superstoreinncat';
import Innerbodyitems from '../../generalCategoriesBody/Innerbodyitemscontainer/Innerbodyitemscontainer';
import Generalstoreshipping from '../../generalCategoriesBody/Subcat/Generalstoreshipping';
import React from 'react';
import Catdetails from '../../../Catdetails';

function Homeofficestorecatpage(props){
    React.useEffect(()=>{
       document.title = props.navData.pageHeader;
    },[])
    return(
        <>
            <div className='navigate'>
                <div>
                    <p><Link to='/'>Home</Link></p>
                    <span>&#62;</span>
                    <p id='ndlink'><Link to={props.navData.routeData}>{props.navData.navigator}</Link></p>
                </div>
            </div>
            <div className='body'>
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
            <Catdetails/>
        </>
    )
}
export default Homeofficestorecatpage;
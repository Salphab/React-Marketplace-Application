import './Generalstorecat.css';
import {Link} from 'react-router-dom';
import React from 'react';

function Generalstorecat(props){
   
    return(
        <>
                <div className='cat'>
                    <p>Category</p>
                    {props.Data.map((data)=>{
                    return(
                        <Link to={data.link}><div className='cattext'><p>{data.cat}</p></div></Link>
                    )
                   })}
                </div>   
        </>
    )
}
export default Generalstorecat;

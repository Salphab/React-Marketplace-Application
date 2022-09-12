import {Link} from 'react-router-dom';
import React from 'react';
import './Generalstorebrand.css';

function Generalstorebrand(props){
    const [Brands, setBrands] = React.useState(props.Brands);
    React.useEffect(()=>{

    },[])
        return(
            <>
               <div className='brands'>
                    <p>Brands</p>
                    <input type='text' placeholder='search' id='text' onChange={(e)=>{
                            e.preventDefault;
                            setBrands(Brands.filter((data)=>{
                            return data.name.includes(e.currentTarget.value.toLowerCase());
                            }))
                            if(e.currentTarget.value === ''){
                                setBrands(props.Brands)
                            }
                    }}/>
               </div>
               <form action='' method='' className='checkform'>
               {Brands.map((data)=>{
                return(
                    <>
                    <Link to='/' className='checkcon'>
                            <input type='checkbox' name='brands' value={data.brands} className='brandscheck' />
                            <label htmlFor={data.brands}>{data.brands}</label>
                    </Link>
                    </>
                )
               })}
               </form>
            </>
        )
    }
export default Generalstorebrand;
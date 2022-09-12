import './Generalstoreshipping.css';
function Generalstoreshipping(){
    return(
        <>
            <div className='storeshipping'>
                <p>Shipping From</p>
                <div className='shippingcontainer'>
                    <input type='checkbox' name='abroad'/><span>Ship from Abroad</span><br/>
                    <input type='checkbox' name='nigeria'/><span>Ship from Nigeria</span>
                </div>
            </div>
        </>
    )
}
export default Generalstoreshipping;
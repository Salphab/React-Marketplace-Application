import './Generalstoreprice.css';
function Generalstoreprice(){
    return(
        <>
            <div className='price'>
                <p>price &#40;&#8358;&#41;</p>
                <input type='radio' name='price1'/>
                <label htmlFor='price1'>Under &#8358;4000</label><br/>
                <input type='radio' name='price2'/>
                <label htmlFor='price2'>&#8358;5000 - &#8358;10000</label><br/>
                <input type='radio' name='price3'/>
                <label htmlFor='price3'>&#8358;11000 - &#8358;20000</label><br/>
                <input type='radio' name='price4'/>
                <label htmlFor='price4'>&#8358;21000 - &#8358;30000</label><br/>
                <input type='radio' name='price5'/>
                <label htmlFor='price5'>&#8358;31000 - &#8358;40000</label><br/>
                <input type='radio' name='price6'/>
                <label htmlFor='price6'>Above &#8358;40000</label><br/>
                <p id='range'>Price Range</p>
                <form>
                    <input type='number' placeholder='&#8358;Min' min='0'/>
                    <h3>-</h3>
                    <input type='number' placeholder='&#8358;Max' min='500'/>
                    <input type='submit' value='Go' id='rangesubmit' />
                </form>
            </div>
        </>
    )
}
export default Generalstoreprice;
import './Generalstorerating.css';

function Generalstorerating(){
    return(
        <>
            <div className='ratingcon'>
                <p>Product Rating</p>
                <div className='productrate'>
                    <input type='radio' name='rating1'/><br/>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star' id='grey'></i>
                    <span>&#38; Above</span>
                </div>
                <div className='productrate'>
                    <input type='radio' name='rating1'/><br/>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star' id='grey'></i>
                    <i class='bx bxs-star' id='grey'></i>
                    <span>&#38; Above</span>
                </div>
                <div className='productrate'>
                    <input type='radio' name='rating1'/><br/>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star' id='grey'></i>
                    <i class='bx bxs-star' id='grey'></i>
                    <i class='bx bxs-star' id='grey'></i>
                    <span>&#38; Above</span>
                </div>
                <div className='productrate'>
                    <input type='radio' name='rating1'/><br/>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star' id='grey'></i>
                    <i class='bx bxs-star' id='grey'></i>
                    <i class='bx bxs-star' id='grey'></i>
                    <i class='bx bxs-star' id='grey'></i>
                    <span>&#38; Above</span>
                </div>
            </div>
        </>
    )
}
export default Generalstorerating;

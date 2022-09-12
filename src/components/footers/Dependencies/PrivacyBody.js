import './PrivacyBody.css';

function PrivacyBody(){
    return(
        <>
            <div className='privacybody'>
                <div className='topboardprivacy'>
                    <div className='privacyoutline'>

                    </div>
                    <div className='privacyimg'>
                        <img src={require('../../../png/shield.png')}/>
                    </div>
                </div>
                <div className='bodyboard'>
                    <p>
                        Privacy Policy
                    </p>
                    <div className='content'>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PrivacyBody;
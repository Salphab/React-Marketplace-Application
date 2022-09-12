import './LoginBody.css';
import {Link} from 'react-router-dom';

function LoginBody(){

    return(
        <div className='logmaincon'>
           <div className='logsub'>
                <div className='logheader'>
                    <h1>Log in</h1>
                </div>
                <form action='' method='POST'>
                    <label htmlFor='userName'>Email</label><br/>
                    <input type='email' name='userName' placeholder='Email...'/><br/>
                    <label htmlFor='password'>Password</label><br/>
                    <input type='password' name='password' placeholder='Password...'/>
                    <input type='submit' name='submit' value='Login' id='logsubmit'/>
                </form>
                    <a href='' id='forgetP'>Forget Password?</a>
                    <div className='bottomdiv'>
                        <p>OR</p>
                        <Link to='/account/signup' id='signup'>Dont Have an Account? Sign Up</Link>
                        <a href='sdfds'>
                            <div id='appleconnect'>
                                <i class='bx bxl-apple'></i>
                                <p>Continue with Apple</p>
                            </div>
                        </a>
                        <a href='grrrer'>
                            <div id='googleconnect'>
                                <img src={require('../../../src/png/google.png')} alt='googleimage'/>
                                <p>Continue with google</p>
                            </div>
                        </a>
                    </div>
                <button type='button' id='hidden' onClick={(e)=>{
                    e.preventDefault;
                    e.currentTarget.style.display = 'none';
                    const show = document.getElementById('show');
                    show.style.display = 'flex';
                    const hidePassword = document.getElementsByTagName('input');
                    if(hidePassword[3].type==='text'){
                        hidePassword[3].type = 'password';
                    }
                }}>Hide</button>
                <button type='button' id='show' onClick={(e)=>{
                    e.preventDefault;
                    e.currentTarget.style.display = 'none';
                    const hide = document.getElementById('hidden');
                    hide.style.display = 'flex';
                    const showPassword = document.getElementsByTagName('input');
                    if(showPassword[3].type==='password'){
                        showPassword[3].type = 'text';
                    }
                }}>Show</button>
           </div>
        </div>
    )
}
export default LoginBody;
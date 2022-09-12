import './SignUpBody.css';
import {Link} from 'react-router-dom';
import React from 'react';

function SignUpBody(){
    React.useEffect(()=>{
        document.title ='Signup | name online shopping'
    })

    return(
        <div className='signupmaincon'>
           <div className='signupsub'>
                <div className='signupheader'>
                   <h1>Create An Account</h1>
                </div>
                <form action='' method='Post'>
                    <label htmlFor='firstName'>First Name</label><br/>
                    <input type='text' name='firstName' className='signupvar' placeholder='First Name' onFocus={(e)=>{
                            e.preventDefault;
                            e.currentTarget.style.backgroundColor = 'rgb(248, 239, 206)';
                    }} onBlur={(e)=>{
                            e.preventDefault;
                            e.currentTarget.style.backgroundColor = 'white';
                    }} onChange={(e)=>{
                        e.preventDefault;
                        e.currentTarget.style.backgroundColor = 'rgb(233, 248, 247)';
                    }}/><br/>
                    <label htmlFor='lastName'>Last Name</label><br/>
                    <input type='text' name='lastname' className='signupvar' placeholder='Last Name' onFocus={(e)=>{
                            e.preventDefault;
                            e.currentTarget.style.backgroundColor = 'rgb(248, 239, 206)';
                    }} onBlur={(e)=>{
                            e.preventDefault;
                            e.currentTarget.style.backgroundColor = 'white';
                    }} onChange={(e)=>{
                        e.preventDefault;
                        e.currentTarget.style.backgroundColor = 'rgb(233, 248, 247)';
                    }}/><br/>
                    <label  htmlFor='emailAddress'>Email</label><br/>
                    <input type='email' name='emailAddress' className='signupvar' placeholder='Email Address' onFocus={(e)=>{
                            e.preventDefault;
                            e.currentTarget.style.backgroundColor = 'rgb(248, 239, 206)';
                    }} onBlur={(e)=>{
                            e.preventDefault;
                            e.currentTarget.style.backgroundColor = 'white';
                    }} onChange={(e)=>{
                        e.preventDefault;
                        e.currentTarget.style.backgroundColor = 'rgb(233, 248, 247)';
                    }}/><br/>
                    <label htmlFor='phoneNumber'>Phone Number</label><br/>
                    <input type='text' name='phoneNumber' className='signupvar' placeholder='Phone Number' onFocus={(e)=>{
                            e.preventDefault;
                            e.currentTarget.style.backgroundColor = 'rgb(248, 239, 206)';
                    }} onBlur={(e)=>{
                            e.preventDefault;
                            e.currentTarget.style.backgroundColor = 'white';
                    }} onChange={(e)=>{
                        e.preventDefault;
                        e.currentTarget.style.backgroundColor = 'rgb(233, 248, 247)';
                    }}/><br/>
                    <label htmlFor='password'>Password</label><br/>
                    <input  type='password' className='signupvar' name='password' placeholder='Password' onFocus={(e)=>{
                            e.preventDefault;
                            e.currentTarget.style.backgroundColor = 'rgb(248, 239, 206)';
                    }} onBlur={(e)=>{
                            e.preventDefault;
                            e.currentTarget.style.backgroundColor = 'white';
                    }} onChange={(e)=>{
                        e.preventDefault;
                        e.currentTarget.style.backgroundColor = 'rgb(233, 248, 247)';
                    }}/>
                    <input type='Submit' value='Create An Account' id='submit'/>
                </form>
                <div className='privacyterms'>
                    <p>By signing up, you agree to our <a href='fdfd'>
                        terms and conditon</a> & <a href='dfdss'>Privacy policy</a>

                    </p>
                </div>
                <button type='button' id='hiddensignup' onClick={(e)=>{
                    e.preventDefault;
                    e.currentTarget.style.display = 'none';
                    const show = document.getElementById('showsignup');
                    show.style.display = 'flex';
                    const hidePassword = document.getElementsByTagName('input');
                    if(hidePassword[6].type==='text'){
                        hidePassword[6].type = 'password';
                    }
                }}>Hide</button>
                <button type='button' id='showsignup' onClick={(e)=>{
                    e.preventDefault;
                    e.currentTarget.style.display = 'none';
                    const hide = document.getElementById('hiddensignup');
                    hide.style.display = 'flex';
                    const showPassword = document.getElementsByTagName('input');
                    if(showPassword[6].type ==='password'){
                        showPassword[6].type = 'text';
                    }
                }}>Show</button>
            </div>
        </div>
    )
}
export default SignUpBody;
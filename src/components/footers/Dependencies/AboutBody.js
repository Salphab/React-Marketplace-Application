import React from 'react';
import './AboutBody.css';
function AboutBody(){
    const [topboard, setTopboard] = React.useState('Company Overview');
    return(
        <>
            <div className='aboutbody'>
                <div className='topboard'>
                    <p>{topboard}</p>
                </div>
                <section className='aboutsection'>
                    <nav className='aboutnav'>
                        <div>
                            <button type='button' id='default' onFocus={(e)=>{
                                e.preventDefault;
                                setTopboard('Company Overview');
                                e.currentTarget.style.backgroundColor = 'rgb(233, 248, 247)';
                                e.currentTarget.style.fontWeight = '600';
                                const aboutboard = document.querySelector('.aboutboard');
                                const teamboard = document.querySelector('.teamboard');
                                const valueboard = document.querySelector('.valueboard');
                                aboutboard.style.display = 'flex';
                                teamboard.style.display = 'none';
                                valueboard.style.display = 'none';

                            }} onBlur={(e)=>{
                                e.preventDefault;
                                e.currentTarget.style.backgroundColor = 'white';
                                e.currentTarget.style.fontWeight = '400';
                            }}><p>Company Overview</p></button>
                            <button type='button' onFocus={(e)=>{
                                e.preventDefault;
                                setTopboard('Executive Team');
                                const bnt = document.getElementById('default');
                                bnt.style.background = 'white';
                                bnt.style.fontWeight = '400';
                                e.currentTarget.style.backgroundColor = 'rgb(233, 248, 247)';
                                e.currentTarget.style.fontWeight = '600';
                                const aboutboard = document.querySelector('.aboutboard');
                                const valueboard = document.querySelector('.valueboard');
                                const teamboard = document.querySelector('.teamboard');
                                aboutboard.style.display = 'none';
                                valueboard.style.display = 'flex';
                                teamboard.style.display = 'none';
                            }} onBlur={(e)=>{
                                e.preventDefault;
                                e.currentTarget.style.backgroundColor = 'white';
                                e.currentTarget.style.fontWeight = '400';
                            }}><p>Executive Team</p></button>
                            <button type='button' onFocus={(e)=>{
                                e.preventDefault;
                                setTopboard('Culture and Values')
                                const bnt = document.getElementById('default');
                                bnt.style.background = 'white';
                                bnt.style.fontWeight = '400';
                                e.currentTarget.style.backgroundColor = 'rgb(233, 248, 247)';
                                e.currentTarget.style.fontWeight = '600';
                                
                            }} onBlur={(e)=>{
                                e.preventDefault;
                                e.currentTarget.style.backgroundColor = 'white';
                                e.currentTarget.style.fontWeight = '400';
                            }}><p>Culture and Values</p></button>
                        </div>
                    </nav>
                    <div className='aboutboard'>
                            <div className='textup'>
                                <h1>Overview</h1>
                                <p>

                                    Konga.com is Nigeria's largest online mall. We launched in July 2012 and our mission is to become the engine of commerce and trade in Africa.<br/><br/>

                                    We serve a retail customer base that continues to grow exponentially, offering products that span various categories including Phones, Computers, Clothing, Shoes, Home Appliances, Books, healthcare, Baby Products, personal care and much more.

                                    Our range of services are designed to ensure optimum levels of convenience and customer satisfaction with the retail process; these services include our lowest price guarantee, 7-day free return policy*, order delivery-tracking, dedicated customer service support and many other premium services.

                                    As we continue to expand the mall, our scope of offerings will increase in variety, simplicity and convenience; join us and enjoy the increasing benefits.

                                    We are highly customer-centric and are committed towards finding innovative ways of improving our customers' shopping experience with us; so give us some feedback on help@konga.com. For any press related questions, kindly send us an email at press@konga.com.

                                    Thank you and we hope you enjoy your experience with us.

                                    *Available for select stores
                            </p>
                            </div>
                    </div>
                    <div className='teamboard'>

                    </div>
                    <div className='valueboard'>

                    </div>

                </section>
            </div>
        </>
    )
}
export default AboutBody;
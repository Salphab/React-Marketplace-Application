import './ContactUsBody.css';

function ContactUsBody(){
    return(
        <>
            <div className='contacttopboard'>

            </div>
            <div className='contactbodyboard'>
                <p>
                    Contact-us
                </p>
                <form action='' method=''>
                    <label htmlFor='contactemail'>Email</label><br/>
                    <input type='email' className='contactemail' placeholder='Email Address'/><br/>
                    <label htmlFor='contactemail'>Subject of Interest</label><br/>
                    <input type='text' className='contactsubject' placeholder='Subject of Interest'/><br/>
                    <label htmlFor='contactmessage'>Messages</label><br/>
                    <textarea rows='5' cols='56' className='contactmessage' placeholder='Messages...'></textarea>
                    <input type='submit' value='Submit' className='contactsubmit'/>
                </form>
                <p className='phonesupport'>Phone Line Support</p>
                <span>08047349634, 07035643453, 01548935324</span>
                <p className='phonesupport'>whatsapp Media</p>

            </div>
        </>
    )
}
export default ContactUsBody;
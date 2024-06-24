import React from 'react';
import './Contact.css';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import msgIcon from '../../assets/msg-icon.png';
import whiteArrowIcon from '../../assets/white-arrow.png';

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "3bc02930-9ca3-409a-8487-c62fee9ae2f0");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>

        <div className="contact">
            <div className="contact-col">
                <h3>Send us a Message <img src={msgIcon} alt="" className='msg-icon'/></h3>
                <p>Feel free to reach out through contact from </p>
                <ul>
                    <li><EmailSharpIcon  className='mail-icon'/>marzamprojects@gmail.com</li>
                    <li>  <LocalPhoneSharpIcon  className='phone-icon' /> +968 93227928</li>
                    {/* <li><img src={locationIcon} alt="" className='location-icon' />77 Massachusetts Ave, Cambridge <br /> MA 021239, Unites States</li> */}
                    <li>  <InstagramIcon  className='phone-icon' />Marzam_projects</li>
                </ul>
            </div>
            <div className="contact-coll">
                <form onSubmit={onSubmit}>
                    <label >Your name </label>
                    <input type="text" name='name' placeholder='Enter your name' required/>
                    <label htmlFor="">Phone number</label>
                    <input type="tel" name='phone' placeholder='Enter your phone number' required/>
                    <label htmlFor="">Write your message here </label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now <img src={whiteArrowIcon} alt=""  className=''/></button>
                </form>

                <span>
                    {result}
                </span>

            </div>
        </div>
    </div>
  );
}

export default Contact;

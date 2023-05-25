import React from 'react'
import "./Styles/ContactFormStyles.css"

const ContactForm = () => {
  return (
    <div className='form-container'>
        <h1>Connect With Us!</h1>
        <form>
            <input type="text"  placeholder='Name'/>
            <input type="email"  placeholder='Email'/>
            <input type="text"  placeholder='Subject'/>   
            <textarea cols="30" rows="4" placeholder='Message'></textarea> 
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm

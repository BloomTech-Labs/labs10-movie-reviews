import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return (        
        <div className="contact-wrapper">
                <form 
                    className='contact-form'
                    action={`https://formspree.io/kopecky12112@gmail.com`} method="POST">
                    <h1 className='contact-header'>Let's talk. </h1>
                    <div className="input-wrapper">
                        <div className="contact-form-input">
                            <label for="name">Name:</label>
                            <input type="text" name="name"
                                className='form-blank-name-email'
                                placeholder="Enter your name - required"
                                required/>
                        </div>
                        <div className="contact-form-input">
                            <label for="email">Email:</label>
                            <input type="email" name="_replyto"
                                className='form-blank-name-email'
                                placeholder="Enter your email - required"
                                required/>
                        </div>
                        
                        <div className="contact-form-input">
                                <label for="message">Message:</label>
                                <textarea type="textarea" 
                                    name="message"
                                    className='message' required
                                    placeholder="required"

                                />
                                    
                        </div>

                        <input className="submit-button" type="submit" value="Send Message"/>
                    </div>
                </form>
        </div>
    );
};

export default Contact;
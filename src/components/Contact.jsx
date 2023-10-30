import React from 'react'
import phoneImg from './Images/Pixabay-2280940.svg'
import callingImg from './Images/Calling.svg'

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="phone-img">
                <img src={phoneImg} alt="" />
            </div>
            <div className="contact-heading">
                <p className="head">CONTACT US</p>
                <p className='sub-heading'>We'd love to hear from you! If you have any, <br /> questions, suggestions, or just want to say hello,<br /> please don't hesitate to get in touch with us.</p>
            </div>


            <div className="contact-form-title">
                <div className="title">
                    <h2>SEND  YOUR <span> MESSAGE</span></h2>

                </div>
            </div>

            <div className="contact-form-img">
                <img src={callingImg} alt="" />
            </div>
            <div className="form">
                <form action="">
                    <label htmlFor="">Enter Your Name </label><br />
                    <input type="text" name='name' placeholder='Your Name' />
                    <br />
                    <br />
                    <label htmlFor="">Enter Your Email Address</label><br />
                    <input type="email" placeholder='Entre Your Email' />
                    <br />
                    <br />
                    <label htmlFor="">Type your message</label><br />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Type in your message here....'></textarea>
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
            </div>

            <div className="contact-title">
                <div className="title">
                    <h2>   <span> Contact</span> us</h2>

                </div>

            </div>
            <div className="contact-us-box">
                <div className="call">
                    <i class="ri-phone-fill"></i><br />
                    <p>+ 91 1234567890</p>
                </div>
                <div className="message">
                    <i class="ri-message-2-fill"></i>
                    <p>IndianCulinaryTale@gmail.com</p>
                </div>

                <div className="map">
                    <i class="ri-map-pin-2-fill"></i>
                    <p>Magarpatta City, Pune, Maharastra</p>
                </div>

            </div>

            <div className="contact-social-title">
                <div className="title">
                    <h2>    <span>Social </span>Media</h2>

                </div>
            </div>
            <div className="contact-social-sub-heading">
                <p>Feel free to drop us a message, and our friendly team will get back to you as soon as possible. Your feedback and ideas are important to us, and we're here to assist you on your culinary journey.</p>
            </div>

            <div className="contact-social-icons">
                <i class="ri-facebook-box-fill"></i>
                <i class="ri-twitter-fill"></i>
                <i class="ri-instagram-fill"></i>
                <i class="ri-linkedin-box-fill"></i>
                <i class="ri-pinterest-fill"></i>
            </div>
        </div>
    )
}

export default Contact
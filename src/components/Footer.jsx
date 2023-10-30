import React from 'react'

const Footer = () => {
    return (
        <>
            <section>

                <div className="footer">
                    <div className="footer-content">
                        <div className='footer-top'>
                            <p>INDIAN CULINARY TALES </p>

                        </div>
                        <div className="footer-desc">
                            <p>We are your gateway to the enchanting world of Indian cuisine, where <br /> flavors tell stories and every dish is a cultural journey. Join us as we unravel br
                                the secrets of India's diverse culinary heritage, one recipe at a time."  </p>
                        </div>

                        <div className="footer-mid">
                            <div className="contact">

                                <p className='heading '>ContactUs</p>
                                <p className='gmail'>Meghrajthakre444@gmail.com</p>
                                <h3>About Us</h3>
                                <h3>Menu</h3>
                            </div>
                            <div className="contact">

                                <p className='heading'>RECIPES</p>
                                <p>NORTH INDIAN</p>
                                <p>SOUTH INDIAN</p>
                                <p>EAST INDIAN</p>
                                <p>WEST INDIAN</p>
                            </div>
                            <div className="contact">

                                <p className='heading'>FOLLOW US ON</p>
                                <div className="icon">
                                    <i class="ri-twitter-fill"></i>
                                    <i class="ri-facebook-box-fill"></i>
                                    <i class="ri-instagram-fill"></i>
                                    <i class="ri-pinterest-fill"></i>
                                </div>
                            </div>
                        </div>

                        <div className="newslatter">
                            <p>SIGN UP FOR NEWSLETTER FOR LATEST UPDATES</p>
                            <div className="email-input">
                                <input type="text" placeholder='ADD YOUR EMAIL ADDRESS ' />
                            </div>

                        </div>

                        <div className="rights">
                            <p>INDIAN CULINARY TALES. All rights reserved.</p>
                            <div className="terms">
                                <p>Terms & Conditions</p>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Footer
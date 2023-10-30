import React from 'react'
import topImg from './Images/image 13.svg'
import img2 from './Images/image 15.svg'
import avcado from './Images/avocado and orange slices on cutting board.svg'
import img3 from './Images/image 14.svg'
import yellowMango from './Images/Yellow mango with leaf.svg'
import whiteCouliflower from './Images/White cauliflower.svg'
import carrot from './Images/Carrot.svg'
import youngpeople from './Images/young people with gadgets.svg'
import img4 from './Images/image 16.svg'
import girlAndBag from './Images/girl and grocery bag.svg'
const About = () => {
    return (
        <>
            <div className='about-container'>
                <div className="about-heading">
                    <p>ABOUT US</p>
                </div>
                <div className="about-top-img">
                    <img src={topImg} alt="" />
                </div>
                <div className="about-top-content">
                    <p>
                        Welcome to Indian Culinary Tales, where we're passionate about Indian food and its <br /> fascinating stories. Our goal is to make Indian cooking easy and enjoyable for everyone. <br />
                        We believe that each recipe has a unique story, and we're here to share them with you. From <br /> spicy street food to traditional family dishes, we've got a wide range of recipes that celebrate <br /> India's diverse culinary culture.
                        Whether you're a seasoned chef or just starting in the kitchen, we're here to help you discover <br /> the joys of Indian cooking. Join us on this delicious journey through India's culinary tales,<br /> where every bite is a new adventure.
                    </p>
                </div>
                <div className="image2">
                    <img src={img2} alt="" />
                </div>
                <div className="our-mission-text">
                    <div className="title">
                        <h2>OUR   <span>MISSION</span></h2>

                    </div>
                </div>
                <div className="fruits-img">
                    <img src={yellowMango} className='yellow-mango' />
                    <img src={carrot} className='carrot' />
                    <img src={whiteCouliflower} className='white-couliflower' />
                    {/* <img src={raddish} className='raddish' /> */}
                </div>

                <div className="our-mission-container">
                    <div className="our-mission-text-2">
                        <p>
                            At Indian Culinary Tales, our mission is to share good food recipes & create a <br /> community to share food recipes with people. We are dedicated to share Indian <br /> cultural & food recipes, striving to provide a community that will create a social <br /> network foe like minded people who are interested in culinary . Through our <br /> unwavering commitment to creating a community & sharing the spice blends <br /> with everyone. We invite you to join us on this journey.
                        </p>
                    </div>
                    <img src={avcado} alt="" />


                </div>

                <div className="image3">
                    <img src={img3} alt="" />
                </div>
                <div className="community-text">
                    <div className="title">
                        <h2>COMMUNITY    <span>ENGAGEMENT</span></h2>

                    </div>
                </div>

                <div className="community-container-2">
                    <div className="community-container-text-2">
                        <p>
                            At Indian Culinary Tales, we thrive on the vibrant and diverse community that makes our platform come alive. We are passionate about fostering meaningful connections and interactions among our members. Our commitment to community engagement is rooted in our belief that [mention the significance of community to the website's mission]. We actively engage with the community through forums, events, or user-generated content, creating a space where sharing knowledge , support, or networking through this website. We value your participation and are dedicated to ensure a positive community experience. Together, we can emphasize the positive outcomes of a strong community.
                        </p>
                    </div>
                    <img src={youngpeople} alt="" />
                </div>

                <div className="image4">
                    <img src={img4} alt="" />
                </div>

                <div className="our-values">
                    <div className="title">
                        <h2>OUR     <span>VALUES</span></h2>

                    </div>
                </div>
                <div className="our-values-container">
                    <div className="our-value-text">
                        <p><span>
                            At Indian Culinary Tales, our values are the heart and soul of our culinary journey. They define our approach and underscore our commitment to delivering a delightful food experience. Our values include: </span><br /><br />

                            1. Culinary Excellence: We are dedicated to celebrating the art of cooking and the joy of savoring diverse flavors from around the world.
                            <br />
                            2. Fresh and Sustainable: We prioritize using fresh, locally-sourced, and sustainable ingredients to create dishes that are good for you and the planet.
                            <br />
                            3. Community and Sharing: We believe food is best enjoyed together. Our platform fosters a community of passionate food enthusiasts who share their love for good food.
                            <br />
                            4. Inclusivity: We are committed to offering a diverse range of recipes that cater to various tastes, dietary needs, and cultural preferences.
                            <br />
                            5. Authenticity: We honor the authenticity of each cuisine and the stories behind every dish, connecting people through the love of food.
                            <br />
                            <br />
                            <span>
                                These values serve as the pillars of our culinary journey, ensuring that Indian Culinary Tales remains your go-to destination for culinary inspiration and food experiences. Join us in celebrating these values as we embark on a flavorful adventure together.</span></p>
                    </div>
                    <img src={girlAndBag} />
                </div>

                <div className="find-us-buttons-title">
                    <div className="title">
                        <h2>FIND US      <span>ANYWHERE</span></h2>

                    </div>
                </div>

                <div className="find-us-icons">
                    <div className="icons">
                        <p>Instagram</p>
                        <i class="ri-instagram-fill"></i>
                    </div>
                    <div className="icons">
                        <p>Facebook</p>
                        <i class="ri-facebook-box-fill"></i>
                    </div>
                    <div className="icons">
                        <p>Twitter</p>
                        <i class="ri-twitter-fill"></i>
                    </div>
                    <div className="icons">
                        <p>Pintrest</p>
                        <i class="ri-pinterest-fill"></i>
                    </div>

                    <div className="follow-buttons">
                        <button>Follow Us</button>
                        <button>Follow Us</button>
                        <button>Follow Us</button>
                        <button>Follow Us</button>
                    </div>


                </div>

            </div>
        </>
    )
}

export default About
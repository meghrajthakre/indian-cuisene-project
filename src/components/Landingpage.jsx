import React from 'react'
import vectoreImg from './Images/Vector.svg'
import icon33 from "./Images/Group 33 (1).png"
import vectorImg2 from './Images/Vector (2).svg'
import ellips1 from './Images/Ellipse 21.svg'
import ellips2 from './Images/Ellipse 22.svg'
import ellips3 from './Images/Ellipse 23.svg'
import Roundedswiper from './Roundedswiper'
import Slider from './Sliders'
import Catogories from './Catogories'
import Maps from './Maps'
import img98 from './Images/Group 98.svg'
import group22 from './Images/Group 20.svg'
import ellips4 from './Images/Ellipse 4.svg'
import momImg from './Images/mom and daughter make chocolate cupcakes with strawberries together.svg'
import watermelon from './Images/watermelon.png'
import mango from './Images/Yellow mango with leaf.svg'
import stars from './Images/golden star standing.svg'
import starHalf from './Images/golden star standing (1).svg'
import ellips5 from './Images/Ellipse 5.svg'

const Landingpage = () => {
  return (
    <div>

      <div className="menu-section">
        <div className="ellips">

          <div className='ellipsImg1'>
            <img src={ellips1} alt="" style={{ width: 150 }} />
            <button className='btn btn1'>BREAKFAST</button>
          </div>
          <div className='ellipsImg2'>
            <img src={ellips2} alt="" style={{ width: 150 }} />
            <button className='btn btn2'>MAINCOURSE</button>

          </div>
          <div className='ellipsImg3'>
            <img src={ellips3} alt="" style={{ width: 150 }} />
            <button className='btn btn3'>DESSERT</button>

          </div>
        </div>
        <div className="left-side">
          <img src={vectoreImg} alt="" />
          <div className="menu-text">
            <h3>INDULGE IN INDIAN CRAVINGS: <br />
              WHERE TASTE <br /> AND IMAGINATION COLLIDES. </h3>
            <h4>We are your gateway to the enchanting <br /> world of Indian cuisine, where flavors <br /> tell stories and every dish is a cultural <br /> journey. Join us as we unravel the <br /> secrets of India's diverse culinary <br /> heritage, one recipe at a time."  </h4>

            <input type="text" placeholder='UKADICHE MODAK' />
            <h5> QUICK SEARCH: </h5>

            <p className='pavbhaji'>Pav Bhaji, Bombil Fry, Gobi Paratha, Dosa</p>




            <div className="getcook">
              <p>GET COOKING ! <img src={icon33} alt="" /></p>
            </div>



          </div>
        </div>
        <div className="right-side">
          <img src={vectorImg2} alt="" />


        </div>

      </div>

      <div className="swipers">
        <Roundedswiper Slider={Slider} title={"POPULAR  "} titlespan={"RECIPES"} />

      </div>
      <div className="catogries">
        <Catogories />
      </div>

      <div className="swipers">
        <Roundedswiper Slider={Slider} title={"FESTIV "} titlespan={"RECIPES"} />

      </div>
      <div className="swipers">
        <Roundedswiper Slider={Slider} title={"SEASONAL  "} titlespan={"RECIPES"} />

      </div>
      <div className="maps">
        <Maps />
      </div>

      <div className="mid-image">
        <img src={group22} alt="" />
        <div className="mom-dad-img">
          <img src={momImg} alt="" />
        </div>
      </div>
      <div className="stories">
        <div className="title">
          <img src={img98} alt="" />
          <h2> <span>SAVOURY STORIES :</span>   TALES FROM OUR KITCHEN </h2>
        </div>
        <div className='storieses'>
          <img src={watermelon} alt="" className='watermelon' />
          <img src={mango} alt="" className='mango' />
          <div className="star">
            <img src={stars} alt="" />
            <img src={stars} alt="" />
            <img src={stars} alt="" />
            <img src={stars} alt="" />
          </div>
          <div className="star2">
            <img src={stars} alt="" />
            <img src={stars} alt="" />
            <img src={stars} alt="" />
            <img src={starHalf} alt="" />
          </div>

          <div className="stories1">
            <img src={ellips4} className='ellips4' alt="" />
            <div className="story-text">
              <p>“I always struggled to find quick and authentic <br /> Indian recipes. Thanks to this website, I've <br /> discovered a world of delicious dishes I can <br /> prepare in no time. The step-by-step guides and <br /> personalized recommendations make cooking fun <br /> and hassle-free. I've become quite the chef, <br /> and it's all thanks to this amazing platform”</p>
            </div>

          </div>
          <div className="stories1">
            <img src={ellips5} className='ellips5' alt="" />
            <div className="story-text">
              <p>“I always struggled to find quick and authentic <br /> Indian recipes. Thanks to this website, I've <br /> discovered a world of delicious dishes I can <br /> prepare in no time. The step-by-step guides and <br /> personalized recommendations make cooking fun <br /> and hassle-free. I've become quite the chef, <br /> and it's all thanks to this amazing platform”</p>
            </div>

          </div>

        </div>

      </div>



    </div>
  )
}

export default Landingpage
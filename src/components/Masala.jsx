import React from 'react'
import topImg from './Images/Rectangle 389.svg'
import group155 from './Images/Group 150.svg'
import SquarSwiper from './SquarSwiper'
const Masala = () => {
    return (<>


        <div className='masala-container'>
            <div className="masala-img-top">
                <img src={topImg} alt="" />
            </div>

            <div className="masala-heading">
                <h5>MASALAS </h5>
            </div>
            <div className="masala-content">
                "Elevate Your Culinary <br /> Creations: Discover Our <br /> Exclusive Masalas Now!"
            </div>


            <div className="masala-mid-container">
                <div className="masala-mid-img">
                    <img src={group155} alt="" />
                </div>
                <div className="masala-mid-text">
                    <p>
                        “Welcome to Indian Culinary Tales Masalas Page,<br /> where the essence of flavor and tradition converge. <br /> Dive into a treasure trove of handcrafted spice <br />
                        blends and aromatic masalas from across the globe. <br />
                        Each spice tells a story, and here, you'll uncover the <br />
                        rich history and culinary heritage behind them. Whether <br />
                        you're seeking to elevate your dishes with the vibrant <br />
                        spices of India, the bold flavors of the Mediterranean, <br />
                        or the subtleties of Asian cuisine, our masalas are your <br />
                        gateway to a world of taste. Get ready to embark on a <br />
                        culinary journey that will tantalize your senses and inspire  <br />
                        your kitchen creations."
                    </p>
                </div>
            </div>
        </div>
        <div className="masala-squar1">
            <SquarSwiper title={"BREAKFASTS   "} titlespan={" IDEAS "} />

        </div>
        <div className="masala-squar2">
            <SquarSwiper title={"FLAVOR    "} titlespan={" PROFILE "} />

        </div>
        <div className="masala-squar3">
            <SquarSwiper title={"SPICES    "} titlespan={" PARRINGS "} />

        </div>




    </>
    )
}

export default Masala
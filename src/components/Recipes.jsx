import React from 'react'
import backgroundImg from './Images/Rectangle 390.svg'
import search from './Images/Vector (3).svg'
import icon33 from './Images/Group 33.svg'
import SquarSwiper from './SquarSwiper'
import group133 from './Images/Group 133.svg'
import group132 from './Images/Group 132.svg'
const Recipes = () => {
    return (
        <>
            <div className="recipes-container">
                <div className="recipes-img-top">
                    <img src={backgroundImg} alt="" />
                </div>

                <div className="recipes-heading">
                    <h5>RECIPES </h5>
                </div>
                <div className="recipes-input">
                    <div className="input">
                        <img src={search} alt="" />
                        <input type="text" placeholder='UKADICHE MODAK' />
                    </div>
                    <div className="quick">
                        <h5>QUICK SEARCH: </h5>
                        <p> Pav Bhaji, Bombil Fry, Gobi Paratha, Dosa</p>
                    </div>
                    <div className="getcook">
                        <p>GET COOKING ! <img src={icon33} alt="" /></p>
                    </div>
                </div>


            </div>
            <div className="squar-swiper">
                <SquarSwiper title={"FOOD STORIES &  "} titlespan={" CULTURE "} />

            </div>
            <div className="squar-swiper">
                <SquarSwiper title={"BREAKFASTS   "} titlespan={" IDEAS "} />

            </div>
            <div className="squar-swiper">
                <SquarSwiper title={"VEGETERIAN  "} titlespan={" DELIGHT "} />

            </div>
            <div className="squar-swiper">
                <SquarSwiper title={"SWEETS &   "} titlespan={" DESSERTS "} />

            </div>
            <div className="recipe-img">
                <img src={group133} alt="" />
            </div>
            <div className="squar-swiper">
                <SquarSwiper title={"FESTIVALS & "} titlespan={" CELEBRATIONS "} />

            </div>
            <div className="squar-swiper">
                <SquarSwiper title={"STREET FOOD  &   "} titlespan={" EXTRAVAGANZA "} />

            </div>
            <div className="squar-swiper">
                <SquarSwiper title={"REGIONAL     "} titlespan={" SPECIALTIES "} />

            </div>

            <div className="recipe-img">
                <img src={group132} alt="" />
            </div>

            <div className="squar-swiper">
                <SquarSwiper title={"COOKING TIPS &      "} titlespan={" TECHNIQUES "} />

            </div>




        </>
    )
}

export default Recipes
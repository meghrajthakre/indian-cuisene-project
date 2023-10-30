import React from 'react'
import Vegetable from './Images/plate with vegetables.png'
import cardImg from './Images/Rectangle 295.svg'
import cardImg2 from './Images/Rectangle 296.svg'
import cardImg3 from './Images/Rectangle 297.svg'
import cardImg4 from './Images/Rectangle 298.png'
import cardImg5 from './Images/Rectangle 302 (1).svg'
import cardImg6 from './Images/Rectangle 303.svg'
import backgroundImg from './Images/Vegetable salad for a healthy diet.svg'
import backgroundImg2 from './Images/Vegetable salad for a healthy diet (1).svg'
const Catogories = () => {
    return (
        <>
            <div className="container-grid ">


                <div className="title">
                    <img src={Vegetable} alt="" />
                    <h2>SELECT  <span>CATEGORIES</span></h2>

                </div>
                <div className="imgback">
                    <img src={backgroundImg} className='imgback1' alt="" />
                    <img src={backgroundImg2} className='imgback2' alt="" />
                </div>

                <div className="container-box">

                    <div className="box">
                        <img src={cardImg} alt="" />
                        <h3>MASALAS</h3>

                    </div>
                    <div className="box">
                        <img src={cardImg2} alt="" />
                        <h3>STREET FOOD</h3>

                    </div>
                    <div className="box">
                        <img src={cardImg3} alt="" />
                        <h3>HEALTHY FOODS</h3>

                    </div>
                    <div className="box">
                        <img src={cardImg4} alt="" />
                        <h3>Rice Recipes</h3>

                    </div>
                    <div className="box">
                        <img src={cardImg5} alt="" />
                        <h3>INDIAN CHINESE</h3>

                    </div>
                    <div className="box">
                        <img src={cardImg6} alt="" />
                        <h3>REGINAL RECIPES</h3>

                    </div>



                </div>




            </div>
        </>
    )
}

export default Catogories
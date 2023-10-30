import React from 'react'
import topImg from './Images/Rectangle 369.svg'
import SquarSwiper from './SquarSwiper'
const Community = () => {
    return (
        <>
            <div className="community-container">
                <div className="about-heading">
                    <p>COMMUNITY</p>
                </div>
                <div className="community-container-img-top">
                    <img src={topImg} alt="" />
                </div>

                <div className="community-content">
                    <p>"Come Together in the Kitchen: Where Food Enthusiasts Unite and Inspire!"</p>
                </div>
            </div>


            <div className="swipers">
                <SquarSwiper title={"FESTIV "} titlespan={"RECIPES"} />

            </div>


            <div className="swipers">
                <SquarSwiper title={"FESTIV "} titlespan={"RECIPES"} />

            </div>


            <div className="swipers">
                <SquarSwiper title={"FESTIV "} titlespan={"RECIPES"} />

            </div>


            <div className="swipers">
                <SquarSwiper title={"FESTIV "} titlespan={"RECIPES"} />

            </div>
        </>
    )
}

export default Community
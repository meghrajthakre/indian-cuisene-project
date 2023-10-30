import React from 'react'
import Vegetable from './Images/plate with vegetables.png'
import MapImg from './Images/Map.svg'
const Maps = () => {
    return (
        <>

            <div className="title">
                <img src={Vegetable} alt="" />
                <h2><span>CHOOSE RECIPES FROM </span>  YOUR FAVORITE REGION </h2>

            </div>

            <div className="map-container">
                <img src={MapImg} alt="" />
                <button className='btn north'>NORTH INDIAN</button>
                <button className='btn west'>WEST INDIA </button>
                <button className='btn east'>EAST INDIA </button>
                <button className='btn south'>SOUTH INDIA </button>
            </div>
        </>
    )
}

export default Maps
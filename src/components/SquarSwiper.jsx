import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from './Sliders'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import heartImg from './Images/Group 84.svg'


import { FreeMode, Navigation } from 'swiper/modules';

const SquarSwiper = ({ title, titlespan }) => {
    return (
        <div>
            <div className="title">
                <h2> <span>{title}</span>{titlespan}</h2>

            </div>

            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    navigation={true}

                    modules={[FreeMode, Navigation]}
                    className="mySwiper1"
                >
                    {Slider.map((item, i) => {
                        return <>

                            <SwiperSlide className='squar-slider' key={i}>

                                <img src={item.image} alt="" />
                                <h1 className='swiper-text-squar'> {item.name}</h1>
                                <p className='subtitle'>{item.subtitle}</p>

                            </SwiperSlide>
                        </>
                    })}
                </Swiper>
            </>


        </div>
    )
}

export default SquarSwiper
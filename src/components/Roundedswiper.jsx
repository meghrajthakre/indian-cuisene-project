import React, { useRef, useState } from 'react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Vegetable from './Images/plate with vegetables.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules

const Roundedswiper = ({ Slider, title, titlespan }) => {

    const [swiper, setSwiper] = useState(null);
    const totalSlides = 9; // Replace this with the total number of slides you have

    const handleSwiperInit = (swiperInstance) => {
        setSwiper(swiperInstance);
        // Calculate the initial slide to ensure the active slide is in the middle
        const initialSlide = Math.floor(totalSlides / 2);
        swiperInstance.slideTo(initialSlide, 0, false);
    };




    return (

        <>
            <div className="title">
                <img src={Vegetable} alt="" />
                <h2>{title} <span>{titlespan}</span></h2>

            </div>

            <Swiper
                onSwiper={handleSwiperInit}
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"


                style={{
                    "--swiper-pagination-color": "#FF7A5A",
                    "--swiper-pagination-bullet-inactive-color": "#FF7A5A",
                    "--swiper-pagination-bullet-inactive-opacity": "0.5",
                    "--swiper-pagination-bullet-size": "22px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px"
                }}>

                {Slider.map((item, i) => {
                    return <>

                        <SwiperSlide className='firstSilder' key={i}>
                            <img src={item.image} alt="" />
                            <h1 className='swiper-text'> {item.name}</h1>

                        </SwiperSlide>
                    </>
                })}
            </Swiper>


        </>
    )
}

export default Roundedswiper
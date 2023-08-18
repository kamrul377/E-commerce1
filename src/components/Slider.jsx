import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import '../App.css'

// import required modules
import { Pagination } from "swiper";


const Slider = ({ images }) => {
    // const [images, setimages] = useState(props.images) 
    // console.log(images[0].img)
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                // pagination={{
                //     clickable: true,
                // }}
                // modules={[Pagination]}
                // className="mySwiper"
            >
                {/* <SwiperSlide>Slide 1</SwiperSlide> */}

                {images.map((image, index) => {
                    return (

                        <SwiperSlide key={index}> <img className="hover:scale-105 duration-100" key={index} src={image.url} alt={`Image ${index}`} /></SwiperSlide>
                    );
                })}


            </Swiper>
        </>
    )
}

export default Slider
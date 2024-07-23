import React, { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Arrow from "../Arrow/Arrow.tsx";

const Slider = forwardRef(({ images }, ref) => {
    return (
        <>
            <Swiper
                onSwiper={(swiper) => {
                    if (ref) {
                        ref.current = swiper;
                    }
                }}
                slidesPerView={1}
                spaceBetween={0}
                draggable={false}
                allowTouchMove={false}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
                {images.map((image, i) => (
                    <SwiperSlide key={i}><img src={image} alt="Alt" style={{ width: "100%" }} /><div className={'arrow'}>
                        <Arrow />
                    </div></SwiperSlide>
                ))}
            </Swiper>
        </>
    );
});

export default Slider;

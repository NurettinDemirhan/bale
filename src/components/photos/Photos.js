import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "./Photos.css";
import { EffectCoverflow,Navigation,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import baleImage from "../header/ecembale1.jpg";
export default function Photos() {

    return (
        <div className='Photos'>
            <div className='Photo-inner'>
                <h1>Fotoğraf Galerimiz</h1>
                {/* <Swiper
                className='Photo-swiper'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide className='swiper-el'><img className='swiper-el-ph' alt='bale' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nAsUJPFGfWfZfn99l7alvFVuzulnCtWSEDjyEPSgMA&s'/></SwiperSlide>
                    <SwiperSlide className='swiper-el'><img className='swiper-el-ph' alt='bale' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nAsUJPFGfWfZfn99l7alvFVuzulnCtWSEDjyEPSgMA&s'/></SwiperSlide>
                    <SwiperSlide className='swiper-el'><img className='swiper-el-ph' alt='bale' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nAsUJPFGfWfZfn99l7alvFVuzulnCtWSEDjyEPSgMA&s'/></SwiperSlide>
                    <SwiperSlide className='swiper-el'><img className='swiper-el-ph' alt='bale' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nAsUJPFGfWfZfn99l7alvFVuzulnCtWSEDjyEPSgMA&s'/></SwiperSlide>
                    ...
                </Swiper> */}
                <Swiper
                            freeMode={true}
                            modules={[EffectCoverflow,Navigation,Pagination]}
                            navigation={true}
                            effect="coverflow"
                            className="featured-sets-slider"
                            slidesPerView={2}
                            pagination={true}
                            breakpoints={{
                                900:{
                                    slidesPerView:3
                                }
                                
                            }}
                        >
        
                            <SwiperSlide className="fakeSlide"></SwiperSlide>
                            <SwiperSlide className="oneSlide"><img alt="project-example" style={{width:"100%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nAsUJPFGfWfZfn99l7alvFVuzulnCtWSEDjyEPSgMA&s'/></SwiperSlide>
                            <SwiperSlide className="oneSlide"><img alt="project-example" style={{width:"100%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nAsUJPFGfWfZfn99l7alvFVuzulnCtWSEDjyEPSgMA&s'/></SwiperSlide>
                            <SwiperSlide className="oneSlide"><img alt="project-example" style={{width:"100%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nAsUJPFGfWfZfn99l7alvFVuzulnCtWSEDjyEPSgMA&s'/></SwiperSlide>
                            <SwiperSlide className="oneSlide"><img alt="project-example" style={{width:"100%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nAsUJPFGfWfZfn99l7alvFVuzulnCtWSEDjyEPSgMA&s'/></SwiperSlide>
                            <SwiperSlide className="oneSlide"><img alt="project-example" style={{width:"100%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nAsUJPFGfWfZfn99l7alvFVuzulnCtWSEDjyEPSgMA&s'/></SwiperSlide>
                            <SwiperSlide className="oneSlide"><img alt="project-example" style={{width:"100%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nAsUJPFGfWfZfn99l7alvFVuzulnCtWSEDjyEPSgMA&s'/></SwiperSlide>
                            <SwiperSlide className="oneSlide"><img alt="project-example" style={{width:"100%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nAsUJPFGfWfZfn99l7alvFVuzulnCtWSEDjyEPSgMA&s'/></SwiperSlide>
                            <SwiperSlide className="fakeSlide"></SwiperSlide>
                        </Swiper>
            </div>
        </div>
    )
}
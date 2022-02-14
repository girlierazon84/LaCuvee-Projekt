import React from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import One from '../../utils/images/1.jpg'
import Two from '../../utils/images/2.jpg'
import Three from '../../utils/images/3.jpg'
import Four from '../../utils/images/4.jpg'
import Five from '../../utils/images/5.jpg'
import Six from '../../utils/images/6.jpg'
import Seven from '../../utils/images/7.jpg'
import Eight from '../../utils/images/8.jpg'
import Nine from '../../utils/images/9.jpg'

export default function ImageSlideShow() {
    return (
        <ImageWrapper>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <img src={ One } alt='La_Cuvée images'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ Two } alt='La_Cuvée images'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ Three } alt='La_Cuvée images'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ Four } alt='La_Cuvée images'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ Five } alt='La_Cuvée images'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ Six } alt='La_Cuvée images'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ Seven } alt='La_Cuvée images'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ Eight } alt='La_Cuvée images'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ Nine }  alt='La_Cuvée images'/>
                </SwiperSlide>
            </Swiper>
        </ImageWrapper>
    );
}

const ImageWrapper = styled.section`
  position: relative;
  height: 100%;
  margin: 1px 0;
  padding: 0;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-position: center;
    background-size: inherit;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1100px) {
    position: relative;
  }
`

import React from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

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
                    <Zoom>
                        <img src={ One } alt='La_Cuvée images' width='100%'/>
                    </Zoom>
                </SwiperSlide>
                <SwiperSlide>
                    <Zoom>
                        <img src={ Two } alt='La_Cuvée images' width='100%'/>
                    </Zoom>
                </SwiperSlide>
                <SwiperSlide>
                    <Zoom>
                        <img src={ Three } alt='La_Cuvée images' width='100%'/>
                    </Zoom>
                </SwiperSlide>
                <SwiperSlide>
                    <Zoom>
                        <img src={ Four } alt='La_Cuvée images' width='100%'/>
                    </Zoom>
                </SwiperSlide>
                <SwiperSlide>
                    <Zoom>
                        <img src={ Five } alt='La_Cuvée images' width='100%'/>
                    </Zoom>
                </SwiperSlide>
                <SwiperSlide>
                    <Zoom>
                        <img src={ Six } alt='La_Cuvée images' width='100%'/>
                    </Zoom>
                </SwiperSlide>
                <SwiperSlide>
                    <Zoom>
                        <img src={ Seven } alt='La_Cuvée images' width='100%'/>
                    </Zoom>
                </SwiperSlide>
                <SwiperSlide>
                    <Zoom>
                        <img src={ Eight } alt='La_Cuvée images' width='100%'/>
                    </Zoom>
                </SwiperSlide>
                <SwiperSlide>
                    <Zoom>
                        <img src={ Nine }  alt='La_Cuvée images' width='100%'/>
                    </Zoom>
                </SwiperSlide>
            </Swiper>
        </ImageWrapper>
    );
}

const ImageWrapper = styled.section`
  margin: 1px 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--fourthly-color);
  font-family: 'Oleo Script', sans-serif;
  position: relative;
  width: 100%;

  .swiper {
    width: 70%;
    height: 50%;
    padding: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: inherit;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 50%;
    border: 1px solid var(--secondary-color);
  }

  @media (max-width: 1100px) {
    position: relative;

    .swiper {
      width: 100%;
      height: 100%;
    }
    
    .swiper-slide img {
      height: 100%;
    }
  }
`

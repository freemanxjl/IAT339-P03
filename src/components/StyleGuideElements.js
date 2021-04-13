import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import { SectionOverlay } from './InteractiveElements';

SwiperCore.use([Pagination, Navigation]);

const PalleteWrapper = styled.div`
    display: inline-block;
    margin: 0 1rem 0 1rem;
`;

const InnerColor = styled.div`
    width: 6rem;
    height: 6rem;
    margin-bottom: 0.75rem;
    background-color: ${props => props.color};
`;

function ColorPallete({color, name}) {
    return (
        <PalleteWrapper>
            <InnerColor color={color}/>
            <p>{name}<br/><em>{color}</em></p>
        </PalleteWrapper>
    )
}

export function StyleGuideSwiper(){
    return(
        <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination
        loop
        navigation
        style={{margin: '2rem 0 2rem 0'}}
        >
            <SwiperSlide>
                <Image fluid src={`${process.env.PUBLIC_URL}/project-2/tamooki-6.png`}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image fluid src={`${process.env.PUBLIC_URL}/project-2/tamooki-12.png`}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image fluid src={`${process.env.PUBLIC_URL}/project-2/tamooki-2.png`}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image fluid src={`${process.env.PUBLIC_URL}/project-2/tamooki-3.png`}/>
            </SwiperSlide>
        </Swiper>
    );
}

export function SamplePortfolioContent(){
    return(
        <SectionOverlay>
            <h2>Introduction</h2>
            <p>The Tamooki Style Guide is an individual school project to create a style guide for a hypothetical company. The company I chose was a local cookie shop that specializes in popular flavours and ingredients like green tea, red velvet, and mochi.</p>
            <p>The main goals of the project is to:</p>
            <ul>
                <li>Establish an understanding of style guides and design systems</li>
                <li>Practice usage of proper HTML elements</li>
                <li>Practice and create responsive designs</li>
            </ul>
        </SectionOverlay>
    )
}

export default ColorPallete;

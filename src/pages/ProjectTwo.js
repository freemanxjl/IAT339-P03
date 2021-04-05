import React from 'react';
import { Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import { PortfolioHeader, NavLink, PortfolioContainer, TextShadow } from '../components/InteractiveElements';
import { Helmet } from 'react-helmet';

SwiperCore.use([Pagination, Navigation]);

function ProjectTwo() {
    return (
        <PortfolioContainer>
            <Helmet>
                <title>Tamooki | Freeman Liu</title>
            </Helmet>
            <NavLink sm to="/">Back to porfolio</NavLink>

            <TextShadow>
                <PortfolioHeader>Tamooki</PortfolioHeader>
                <h2>Role: Designer, Developer</h2>
                <h3>Skills: HTML5, CSS, Adobe Illustrator</h3>
                <h4>January 2020</h4>
            </TextShadow>

            <Image fluid src={`${process.env.PUBLIC_URL}/tamooki-1.png`} style={{margin: "1rem 0 2rem 0"}}/>
            <p>Tamooki Style Guide
The Tamooki Style Guide is an individual school project to create a style guide for a hypothetical company. The company I chose was a local cookie shop that specializes in popular flavours and ingredients like green tea, red velvet, and mochi. The goal of the project was to establish an understanding of style guides, design systems, and web development.</p>
            <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination
            loop
            navigation
            style={{margin: '2rem 0 2rem 0'}}
            >
                <SwiperSlide>
                    <Image fluid src={`${process.env.PUBLIC_URL}/tamooki-6.png`}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image fluid src={`${process.env.PUBLIC_URL}/tamooki-2.png`}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image fluid src={`${process.env.PUBLIC_URL}/tamooki-3.png`}/>
                </SwiperSlide>
            </Swiper>

            <p>For this project, we adopted the Atomic Design methodology for how our elements and components are built. Starting from the smallest elements - the “Atoms”, elements like links, paragraphs, images, and buttons were designed first. From there, I combined the atoms together to build the “Molecules” such as the navbar, product item, checkout cart, and payment form. These components were then used to create “Template” pages to establish how the overall site would look and feel. </p>
            <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination
            loop
            navigation
            style={{margin: '2rem 0 2rem 0'}}
            >
                <SwiperSlide>
                    <Image fluid src={`${process.env.PUBLIC_URL}/tamooki-5.png`}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image fluid src={`${process.env.PUBLIC_URL}/tamooki-4.png`}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image fluid src={`${process.env.PUBLIC_URL}/tamooki-7.png`}/>
                </SwiperSlide>
            </Swiper>

            <p>Prior to building the elements, I explored a bit with the branding components and the overall art direction. This included choosing the right typeface and colors that I wanted to represent my brand. My main inspiration for the site was from the game Animal Crossing. The vibrant, soft colors and relaxing tone of Animal Crossing was how I imagined the site to look like. From there, I explored similar websites and themes to help develop the right color pallet and choice of typeface. As well, I created several resources like potential products, a logo, and decorative elements to help establish my brand components and art direction further.</p>
            <p>Overall, I used this project as an opportunity to experiment with my usage of colors and try new ways to layout a site that I haven’t tried before. As well, I’ve always had an idea to open a cookie shop so this project was a way to flesh out what I wanted to create potentially in the future.</p>
        </PortfolioContainer>
    )
};

export default ProjectTwo

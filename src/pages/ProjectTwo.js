import React from 'react';
import { Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import { PortfolioHeader, NavLink, PortfolioContainer, TextShadow, SectionOverlay } from '../components/InteractiveElements';
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

            <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination
            loop
            navigation
            style={{margin: '2rem 0 2rem 0'}}
            >
                <SwiperSlide>
                    <Image fluid src={`${process.env.PUBLIC_URL}/project-2/tamooki-8.png`}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image fluid src={`${process.env.PUBLIC_URL}/project-2/tamooki-9.png`}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image fluid src={`${process.env.PUBLIC_URL}/project-2/tamooki-10.png`}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image fluid src={`${process.env.PUBLIC_URL}/project-2/tamooki-11.png`}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image fluid src={`${process.env.PUBLIC_URL}/project-2/tamooki-1.png`}/>
                </SwiperSlide>
            </Swiper>

            <SectionOverlay>
                <h2>Research</h2>
                {/* <p>For this project, we adopted the Atomic Design methodology for how our elements and components are built. Starting from the smallest elements - the “Atoms”, elements like links, paragraphs, images, and buttons were designed first. From there, I combined the atoms together to build the “Molecules” such as the navbar, product item, checkout cart, and payment form. These components were then used to create “Template” pages to establish how the overall site would look and feel.</p> */}
                <p>Prior to building the elements, I explored a bit with the branding components and the overall art direction. As well, this time was spent to elaborate on your chosen company.</p>
                <p>Some tasks included in the research were:</p>
                <ul>
                    <li>Creating several color palettes</li>
                    <li>Designing logos and decorative icons using Adobe Illustrator</li>
                    <li>Choosing the right typefaces</li>
                    <li>Figuring out the potential customers</li>
                    <li>Figuring out why this company is unique and enticing</li>
                </ul>
                <p>For this project, I wanted vibrant and soft colors with a relaxing tone. The colors I chose were bright and pastel colors such as turquoise, yellow, and white. For the typeface, I chose fonts that were thick and round. Overall, I wanted a colourful and playful branding and aesthetics that would entice customers.</p>
            </SectionOverlay>

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

            <SectionOverlay>
                <h2>Style Guide</h2>
                <p>The Style Guide was made up of two different sections, Interactive Elements and Combined Elements. The Interactive Elements section was for designing and styling basic elements while the Combined Elements section is for components made up of elements from the first section.</p>
                <p>Some components designed included:</p>
                <ul>
                    <li>Navigational elements - Links &amp; Buttons</li>
                    <li>Form inputs</li>
                    <li>Headings and paragraphs</li>
                    <li>Navbar</li>
                    <li>Product listings</li>
                    <li>Payment &amp; Checkout forms</li>
                </ul>
                <p>Additionally, a part of the Style Guide included creating template pages such as:</p>
                <ul>
                    <li>A Product Listing page</li>
                    <li>A Checkout page</li>
                </ul>
            </SectionOverlay>

            <SectionOverlay>
                <h2>Reflection</h2>
                <p>Overall, this project was a positive experience for me to experiment with my usage of colors and try new ways to layout a site that I haven’t tried before. I also learned how to create thoughtful design systems by designing the style guide As well, I was able to push myself and express myself creatively with the graphics I created for my site.</p>
                <p>However, if I could create this project again, I would experiment further as I felt I was still within my comfort zone while working on this project. I often use bright and light colors, I would like to try to use some darker and high contrast colors.</p>
            </SectionOverlay>

        </PortfolioContainer>
    )
};

export default ProjectTwo

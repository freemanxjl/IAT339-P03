import React from 'react';
import { Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import { NavLink, PortfolioContainer, PortfolioHeader, SectionOverlay, TextShadow } from '../components/InteractiveElements';
import { Helmet } from 'react-helmet';

SwiperCore.use([Pagination, Navigation]);

function ProjectOne() {
    return (
        <PortfolioContainer>
            <Helmet>
                <title>Grandis Library | Freeman Liu</title>
            </Helmet>
            <NavLink sm to="/">Back to porfolio</NavLink>
            <TextShadow>
                <PortfolioHeader>Grandis Library</PortfolioHeader>
                <h2>Role: Designer + Developer</h2>
                <h3>Skills: JavaScript, HTML5, CSS, SquareSpace</h3>
                <h4><em>April 2020 - Present</em></h4>
            </TextShadow>
            
            <SectionOverlay>
                <h2>Introduction</h2>
                <p>Grandis Library is a website to unify information to create useful resources for new and returning players for the game MapleStory. Information in MapleStory is poorly documented and no official details are ever released. Users who were not present when a feature is introduced will not understand it or know it exists.</p>
                <p>The main purpose of the project is to:</p>
                <ul>
                    <li>Create a useful resource</li>
                    <li>Practice and develop web dev skills</li>
                    <li>Practice design knowledge and writing and communication skills</li>
                </ul>
            </SectionOverlay>
            <SectionOverlay>
                <h2>SquareSpace Website</h2>
                <p>The original site was created using SquareSpace before it was completely recreated using React JS. The main challenges and goals of the site were to have:</p>
                <ul>
                    <li>Easy navigation for a large amount of content</li>
                    <li>Straightforward and up-to-date information</li>
                    <li>A clean and consise structure</li>
                </ul>
                <p>To address these challenges and goals, the site was built to have:</p>
                <ul>
                    <li>Four main navigational sections, "Content", "Classes", "Events", and "Resources"</li>
                    <li>A reliance on images, icons, and text to convey information</li>
                    <li>Complex content summarized into simpler explanations</li>
                </ul>
                <p>Overall, the SquareSpace site accomplishes all these however, the layout could be improved to display the information more effectively and compact. As well, the SquareSpace site lacks modularity as the layout is dictated by the framework. With the newly recreated site, React JS is used to improve on these problems.</p>
            </SectionOverlay>
            <SectionOverlay>
                <h2>React JS Website</h2>
                <p>To scale my website and gain better control of the layout and design, the site was rebuilt from scratch using React JS and Next.js</p>
                <p>The main goals of the site is to:</p>
                <ul>
                    <li>Preserve and expand on design and layout of site</li>
                    <li>Improve user experience and add new features</li>
                    <li>Practice and learn JavaScript and JS libraries</li>
                </ul>
                <p>With the usage of JavaScript and React JS, many new features and quality of life changes could be made, such as:</p>
                <ul>
                    <li>Usage of API to fetch data</li>
                    <li>Togglable dark and light modes</li>
                    <li>Lazyloaded and optimized content</li>
                    <li>Usage of frameworks like Bootstrap and Material Design</li>
                </ul>
            </SectionOverlay>
            <SectionOverlay>
                <h2>Reflection</h2>
                <p>Overall, the project is successful in satisfying the main purposes for starting. I was able to gain confidence in my skills and as well learn and practice JavaScript.</p>
                <p>The site has also received a huge amount of praise and positivity from the community for its practicality. As well, the site garners an average of 20k viewers monthly and has quickly become a staple to many users</p>
            </SectionOverlay>
            <Image fluid src={`${process.env.PUBLIC_URL}/grandis-2.png`} style={{margin: '1rem 0 2rem 0'}}/>
            <Image fluid src={`${process.env.PUBLIC_URL}/grandis-1.png`} style={{margin: '2rem 0 2rem 0'}}/>
            
            <Image fluid src={`${process.env.PUBLIC_URL}/grandis-7.png`} style={{margin: '2rem 0 2rem 0'}}/>
            <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination
            loop
            navigation
            style={{margin: '2rem 0 2rem 0'}}
            >
                <SwiperSlide>
                    <Image fluid src={`${process.env.PUBLIC_URL}/grandis-4.png`}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image fluid src={`${process.env.PUBLIC_URL}/grandis-5.png`}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image fluid src={`${process.env.PUBLIC_URL}/grandis-6.png`}/>
                </SwiperSlide>
            </Swiper>

        </PortfolioContainer>
    )
};

export default ProjectOne

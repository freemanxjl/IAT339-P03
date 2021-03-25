import React from 'react';
import { Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Pagination, Navigation]);

function ProjectOne() {
    return (
        <div>
            <h1>Grandis Library</h1>
            <h2>Role: Designer + Developer</h2>
            <Image fluid src={`${process.env.PUBLIC_URL}/grandis-2.png`} style={{margin: '1rem 0 2rem 0'}}/>
            <p>Grandis Library is a website I started to unify information together to create useful resources for new and returning players for the game MapleStory. Information in MapleStory is poorly documented and no official details are ever released. Users who were not present when a feature is introduced will not understand it or even know it exists.</p>
            <p>The main purpose of the project aside from creating a useful resource was to practice and develop new skills in web development. As well, the project was used to practice my design knowledge and hone my writing and communication skills.</p>
            <p>When I first started this project, I utilized Squarespace to create a basic website as my knowledge in web development was quite small. I only knew HTML and CSS but lacked JavaScript.</p>
            <Image fluid src={`${process.env.PUBLIC_URL}/grandis-1.png`} style={{margin: '2rem 0 2rem 0'}}/>
            <p>For the overall layout, I broke the content down into 4 different sections, “Content”, “Classes”, “Events”, and “Resources”. These sections were chosen such that it is simple and easy for the user to navigate through the dense amount of content in the game. These sections are then broken down even further into categories.</p>
            <Image fluid src={`${process.env.PUBLIC_URL}/grandis-7.png`} style={{margin: '2rem 0 2rem 0'}}/>
            <p>The site received a huge amount of praise and positivity from the community. There was also feedback and numerous people who wanted to help contribute to the project. I eventually incorporated this feedback and opened a contact form for users to provide any feedback or useful information. Some changes made was to the color of the background and the content itself</p>
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

            <p>After completing the initial site, I took a break to learn JavaScript. Initially, I had no plans to remake my entire site but the opportunity seemed right to practice my new found knowledge.
Some other reasons I decided to remake my website was to provide more user requested features and to gain more freedom in designing the website. Some new features added was a night mode toggle, up to date data from an API, and content lazy loading to reduce network usage. The main goal however was to keep the same overall design but refine certain parts for a better experience.</p>
        </div>
    )
};

export default ProjectOne

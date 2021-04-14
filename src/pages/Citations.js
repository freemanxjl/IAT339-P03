import React from 'react';
import { Helmet } from 'react-helmet';
import { ContentOverlay, NavLink } from '../components/InteractiveElements';

function NotFound() {
    return (
        <div>
            <Helmet>
                <title>Citations | Freeman Liu</title>
            </Helmet>
            <NavLink sm to="/style-guide" style={{marginBottom: '1rem'}}>Back to Style Guide</NavLink>
            <ContentOverlay>
            <h1>Citations</h1>
                <ul>
                    <li>Gatti, Hector. Designer. 2017. <strong>Archivo Black [Font]</strong>. Retrieved from <a href="https://fonts.adobe.com/fonts/archivo-black" target="_blank" rel="noopener noreferrer">https://fonts.adobe.com/fonts/archivo-black</a></li>
                    <li>Liu, Freeman. Designer. 2019. <strong>Trick Asunder [Font]</strong>. Created by me</li>
                    <li>Liu, Freeman. Designer. 2017. <strong>favicon [Image]</strong>. Created by me</li>
                    <li>Liu, Freeman. Designer. 2019. <strong>background [Image]</strong>. Created by me</li>
                    <li>Liu, Freeman. Designer. 2020. <strong>background overlay [Image]</strong>. Created by me</li>
                    <li>Material Design. Designer. 2021. <strong>menu-white-18dp [Image]</strong>. Retrieved from <a href="https://material.io/resources/icons/" target="_blank" rel="noopener noreferrer">https://material.io/resources/icons/</a></li>
                </ul>
            </ContentOverlay>
        </div>
    )
};

export default NotFound

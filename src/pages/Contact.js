import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import ContactForm, { ContactContainer } from '../components/CombinedElements';
import { ContentOverlay, BackgroundOverlay } from '../components/InteractiveElements';

const StarOverlayOne = styled(Image)`
    position: absolute;
    top: 70%;
    left: 25%;
    scale: 125%;
    transform: rotate(100deg);
    z-index: -1;
    opacity: 0.2;
`;

const StarOverlayTwo = styled(Image)`
    position: absolute;
    bottom: 70%;
    right: 25%;
    scale: 50%;
    transform: rotate(20deg);
    z-index: -1;
    opacity: 0.2;
`;

const StarOverlayThree = styled(Image)`
    position: absolute;
    top: 65%;
    right: 20%;
    scale: 80%;
    transform: rotate(35deg);
    z-index: -1;
    opacity: 0.2;
`;

function Contact() {
    return (
        <div>
            <Helmet>
                <title>Contact | Freeman Liu</title>
            </Helmet>
            <ContactContainer/>
            <BackgroundOverlay src={`${process.env.PUBLIC_URL}/swordofstars.png`}/>
            <StarOverlayOne src={`${process.env.PUBLIC_URL}/stars.png`}/>
            <StarOverlayTwo src={`${process.env.PUBLIC_URL}/stars.png`}/>
            <StarOverlayThree src={`${process.env.PUBLIC_URL}/stars.png`}/>
        </div>

    )
}

export default Contact;

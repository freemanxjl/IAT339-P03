import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { ContentOverlay, BackgroundOverlay, NavLink } from '../components/InteractiveElements';

const StarOverlayOne = styled(Image)`
    position: absolute;
    top: 70%;
    left: 25%;
    scale: 125%;
    transform: rotate(100deg);
    z-index: -1;
`;

const StarOverlayTwo = styled(Image)`
    position: absolute;
    bottom: 70%;
    right: 25%;
    scale: 50%;
    transform: rotate(20deg);
    z-index: -1;
`;

const StarOverlayThree = styled(Image)`
    position: absolute;
    top: 65%;
    right: 20%;
    scale: 80%;
    transform: rotate(35deg);
    z-index: -1;
`;

function About() {
    return (
        <div>
            <Row>
                <Col md={7}>
                    <ContentOverlay>
                        <h1>Hello there, I'm Freeman</h1>
                        <p>Nice to meet you! I am an aspiring web developer currently studying in Computing Science and Interactive Arts + Technology at Simon Fraser University. I am passionate about designing with intention and usability in mind. Simplicity is the name and functionality is the game. Human-centered design is the core of my philosophy and an important aspect to every project I have worked on.</p>
                        <NavLink lg to="/contact">Let's chat!</NavLink>
                    </ContentOverlay>
                </Col>
                <Col md={4}>
                </Col>
            </Row>
            <BackgroundOverlay src={`${process.env.PUBLIC_URL}/swordofstars.png`}/>
            <StarOverlayOne src={`${process.env.PUBLIC_URL}/stars.png`}/>
            <StarOverlayTwo src={`${process.env.PUBLIC_URL}/stars.png`}/>
            <StarOverlayThree src={`${process.env.PUBLIC_URL}/stars.png`}/>
        </div>
    )
}

export default About;

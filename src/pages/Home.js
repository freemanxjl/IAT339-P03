import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { ContentOverlay, BackgroundOverlay } from '../components/InteractiveElements';
import Portfolio from '../components/Portfolio';

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

function Home() {
    return (
        <div>
            <Row>
                <Col md={6}>
                    <ContentOverlay>
                        <h1>Hey! I'm Freeman</h1>
                        <h2>I am an aspiring web developer passionate in creating engaging, simple, and creative designs.</h2>
                    </ContentOverlay>
                </Col>
                <Col md={6}>
                    <Portfolio/>
                </Col>
            </Row>
            <BackgroundOverlay src={`${process.env.PUBLIC_URL}/swordofstars.png`}/>
            <StarOverlayOne src={`${process.env.PUBLIC_URL}/stars.png`}/>
            <StarOverlayTwo src={`${process.env.PUBLIC_URL}/stars.png`}/>
            <StarOverlayThree src={`${process.env.PUBLIC_URL}/stars.png`}/>
        </div>
    )
};

export default Home;

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { TextShadow } from './InteractiveElements';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
    margin: 20rem 0 0 0;
    padding-top: 8rem;
    padding-left: 2.5rem;
    background: linear-gradient(to top, #000000 75%, transparent);
`;

const FooterText = styled.h6`
    margin-top: 1rem;
    font-size: 1.5rem;
`;

const RouteLink = styled(Link)`
    display: block;
    width: fit-content;
`;

const AnchorLink = styled.a`
    display: block;
    width: fit-content;
`;

function Footer() {
    return (
        <FooterContainer>
            <Container>
                <Row>
                    <Col md lg={4}>
                        <TextShadow>
                            <FooterText>[Freeman Liu 2021]</FooterText>
                            <RouteLink to="/style-guide">Style Guide</RouteLink>
                            <RouteLink to="/citations">Citations</RouteLink>
                            <AnchorLink href="https://github.com/freemanxjl/IAT339-P03" target="_blank" rel="noreferrer noopener">GitHub Repository</AnchorLink>
                            <AnchorLink href="https://cargocollective.com/freemanliu" target="_blank" rel="noreferrer noopener">Original Portfolio</AnchorLink>
                        </TextShadow>
                    </Col>
                </Row>
            </Container>
        </FooterContainer>
    );
}

export default Footer;
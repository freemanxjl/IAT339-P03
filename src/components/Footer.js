import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { TextShadow } from './InteractiveElements';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
    margin: 31.5rem 0 0 0;
    padding-top: 5rem;
    background: linear-gradient(to top, #000000 75%, transparent);
`;

const FooterCol = styled(Col)`
    margin-bottom: 1.5rem;
`;

const FooterText = styled.h6`
    margin-top: 1rem;
    font-size: 1.5rem;
`;

function Footer() {
    return (
        <FooterContainer>
            <Container>
                <Row>
                    <FooterCol md lg={4}>
                        <TextShadow>
                            <FooterText>[Freeman Liu 2021]</FooterText>
                            <Link style={{display: 'block', width: 'fit-content'}} to="/style-guide">Style Guide</Link>
                            <Link style={{display: 'block', width: 'fit-content'}} to="/citations">Citations</Link>
                            <a style={{display: 'block', width: 'fit-content'}} href="https://github.com/freemanxjl/IAT339-P03" target="_blank" rel="noreferrer noopener">GitHub Repository</a>
                        </TextShadow>
                    </FooterCol>
                </Row>
            </Container>
        </FooterContainer>
    );
}

export default Footer;
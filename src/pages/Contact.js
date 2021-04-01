import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ContactForm from '../components/CombinedElements';
import { ContentOverlay, BackgroundOverlay } from '../components/InteractiveElements';

function Contact() {
    return (
        <div>
            <Helmet>
                <title>Contact | Freeman Liu</title>
            </Helmet>
            <ContentOverlay>
                <Row>
                    <Col sm={6}>
                        <h1>I'd love to here from you, send me a message</h1>
                        <p>To reach out, fill out this form or send me an email at <a href="mailto: freemanxjl@gmail.com" target="_blank" rel="noopener noreferrer">freemanxjl@gmail.com</a></p>
                    </Col>
                    <Col sm={6}>
                        <ContactForm/>
                    </Col>
                </Row>
            </ContentOverlay>
            <BackgroundOverlay src={`${process.env.PUBLIC_URL}/swordofstars.png`}/>
        </div>

    )
}

export default Contact;

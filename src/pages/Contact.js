import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { SubmitButton } from '../components/InteractiveElements';

function Contact() {
    return (
        <div>
            <Row>
                <Col>
                    <h1>I'd love to here from you, send me a message</h1>
                    <p>To reach out, fill out this form or send me an email at <a href="mailto: freemanxjl@gmail.com" target="_blank" rel="noopener noreferrer">freemanxjl@gmail.com</a></p>
                </Col>
                <Col>
                    <div className="contact-form">
                        <form>
                            <div className="form-container">
                                <span className="form-wrapper">
                                    <label className="form-label" htmlFor="contact-first-name">First name*</label>
                                    <input className="form-input" type="text" id="contact-first-name"/>
                                </span>
                                <span className="form-wrapper">
                                    <label className="form-label" htmlFor="contact-last-name">Last name*</label>
                                    <input className="form-input" type="text" id="contact-last-name"/>
                                </span>
                                <label className="form-label" htmlFor="contact-email">Email*</label>
                                <input className="form-input" type="text" id="contact-email"/>
                                <label className="form-label" htmlFor="contact-subject">Subject</label>
                                <input className="form-input" type="text" id="contact-subject"/>
                                <label className="form-label" htmlFor="contact-message">Message*</label>
                                <textarea className="form-input form-textarea" id="contact-message"/>
                            </div>
                            <SubmitButton type="submit" value="Submit"/>
                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Contact;

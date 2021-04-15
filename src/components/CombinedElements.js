import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { FormTextAreaInput, FormTextInput, SubmitButton } from './InteractiveElements';

//Container for the clickable portfolio image
const GridWrapper = styled.div`
    max-width: 100%;
    width: fit-content;
    height: auto;
    position: relative;
    margin: 1rem;
    z-index: 1;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.5),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

//Gray overlay over portfolio image that disappears when hovered over
const GridOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #131212;
    opacity: 0.5;
    z-index: 2;
`;

//Container for the title within the portfolio image, disappears when hovered over
const GridText = styled.div`
    color: #ffffff;
    position: absolute;
    top: 45%;
    height: fit-content;
    width: 100%;
    z-index: 3;
    
    @media( max-width: 350px){
        top: 35%;
    }
`;

//Actual text itself within the portfolio image
const GridTitle = styled.h3`
    margin-top: 0;
    padding-top: 0;
    margin-bottom: 0;
    font-size: 3.5rem;
    font-weight: 500;
    text-align: center;

    @media( max-width: 991px){
        font-size: 2.5rem;
    }
`;

//Component that utilizes all the elements above to create a single portfolio image
export function ImageLink({imageName, imageAlt, text, link}){
    return(
        <GridWrapper className="grid-wrapper">
        <Link to={link}>
            <Image fluid src={`${process.env.PUBLIC_URL}/${imageName}.png`} alt={imageAlt}/>
            <GridOverlay className="grid-overlay"/>
            <GridText className="grid-text">
                <GridTitle>{text}</GridTitle>
            </GridText>
        </Link>
      </GridWrapper>
    )
}

//Container for forms
const FormContainer = styled.div`
    padding: 1rem 0 2rem 0;
`;

//A wrapper to group similar elements in a form
const FormWrapper = styled.span`
    display: inline-block;
    margin: 0.25rem 1rem 0.25rem 0;

    @media( max-width: 530px){
        width: 100%;
    }
`;

function ContactForm() {
    return (
        <form>
            <FormContainer>
                <FormWrapper>
                    <FormTextInput formId="contact-first-name" label="First name*"/>
                </FormWrapper>
                <FormWrapper>
                    <FormTextInput formId="contact-last-name" label="Last name*"/>
                </FormWrapper>
                <FormTextInput formId="contact-email" label="Email*"/>
                <FormTextInput formId="contact-subject" label="Subject"/>
                <FormTextAreaInput formId="contact-message" label="Message*"/>
            </FormContainer>
            <SubmitButton type="submit" value="Submit"/>
        </form>
    )
}

export default ContactForm;

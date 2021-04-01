import React from 'react';
import styled from 'styled-components';
import { FormTextAreaInput, FormTextInput, SubmitButton } from './InteractiveElements';

const FormContainer = styled.div`
    padding: 1rem 0 2rem 0;
`;

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

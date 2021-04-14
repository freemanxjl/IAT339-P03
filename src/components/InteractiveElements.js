import { Image } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import '../css/grid-image.scss';

function TextLink({link, siteLink, children}) {
    return link ? <a href={link} target="_blank" rel="noopener noreferrer">{children}</a> : <Link to={siteLink}>{children}</Link>
}

export const NavLink = styled(Link)`
    color: #ffffff;
    background-color: #3a7a73;
    border: none;
    margin: 0.25rem 0.5rem 0.25rem 0;
    padding: 0.5rem 1rem 0.5rem 1rem;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;

    /* Hover effect */
    ${this}:hover{
        background-color: #1a9486;
        color: #ffffff;
        text-decoration: none;
    }

    /* Specific size stylings */
    ${({sm}) => sm && `
        padding: 0.15rem 1rem 0.15rem 1rem;
        font-size: 1rem;
    `}
    ${({md}) => md && `
        padding: 0.15rem 2rem 0.15rem 2rem;
    `}
    ${({lg}) => lg && `
        padding: 0.2rem 2.5rem 0.2rem 2.5rem;
        font-size: 2rem;
    `}
`;

export const ResetButton = styled(NavLink)`
    background-color: transparent;
    border: 0.15rem solid #b8232f;
    color: #b8232f;

    ${this}:hover{
        background-color: #b8232f;
        color: #ffffff;
    }
`;

export const SubmitButton = styled.input`
    color: #ffffff;
    background-color: #3a7a73;
    border: none;
    margin: 0.25rem 0.5rem 0.25rem 0;
    padding: 0.15rem 2rem 0.15rem 2rem;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;

    /* Hover effect */
    ${this}:hover{
        background-color: #1a9486;
        color: #ffffff;
        text-decoration: none;
    }
`;

const FormLabel = styled.label`
    display: block;
    margin-top: 0.5rem;
`;

const FormRadioLabel = styled(FormLabel)`
    display: inline-block;
    margin: 0 0.5rem 0 0.5rem;
`;

const FormInput = styled.input`
    display: block;
    margin-top: 0.5rem;
    max-width: 15rem;
    width: 100%;
    padding: 0.05rem 0 0.05rem 0.7rem;
    border: 0.2rem solid #b9b3a4;

    ${this}:focus{
        outline: none;
        border: 0.2rem solid #e83e8c;
    }

    @media( max-width: 530px){
        max-width: 100%;
    }
`;

const FormTextArea = styled.textarea`
    display: block;
    max-width: 25rem;
    min-height: 5rem;
    max-height: 20rem;
    height: 10rem;
    margin-top: 0.5rem;
    width: 100%;
    padding: 0.05rem 0 0.05rem 0.7rem;
    border: 0.2rem solid #b9b3a4;

    ${this}:focus{
        outline: none;
        border: 0.2rem solid #e83e8c;
    }

    @media( max-width: 530px){
        max-width: 100%;
    }
`;

export function FormTextInput({formId, label, placeholder}){
    return(
        <span>
            <FormLabel htmlFor={formId}>{label}</FormLabel>
            <FormInput type="text" id={formId} placeholder={placeholder}/>
        </span>
    )
}

export function FormRadioInput({formId, label, name, value}){
    return(
        <div>
            <input type="radio" id={formId} name={name} value={value}/>
            <FormRadioLabel htmlFor={formId}>{label}</FormRadioLabel>
        </div>
    )
}

export function FormTextAreaInput({formId, label, placeholder}){
    return(
        <div>
            <FormLabel htmlFor={formId}>{label}</FormLabel>
            <FormTextArea id={formId} placeholder={placeholder}/>
        </div>
    )
}

export const ContentOverlay = styled.div`
    background: rgba(0,0,0,0.75);
    padding: 2rem;
    margin-bottom: 2rem;
`;

export const SectionOverlay = styled.section`
    background: rgba(0,0,0,0.75);
    padding: 2rem;
    margin-bottom: 2rem;
`;

export const TextShadow = styled.div`
  text-shadow: 0.25rem 0.25rem 0.5rem #000000;
`;

export const HomeContentOverlay = styled.div`
    @media( max-width: 575px){
        background: rgba(0,0,0,0.75);
        padding: 2rem;
    }
`;

export const BackgroundOverlay = styled(Image)`
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: -1;

    @media( max-width: 800px){
        opacity: 0;
    }
`;

export const PortfolioHeader = styled.h1`
    margin-top: 1rem;
`;

export default TextLink;

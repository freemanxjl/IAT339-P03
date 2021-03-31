import { Image } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import '../css/grid-image.css';

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

export const ContentOverlay = styled.div`
    background: rgba(0,0,0,0.75);
    padding: 2rem;
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

export const PortfolioContainer = styled.div`
    margin-bottom: 15rem;
`;

export default TextLink;

import React from 'react';
import styled from 'styled-components';

const PalleteWrapper = styled.div`
    display: inline-block;
    margin: 0 1rem 0 1rem;
`;

const InnerColor = styled.div`
    width: 6rem;
    height: 6rem;
    margin-bottom: 0.75rem;
    background-color: ${props => props.color};
`;

function ColorPallete({color, name}) {
    return (
        <PalleteWrapper>
            <InnerColor color={color}/>
            <p>{name}<br/><em>{color}</em></p>
        </PalleteWrapper>
    )
}

export default ColorPallete;

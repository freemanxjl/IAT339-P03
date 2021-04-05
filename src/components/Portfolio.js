import React from 'react';
import styled from 'styled-components';
import {ImageLink} from './CombinedElements';

const PortfolioContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
`;

function Portfolio() {
    return (
        <PortfolioContainer>
            <ImageLink imageName="grandis-library" alt="Grandis Library" text="Grandis Library" link="/grandis-library"/>
            <ImageLink imageName="tamooki" alt="Tamooki" text="Tamooki" link="/tamooki"/>
        </PortfolioContainer>
    )
};

export default Portfolio;

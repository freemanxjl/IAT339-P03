import React from 'react';
import { Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

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
            <div className="grid-wrapper">
                <Link to="/grandis-library">
                    <Image fluid className="grid-image" src={`${process.env.PUBLIC_URL}/grandis-library.png`} alt="Snacking Cat"/>
                    <div className="grid-overlay"/>
                    <div className="grid-text">
                        <h3 className="grid-title">Grandis Library</h3>
                    </div>
                </Link>
            </div>
            <div className="grid-wrapper">
                <Link to="/tamooki">
                    <Image fluid className="grid-image" src={`${process.env.PUBLIC_URL}/tamooki.png`} alt="Snacking Cat"/>
                    <div className="grid-overlay"/>
                    <div className="grid-text">
                        <h3 className="grid-title">Tamooki</h3>
                    </div>
                </Link>
            </div>
        </PortfolioContainer>
    )
};

export default Portfolio;

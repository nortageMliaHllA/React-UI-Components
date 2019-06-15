import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <a href="http://reactjs.org" className="CardContainer">
            <CardBanner />
            <CardContent />
        
        </a> 
    );
};

export default CardContainer;
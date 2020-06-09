import React from 'react';

export default function CalculateStarRating(rating) {
    const starPercentage = (rating / 5) * 100;
    const starWidth = `${(Math.round(starPercentage / 10) * 10)}%`;

    return (
        <div className="stars-outer">
            <div className="stars-inner" style={{width: starWidth}}/>
        </div>
    );
}

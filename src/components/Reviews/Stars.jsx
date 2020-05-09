import React, {useRef, forwardRef, useImperativeHandle} from 'react';


const STARS_RATINGS = [1, 2, 3, 4, 5];

const FoodShareStars = ({onStarsSelect}) => {
    const container = useRef();

    const resetStars = () => {
        Array.from(container.current.children).forEach((star) => {
            star.classList.remove('text-warning');
            star.classList.add('text-gray');
        });
    };

    const onStarInteract = (rating) => {
        Array.from(container.current.children).forEach((star) => {
            const currentRating = Number(star.getAttribute('data-star'));

            star.classList.remove('text-warning');
            star.classList.add('text-gray');

            if (currentRating <= rating) {
                star.classList.remove('text-gray');
                star.classList.add('text-warning');
            }
        });

        onStarsSelect(rating);
    };

    return (
        <div className={`foodshare-stars-container`} ref={container}>
            {STARS_RATINGS.map((rating, index) =>
                (
                    <i key={index} className={`foodshare-star star fas fa-star text-gray`} data-star={index + 1}
                       onClick={() => onStarInteract(rating, index)}/>
                )
            )}
        </div>
    );
}

export default FoodShareStars;

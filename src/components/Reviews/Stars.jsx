import React, {useRef} from 'react';

export default function FoodShareStars() {
    const container = useRef();

    const onContainerLeave = () => {
        if (!container.current.classList.contains('rated')) {
            for (const star of container.current.children) {
                star.classList.add('text-gray');
                star.classList.remove('text-warning');
                star.classList.add('far');
                star.classList.remove('fas');
            }
        }
    };

    const onStarEnter = () => {
        for (const [index, star] of Array.of(container.current.children).entries()) {
            const rating = Number(star.getAttribute('data-rating-value'));
            console.log('here', star);
            // if (index + 1 <= rating) {
            //     star.classList.remove('text-gray');
            //     star.classList.add('text-warning');
            // }
            // if (index >= rating) {
            //     star.classList.add('text-gray');
            //     star.classList.remove('text-warning');
            //     star.classList.remove('fas');
            //     star.classList.add('far');
            // }
        }
    };

    return (
        <div className={`foodshare-stars-container`} onMouseLeave={onContainerLeave} ref={container}>
            <i className={`foodshare-star star fas fa-star text-gray`} onMouseEnter={onStarEnter} data-rating-value="1"/>
            <i className={`foodshare-star star fas fa-star text-gray`} onMouseEnter={onStarEnter} data-rating-value="2"/>
            <i className={`foodshare-star star fas fa-star text-gray`} onMouseEnter={onStarEnter} data-rating-value="3"/>
            <i className={`foodshare-star star fas fa-star text-gray`} onMouseEnter={onStarEnter} data-rating-value="4"/>
            <i className={`foodshare-star star fas fa-star text-gray`} onMouseEnter={onStarEnter} data-rating-value="5"/>
        </div>
    );
}
import React, {useState, useRef, Fragment} from 'react';
import parse from "html-react-parser";
import FoodShareStars from "./Stars";
import format from "date-fns/format";
import './reviews.scss';

const defaultReview = {
    comment: '',
    rating: '',
    timestamp: format(new Date(), 'MMM dd, yyyy'),
    name: "A testing user"
}

export default function ReviewsComponent({reviews, addReview}) {
    const [newReview, setNewReview] = useState(defaultReview);
    const starsRef = useRef();

    const calculateRating = (rating) => {
        const rounded = Math.floor(rating);
        const decimal = 5 - rounded;

        let totalStars = '<i class="star fas fa-star text-warning"/>'.repeat(rounded);

        if (decimal) {
            const greyStars = ('<i class="star far fa-star text-gray"/>').repeat(decimal);
            totalStars = totalStars.concat(greyStars);
        }

        return totalStars;
    };

    const onAddReview = () => {
        addReview(newReview);
        resetReview();
    };

    const resetReview = () => {
        setNewReview(defaultReview);
        starsRef.current && starsRef.current.resetStars();
    }

    const onReviewTyping = (event) => {
        setNewReview({
            ...newReview,
            comment: event.target.value
        })
    };

    const handleStarsSelect = (rating) => {
        setNewReview({
            ...newReview,
            rating: String(rating)
        })
    };

    const calculateRemainingCharacters = () => {
        if (!newReview) {
            return 1000;
        }

        return 1000 - newReview.comment.length;
    }

    return (
        <Fragment>
            {reviews && <div className="reviews-list-wrapper">
                <p className="font-small font-weight-light text-gray mb-3 reviews-count">{reviews.length} reviews found </p>

                {reviews && reviews.map((review, key) =>
                    <div className="bg-white border border-soft shadow-soft  p-4 mb-4 single-review" key={key}>
                        <div className="d-flex justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                                <a href="./profile.html" className="btn btn-xs btn-icon-only btn-primary mr-2 p-1"><span
                                    className="fa fa-user"/></a>
                                <a href="./profile.html"
                                   className="font-weight-normal font-small text-gray-800">{review.name}</a>
                                <span className="ml-2 font-small d-none d-md-inline">{review.timestamp}</span></div>
                            <div className="d-flex justify-content-end align-items-center">
                                {parse(calculateRating(Number(review.rating)))}
                            </div>
                        </div>
                        <p className="m-0">{review.comment}</p>
                    </div>
                )}

                <div className="d-flex justify-content-between align-items-center mb-3 mt-5">
                    <h4 className="m-0">Add a review</h4>
                    <FoodShareStars onStarsSelect={handleStarsSelect} ref={starsRef}/>
                </div>
                <textarea name="description" className="form-control border" placeholder="Add a review" rows="6"
                          data-bind-characters-target="#charactersRemaining" maxLength="1000" required
                          onChange={onReviewTyping}
                          value={newReview.comment}
                />
                <div className="d-flex justify-content-between mt-3">
                    <small className="font-weight-light">
                        <span id="charactersRemaining">{calculateRemainingCharacters()}</span> characters remaining
                    </small>
                    <button type="submit" className={`btn btn-primary animate-up-2 ${'not-allowed-element'}`} onClick={onAddReview}>Add review
                    </button>
                </div>
            </div>
            }
        </Fragment>
    );
}

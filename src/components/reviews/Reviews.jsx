import React, {useState, useRef, Fragment, useContext} from 'react';
import parse from "html-react-parser";
import FoodShareStars from "./Stars";
import format from "date-fns/format";
import CalculateStarRating from "../../services/calculate-star-rating";
import {AuthContext} from "../../contexts/AuthContext";
import firebase from "../../firebase";
import {getFirebaseTime} from "../../services/time";

const defaultReview = {
    comment: '',
    rating: '',
    timestamp: firebase.firestore.Timestamp.now(),
    name: '',
    from: ''
}

export default function ReviewsComponent({reviews, addReview}) {
    const [newReview, setNewReview] = useState(defaultReview);
    const {currentUser} = useContext(AuthContext);
    const starsRef = useRef();

    const getReviewDate = (review) => {
        return format(getFirebaseTime(review.timestamp.seconds, review.timestamp.nanoseconds), 'MMM dd, yyyy');
    }

    const onAddReview = () => {
        addReview({
            ...newReview,
            name: currentUser.displayName,
            from: currentUser.uid
        });
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
            return 100;
        }

        return 100 - newReview.comment.length;
    }

    const validateButton = () => {
        const {rating, comment} = newReview;

        return !!comment.length && comment.length < 100 && !!rating;
    };

    const validateMessage = () => {
        const {comment} = newReview;

        return comment.length < 100 ? <div><span id="charactersRemaining">{calculateRemainingCharacters()}</span> characters remaining</div>
            : parse('<span style="color: red">Your message exceeds the required limit.</span>')

    };

    return (
        <Fragment>
            {reviews && <div className="reviews-list-wrapper">
                <p className="font-small font-weight-light text-gray mb-3 reviews-count">{reviews.length} reviews
                    found </p>

                {reviews && reviews.map((review, key) =>
                    <div className="bg-white border border-soft shadow-soft  p-4 mb-4 single-review" key={key}>
                        <div className="d-flex justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                                <div className="font-weight-normal font-small text-gray-800">{review.name}</div>
                                <span className="ml-2 font-small d-none d-md-inline">{getReviewDate(review)}</span></div>
                            <div className="d-flex justify-content-end align-items-center">
                                {CalculateStarRating(Number(review.rating))}
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
                          data-bind-characters-target="#charactersRemaining" maxLength="100" required
                          onChange={onReviewTyping}
                          value={newReview.comment}
                />
                <div className="d-flex justify-content-between mt-3">
                    <small className="font-weight-light">
                        {
                            validateMessage()
                        }
                    </small>
                    <button className={`btn btn-primary animate-up-2 ${validateButton() ? '' : 'not-allowed-element'}`}
                            onClick={onAddReview}>Add review
                    </button>
                </div>
            </div>
            }
        </Fragment>
    );
}

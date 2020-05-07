import React from 'react';
import parse from "html-react-parser";
import FoodShareStars from "./Stars";

export default function ReviewsComponent({reviews, onCommentSubmit}) {
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

    return (
        <div className="reviews-list-wrapper">
            <p className="font-small font-weight-light text-gray mb-3 reviews-count">3 reviews found </p>

            {reviews && reviews.map((review, key) =>
                <div className="bg-white border border-soft shadow-soft  p-4 mb-4 single-review" key={key}>
                    <div className="d-flex justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                            <a href="./profile.html" className="btn btn-xs btn-icon-only btn-primary mr-2 p-1"><span
                                className="fa fa-user"></span></a>
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
               <FoodShareStars />
            </div>
            <textarea name="description" className="form-control border" placeholder="Add a review" rows="6"
                      data-bind-characters-target="#charactersRemaining" maxLength="1000" required></textarea>
            <div className="d-flex justify-content-between mt-3">
                <small className="font-weight-light">
                    <span id="charactersRemaining">1000</span> characters remaining</small>
                <button type="submit" className="btn btn-primary animate-up-2">Add review</button>
            </div>
        </div>
    );
}
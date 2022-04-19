import React from 'react';
import UseReviews from '../../UseReviews/UseReviews';
import Review from './Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = UseReviews();
    return (
        <div className='mx-auto'>
            <h2 className='container font-bold'>Customer Reviews</h2>
            <div className=' mt-5'>
                {
                    reviews.map(review => <Review review={review} key={review.id}></Review>)
                }

            </div>
        </div>
    );


};

export default Reviews;
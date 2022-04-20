import React from 'react';
import { StarIcon } from '@heroicons/react/solid'
import './Review.css'

const Review = ( props) => {
    const {name,image,rating,review} =props.review
    return (
        <div className='container review mx-auto d-block mb-5 col col-sm-12 col-lg-4 g-4'>
            <img src={image} alt="" style={{width:"300px"}} />
            <h4 className='text-success ml-auto'>Name: {name}</h4>
            <p>{review}</p>
            <p className='flex items-center'>Rating:
            <StarIcon className="star text-warning"></StarIcon>
            <StarIcon className="star text-warning"></StarIcon>
            <StarIcon className="star text-warning"></StarIcon>
            <StarIcon className="star text-warning"></StarIcon>
            <StarIcon className="star text-warning"></StarIcon>
            {rating}</p>
            

        </div>
    );
};

export default Review;
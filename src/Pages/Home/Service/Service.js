import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className="col col-sm-12 col-md-4 col-lg-4 g-4">

            <div className="card h-100">
                <img src={img} className="card-img-top" alt="image" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Price:{price}</p>
                    <p className="card-text">Description : {description}</p>
                    <Link to="/checkout">
                    <button className='bg-primary'>Book Now</button>
                    </Link>
                   
                </div>

            </div>
        </div>

    )
};

export default Service;
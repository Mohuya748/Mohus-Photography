import React from 'react';

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div class="card col col-sm-12 col-lg-4 col-md-4 g-4" style={{width: "18rem"}}>
            <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Description:{description}</p>
                    <p>Price: {price}</p>
                    <a href="#" class="btn btn-primary">Book Now</a>
                </div>
        </div>

    );
};

export default Service;
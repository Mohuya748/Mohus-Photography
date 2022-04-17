import React from 'react';

const Service = ({service}) => {
    const {name, img ,price ,description} =service;
    return (
        <div>
            <img src={img} alt="serviceimage"/>
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p>Description : {description}</p>
        </div>
    );
};

export default Service;
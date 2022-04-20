import React from 'react';
import marriage from '../../images/marriage.jpg'
import birthday from '../../images/birthday.jpg'
import baby from '../../images/baby.jpg'

const Checkout = () => {
    return (
        <div className='container text-center'>
            <h1 className='text-center'>You can check your Available packages here!</h1>
            <div className='m-5'>
                <h2>Bridal Package</h2>
                <img src={marriage} alt="" style={{height:'400px'}}/>
            </div>
            <div className='m-5'>
                <h2>Birthday Package</h2>
                <img src={birthday} alt="" style={{height:'400px'}} />
            </div>
            <div className='m-5'>
                <h2>Baby photosoot Package</h2>
                <img src={baby} alt="" style={{height:'400px'}} />
            </div>
            
        </div>
    );
};

export default Checkout;
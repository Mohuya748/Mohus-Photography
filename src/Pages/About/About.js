import React from 'react';
import top from '../../images/top.jpg'

const About = () => {
    return (
        <div className='d-flex container'>
            <div className='m-5'>
            <h1>Mohu's Photography</h1>
            <p className='fs-3'>This about a photography service site. Here we provide so many photography services like bridal photography, nature photography,small get together photography and do on and it's within a very cheap price!.
                
            so contact us soon to create your memories with us!!</p>
            </div>
           
            <div className='m-5'>
                <img src={top} alt="" style={{width:"350px"}} />
        </div>
        
            
        </div>
    );
};

export default About;
//  about component 
import React from 'react';
import top from '../../images/top.jpg'

const About = () => {
    return (
        <div className='d-flex container'>
            <div className='m-5'>
            <h1>Mohu's Photography</h1>
            <p className='fs-3'>This about a photography service site. Here I provide so many photography services like bridal photography, nature photography, small get together photography and so on and it's within a very cheap price! I want to make everyone's memories so colorful to them. so contact to book your appointment!!!</p>
            </div>
           
            <div className='m-5'>
                <img src={top} alt="" style={{width:"350px"}} />
        </div>
        
            
        </div>
    );
};

export default About;
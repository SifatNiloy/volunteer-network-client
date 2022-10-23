import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, img } = service;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div class="card " style={{ width: "23rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text">{name}</p>
                </div>
            </div>
        </div>



    );
};

export default Service;
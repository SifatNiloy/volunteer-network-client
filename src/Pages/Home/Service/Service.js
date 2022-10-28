import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {

    const { _id, name, img } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = _id => {
        navigate(`/service/${_id}`);
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4 service'>

            <div className="card " style={{ width: "20rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p onClick={() => navigateToServiceDetail(_id)} className="text-center text-success">{name}</p>
                </div>
            </div>
        </div>



    );
};

export default Service;
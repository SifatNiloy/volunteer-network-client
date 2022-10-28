import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='mt-5 text-center'>
            <h2>Book service : {service.name}</h2>
            <div className="text-center">
                <Link to='/checkout'>
                    <div className="btn btn-primary">proceed checkout</div>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
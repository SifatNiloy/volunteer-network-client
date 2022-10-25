import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>this is service details</h2>
            <div className="text-center">
                <Link to='/checkout'>
                    <div className="btn btn-primary">proceed checkout</div>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
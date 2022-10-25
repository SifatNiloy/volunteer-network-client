import React from 'react';
import sleeping from '../../images/sleeping.png'
const NotFound = () => {
    return (
        <div>
            <h4>The page you are looking for is not found</h4>
            <img className='w-25' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;
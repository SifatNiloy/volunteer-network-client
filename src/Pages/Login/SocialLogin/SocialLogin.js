import React from 'react';
import google from '../../../social'
const SocialLogin = () => {
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: ' 1px' }} className="bg-primary w-50"></div>
                <div className="px-2">Or</div>
                <div style={{ height: ' 1px' }} className="bg-primary w-50"></div>
            </div>
            <div className='text-center'>
                <button>Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;
import React from 'react';
import google from '../../../social/google.png'
import github from '../../../social/github.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {

        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
            ;
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className="d-flex align-items-center mb-3">
                <div style={{ height: ' 1px' }} className="bg-primary w-50"></div>
                <div className="px-2">Or</div>
                <div style={{ height: ' 1px' }} className="bg-primary w-50"></div>
            </div>
            {errorElement}
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 d-block mx-auto'>Google Sign In <img style={{ width: "30px" }} src={google} alt="" /> </button>
                <br />
                <button
                    className='btn btn-primary w-50 d-block mx-auto'>Github Sign In <img style={{ width: "30px" }} src={github} alt="" /> </button>
            </div>
        </div>
    );
};

export default SocialLogin;    

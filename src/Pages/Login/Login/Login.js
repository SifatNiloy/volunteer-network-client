import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    let errorElement;
    let from = location?.state?.from?.pathname || "/";
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigateRegister = event => {
        navigate('/register');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {

        errorElement = <p className='text-danger'>Error: {error.message}</p>;
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='d-block mx-auto w-50' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {errorElement}
            <p>New to volunteer network? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forgot Password? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
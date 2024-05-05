import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { login } from '../context/apiService';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState(''); // State to handle error messages
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(credentials);
            navigate('/profile'); // Redirect to profile page after successful login
        } catch (error) {
            console.error('Login failed:', error);
            setError('Login failed! Please check your username and password.'); // Set the error message
        }
    };

    return (
        <div>
            <section className='w-100 px-4 py-5'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-7 col-lg-5 col-xl-5'>
                        <div className='text-center h4 mb-3'>
                        You must log into your account first.
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <InputGroup size="lg" className="mb-3">
                                <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                name="username"
                                type="text"
                                id="usernameLogin" 
                                onChange={handleChange}
                                />
                            </InputGroup>
                            <InputGroup size="lg" className="mb-3">    
                                <Form.Control
                                placeholder="Password"
                                aria-label="Password"
                                aria-describedby="basic-addon1"
                                name="password"
                                type="password" 
                                id="passwordLogin"
                                onChange={handleChange}
                                />
                            </InputGroup>
                            <Button variant="primary" type="submit">
                                Sign In
                            </Button>
                            {error && (
                                <div className="alert alert-danger mt-3" role="alert">
                                    {error}
                                </div>
                            )}
                        </Form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;

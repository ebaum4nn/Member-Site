import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loading from "./sub_components/Loading";
import ContentWrapper from './layout/ContentWrapper';
import { fetchProfile, logout } from '../context/apiService'; // Adjust path as necessary

const Profile = () => {
    const [loading, setLoading] = useState(false); 
    const [profile, setProfile] = useState(null);
    const [error] = useState('');
    const [showErrorUI, setShowErrorUI] = useState(false);

    const { setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();  // Now using the centralized logout function
        setIsLoggedIn(false);
        navigate('/login');
    };

    useEffect(() => {
        setLoading(true);
        fetchProfile()
            .then(response => {
                setProfile(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching profile:', err);
                setShowErrorUI(true);
                setLoading(false);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <ContentWrapper>
            {profile ? (
                <div>
                    <Row>
                        <Col lg="9" className='ps-lg-4'>
                            <h1>Welcome back, {profile.first_name}!</h1>
                        </Col>
                        <Col id="logoutRow" lg="3" className='pe-lg-4'>
                            <Button variant='dark' onClick={handleLogout} size="lg">Log Out</Button>
                        </Col>
                    </Row>
                    <Row><Col>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut iaculis arcu, vel scelerisque tortor. Proin ut malesuada turpis. Pellentesque in magna nec ligula aliquam vestibulum. Aliquam consequat sem sed tellus pharetra, sed pulvinar felis venenatis. Vestibulum efficitur ullamcorper arcu non placerat. Integer rhoncus tellus tellus, vel vulputate ex volutpat sit amet. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed cursus tortor vitae elit molestie consectetur. Etiam dapibus leo eu ante auctor varius.</Col><Col>Donec ac magna in velit fringilla rutrum. Vestibulum ex leo, aliquet ac lorem sit amet, cursus pulvinar augue. Nulla luctus augue at ante rutrum, non malesuada est tincidunt. Aliquam non scelerisque libero. Maecenas vulputate lectus a risus fringilla mattis. Mauris fringilla sed ante nec posuere. Proin ornare purus sit amet velit accumsan auctor.</Col></Row>
                    {loading && <Loading />}
                </div>
                
            ) : (
                loading ? <p>Loading profile...</p> : <p></p>
            )}
            {showErrorUI && (
                <div>
                    <h1>Please Log In</h1>
                    <Button href="/login" size="lg" variant='outline-dark' id="loginButton" className='ms-1'>Login</Button>
                </div>
            )}
        </ContentWrapper>
    );
};

export default Profile;
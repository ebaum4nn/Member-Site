import React, { useState, useEffect } from 'react';
import ProfileLayout from './profile/ProfileLayout';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentWrapper from './layout/ContentWrapper';
import { fetchProfile } from '../context/apiService';
import Loading from './sub_components/Loading';

const Profile = () => {
    const [loading, setLoading] = useState(true); 
    const [profile, setProfile] = useState(null);
    const [showErrorUI, setShowErrorUI] = useState(false);

    useEffect(() => {
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

    if (showErrorUI) {
        return (
            <div>
                <h1>Please Log In</h1>
                <Button href="/login" size="lg" variant='outline-dark' id="loginButton" className='ms-1'>Login</Button>
            </div>
        );
    }

    return (
        <ContentWrapper>
            {profile ? (
                <div>
                    <Row>
                        <Col>
                            <h1>Welcome back, {profile.first_name}!</h1>
                        </Col>
                    </Row>
                    <ProfileLayout />
                    <Row>
                        <Col lg={6} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut iaculis arcu, vel scelerisque tortor. Proin ut malesuada turpis. Pellentesque in magna nec ligula aliquam vestibulum. Aliquam consequat sem sed tellus pharetra, sed pulvinar felis venenatis. Vestibulum efficitur ullamcorper arcu non placerat. Integer rhoncus tellus tellus, vel vulputate ex volutpat sit amet. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed cursus tortor vitae elit molestie consectetur. Etiam dapibus leo eu ante auctor varius.</Col>
                        <Col lg={6} >Donec ac magna in velit fringilla rutrum. Vestibulum ex leo, aliquet ac lorem sit amet, cursus pulvinar augue. Nulla luctus augue at ante rutrum, non malesuada est tincidunt. Aliquam non scelerisque libero. Maecenas vulputate lectus a risus fringilla mattis. Mauris fringilla sed ante nec posuere. Proin ornare purus sit amet velit accumsan auctor.</Col>
                    </Row>
                    {loading && <Loading />}
                </div>
            ) : (
                <p>No profile found. Please log in again. <Button href="/login" size="lg" variant='outline-dark' id="loginButton" className='ms-1'>Login</Button></p>
            )}
        </ContentWrapper>
    );
};

export default Profile;

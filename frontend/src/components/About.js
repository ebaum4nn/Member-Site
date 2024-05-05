import React from 'react';
import ContentWrapper from './layout/ContentWrapper';


function About() {
    return (
        <ContentWrapper>
            <h1 className="display-5 fw-bold">About Us</h1>
            <p className="col-md-8 fs-4">This is the about page of our application, where we share more information about what we do and why we do it.</p>
        </ContentWrapper>
    );
}

export default About;

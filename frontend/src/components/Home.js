import React from 'react';
import ContentWrapper from './layout/ContentWrapper';


function Home() {
    return (
        <ContentWrapper>
            <h1 className="display-5 fw-bold">Your Title</h1>
            <p className="col-md-8 fs-4">Your tagline.</p>
        </ContentWrapper>
    );
}

export default Home;

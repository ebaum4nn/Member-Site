import React from 'react';

function Loading(){
    return (
        <div className='container text-center'>
        <h3 className='loading'>GENERATING REPORT</h3>
            <br />
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Loading;
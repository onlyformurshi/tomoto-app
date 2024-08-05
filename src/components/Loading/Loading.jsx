import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import './Loading.css'
function Loading() {
    return (
        <div className="loading-overlay">
            <Spinner animation="grow" variant="danger" />
        </div>
    )
}

export default Loading

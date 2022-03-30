import React from 'react';
import './Loading.css';

export default function Error({error }) {
    return (
        <div class="alert"><div className='text'>{error}</div></div>
    )
}
import React from 'react';
import './Homepage.scss';
//component imports
import Directory from '../../components/directory/directory';

const Homepage  = () => {
    return (
        <div className='homepage'>
            <Directory/>
        </div>
    )
}

export default Homepage;
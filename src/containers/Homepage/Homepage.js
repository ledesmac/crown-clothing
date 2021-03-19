import React from 'react';
import './Homepage.scss';
//component imports
import MenuItem from '../../components/menu-item/menu-item';
import Directory from '../../components/directory/directory';

const Homepage  = () => {
    return (
        <div className='homepage'>
            <Directory/>
        </div>
    )
}

export default Homepage;
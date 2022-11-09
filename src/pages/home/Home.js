import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBacon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Home = () => {
    return (
        <div>
           <FontAwesomeIcon className='text-2xl text-black' icon="fa-brands fa-google" />
           <FontAwesomeIcon className='text-4xl text-black' icon={faBacon}></FontAwesomeIcon>
           <FontAwesomeIcon className='text-4xl text-black' icon={faUser}></FontAwesomeIcon>
           <FontAwesomeIcon icon="fa-regular fa-mug-hot" />
        </div>
    );
};

export default Home;
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBacon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useHooks from '../../components/UseHooks';
import Header from '../sharedPages/header/Header';

const Home = () => {
    useHooks('Home')
    return (
        <div>
        <Header></Header>
        </div>
    );
};

export default Home;
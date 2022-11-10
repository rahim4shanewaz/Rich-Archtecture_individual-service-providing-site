import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/ContextApi';

const ServicesAndRevews = () => {


    const { user, logOut } = useContext(AuthContext);
    const [service, setService] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/userServices?email=${user?.email}`)
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setService(data);
            })
    }, [user?.email, logOut])


    return (
        <div className='mt-10'>
            <div>
                <h1>Service added by this {user.email}: 
                    {
                       service.length 
                    }
                </h1>
            </div>
        </div>
    );
};

export default ServicesAndRevews;
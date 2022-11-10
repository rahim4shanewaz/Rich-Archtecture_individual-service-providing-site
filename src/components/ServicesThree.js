import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const ServicesThree = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('https://assignment-11-sever.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);








    return (
        <div className='my-5 px-10 mx-10'>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
           <div className='flex justify-center m-4'>
            <div>
            <Link to={'/allservices'}><button className="btn btn-outline btn-secondary">More Services</button></Link>
            </div>
           </div>
            
        </div>
    );
};

export default ServicesThree;
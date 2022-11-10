import React, { useEffect, useState } from 'react';
import AllServiceCard from '../../components/AllServiceCard';

const AllServices = () => {

    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/allservices')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);








    return (
        <div>

<div className='my-5 px-10 mx-10'>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => 
                    <AllServiceCard key={service._id}
                    service={service}></AllServiceCard>)
                }
            </div>
            
        </div>
          
            
        </div>
    );
};

export default AllServices;
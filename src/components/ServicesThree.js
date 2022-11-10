import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Content from './Content';
import ServiceCard from './ServiceCard';

const ServicesThree = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('https://assignment-11-sever.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);








    return (
        <div className='my-5 px-10 mt-10 mx-10'>
            <div className='text-center headerFont mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p className='text-xl font-bold'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 headerFont'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
           <div className='flex justify-center m-4 mt-3 mb-2'>
            <div>
            <Link to={'/allservices'}><button className="btn btn-outline rounded-none btn-success px-10 my-10">See All</button></Link>
          
            
            </div>
           
           </div>

           <Content></Content>
          
            
        </div>
        
    
    );
};

export default ServicesThree;
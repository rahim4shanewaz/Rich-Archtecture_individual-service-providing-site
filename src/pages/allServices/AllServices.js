import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import AllServiceCard from '../../components/AllServiceCard';
import useHooks from '../../components/UseHooks';

const AllServices = () => {
    const [loading, setLoading] = useState(false);
    const [services, setServices] = useState([]);
   
    useHooks('All Services')


   

  
    useEffect( () =>{
        setLoading(true)
       
      
        fetch('https://assignment-11-sever.vercel.app/allservices')
        .then(res =>res.json())
        .then(data => setServices(data))
      
        
        setLoading(false)
    }, []
    );
  
   








    return (
        <div className='mt-10'>
    {
        loading ? 

        <Circles loading={loading}></Circles>
        :

            <div className='py-10 px-10 mx-10'>
            <div className='text-center headerFont mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p className='text-xl font-bold'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

           <div className='mt-10 headerFont'>
          
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => 
                    <AllServiceCard key={service._id}
                    service={service} loading={loading}></AllServiceCard>)
                }
            </div>
            
           </div>
            
             </div>
}
             

            
        </div>
    );
};

export default AllServices;
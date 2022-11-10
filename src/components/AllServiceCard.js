import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Circles } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const AllServiceCard = ({service}) => {

    const { _id, img, price, title } = service;
    return (
        <div>

      

          
            
        

      <div className="card rounded-none card-compact w-96 bg-slate-100 border shadow-xl">
            <figure> <div className='h-72'>
       <img className='h-full object-cover' src={img} alt="" />
       </div>
            
            </figure>
            <div className="card-body rounded-none">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <p className='text-2xl font-bold'>Estimate Time: <span className='text-xl font-bold'> {service.length} days</span> </p>
                <div className='mb-5'>
           <FontAwesomeIcon className=' text-yellow-400 text-3xl' icon={faStar}></FontAwesomeIcon>
           <FontAwesomeIcon className=' text-yellow-400 text-3xl' icon={faStar}></FontAwesomeIcon>
           <FontAwesomeIcon className=' text-yellow-400 text-3xl' icon={faStar}></FontAwesomeIcon>
           <FontAwesomeIcon className=' text-yellow-400 text-3xl' icon={faStar}></FontAwesomeIcon>
           <FontAwesomeIcon className=' text-yellow-400 text-3xl' icon={faStar}></FontAwesomeIcon>
             
           </div>
                <div className="card-actions justify-end">
                    <Link to={`/serviceDetails/${_id}`}>
                        <button className="btn btn-outline rounded-none btn-success">Service Details</button>
                    </Link>
                </div>
            </div>
        </div>

            


            
        </div>
    );
};

export default AllServiceCard;
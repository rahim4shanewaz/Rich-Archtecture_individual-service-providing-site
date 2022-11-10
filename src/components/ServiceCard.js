import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description, rating  } = service;
    return (
        <div className="card rounded-none card-compact w-96 bg-slate-100 mb-5 border shadow-xl">
            {/* <figure><img src={img} alt="Shoes" /></figure> */}
            <figure>
       <div className='h-72'>
       <img className='h-full object-cover' src={img} alt="" />
       </div>
          </figure>


            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <p className='text-xl text-orange-600 font-semibold'>Rating: ${rating}</p>
                <div className='mb-5'>
           <FontAwesomeIcon className=' text-yellow-400 text-3xl' icon={faStar}></FontAwesomeIcon>
           <FontAwesomeIcon className=' text-yellow-400 text-3xl' icon={faStar}></FontAwesomeIcon>
           <FontAwesomeIcon className=' text-yellow-400 text-3xl' icon={faStar}></FontAwesomeIcon>
           <FontAwesomeIcon className=' text-yellow-400 text-3xl' icon={faStar}></FontAwesomeIcon>
           <FontAwesomeIcon className=' text-yellow-400 text-3xl' icon={faStar}></FontAwesomeIcon>
             
           </div>
                <p className='text-xl text-black font-semibold'>{description.slice(0, 100)}.....</p>
                <div className="card-actions justify-end">
                    <Link to={`/serviceDetails/${_id}`}>
                        <button className="btn rounded-none btn-outline btn-success">Service Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
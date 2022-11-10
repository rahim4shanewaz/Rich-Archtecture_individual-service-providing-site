import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {



    const service = useLoaderData();
    return (
        <div>

<div  className='flex flex-col justify-center  p-20 pt-5'>
          
        

          <div  className="card box rounded-none p-3  lg:card-side bg-base-100 shadow-xl">
          <figure><img className='' src={service.img} alt="Album"/></figure>
          <div    className="card-body lg:w-2/5">
              <div className='p-2'>
              <h2 className="card-title  text-5xl">{service.title}</h2>
              <hr />
              {/* <p className='text-black '>{course.description}. In this course, Visual Storytelling with Photography, you'll use photography as the medium, as you gain the skills to identify and create powerful, meaningful, and enticing visual stories. You'll learn about composition, lighting, framing, movement and how to capture a story from a portrait, and moment to moment. Plus, you'll leave with a compelling photo essay designed by you. </p> */}
              <hr />
              <p className='text-2xl '>Price:   ${service.price}</p>
              {/* <p className='text-xl'>Duration:  {course.duration} <small>month</small> </p> */}
              <p className='text-xl'>Rating: {service.rating}</p>
              </div>
              <div className="card-actions justify-end">

             
              
              {/* <Link to={`/checkout/${course.id}`}><button className="btn btn-outline btn-secondary">>Get premium access.</button></Link> */}
              </div>
          </div>
          </div>
          

         


      </div>
            
        </div>
    );
};

export default ServiceDetails;
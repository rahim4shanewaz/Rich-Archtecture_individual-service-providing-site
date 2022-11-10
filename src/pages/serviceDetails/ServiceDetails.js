import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLoaderData, useNavigate } from 'react-router-dom';

import AddReview from '../../privateRoute/addReview/AddReview';
import Review from '../../components/Review';
import ProductReview from '../../components/ProductReview';
import { AuthContext } from '../../Context/ContextApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import NewReview from '../../components/NewReview';
import { toast } from 'react-toastify';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import useHooks from '../../components/UseHooks';

const ServiceDetails = () => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const service = useLoaderData();

 const [reload,  setReload] = useState(true);


 const notify = () => toast("Review Added");
 useHooks(`${service.title}`)

  const handlePlaceReview = event => {


    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    
    
   
    const rating = parseInt(form.rating.value)


    console.log(review,rating );

    const reviews = {
        review: review,
        rating: rating,
        email: user.email,
        id: service._id,
        title: service.title,
        
        timestamp: new Date(),
        user
    }


    fetch('https://assignment-11-sever.vercel.app/addreview', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('RC-token-login')}`
           
        },
        body: JSON.stringify(reviews)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
              notify()
                setReload(!reload);
                form.reset();
                
            }
        })
        .catch(er => console.error(er));
        
}

 
const [displayReview, setReview] = useState([])
useEffect(() => {
    fetch(`https://assignment-11-sever.vercel.app/productreviews?id=${service?._id}`)
        .then(res => res.json())
        
        .then(data => setReview(data)
        )
        
}, [service?._id, reload])


    return (
        <div className='mt-20'>

    

<div>
<div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
  
<div className="hero min-h-screen w-full" style={{ backgroundImage: `url(${service.img})` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content  text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">{service.title}</h1>
              <p className="mb-5 text-5xl">${service.price}</p>
              <p className="mb-5 text-3xl">{service.length} Days</p>
              <div className='mb-5'>
           <FontAwesomeIcon className=' text-yellow-400 text-3xl' icon={faStar}></FontAwesomeIcon>
           <FontAwesomeIcon className=' text-yellow-400 text-3xl' icon={faStar}></FontAwesomeIcon>
           <FontAwesomeIcon className=' text-yellow-400 text-3xl' icon={faStar}></FontAwesomeIcon>
           <FontAwesomeIcon className=' text-yellow-400 text-3xl' icon={faStar}></FontAwesomeIcon>
           <FontAwesomeIcon className=' text-yellow-400 text-3xl' icon={faStar}></FontAwesomeIcon>
             
           </div>
              <button className="btn btn-success">Get Started</button>


              <div className='w-full p-4 mb-5'>
              <p>{service.description}</p>
             </div>


            </div>
          </div>
             </div>
            

             <hr />

</div>





      <div className='w-full px-20 mb-5  mt-10  ' >
        <hr />
            <div className='flex w-full mt-5 mb-5  '>
            <div className='text-2xl text-center'>
               
              
            </div>

            
                              <div>
                              <form onSubmit={handlePlaceReview} >
                                 
                                 <div className='flex gap-5'>
                                 <div className="form-control">
                                      
                                      <input type="text" name='review' placeholder="Add Your Review"  className=" p-2 pl-0 outline-none  w-full mb-5  border-b-2 border-gray-400" />
                                  </div>

                                
                                  <div className="form-control">
                                     
                                      <input type="text" name='rating' placeholder="Give Your Rating" className=" p-2 pl-0 outline-none  w-full mb-5  border-b-2 border-gray-400" />
                                  </div>

                                  <div className="form-control">

                               <div className='flex gap-2'>

{user?.displayName ?
 <div>
 <button className="btn mt-3   rounded-none btn-sm outline-none border-none sdw bg-lime-500">Submit</button>
 </div>

                               
                                 :
<div>
                                 <NavLink to='/login'>  <button className="btn mt-3   rounded-none btn-sm outline-none border-none sdw bg-lime-500">Login First</button> </NavLink>
                                 </div>

                                         
}


                               </div>

  
                                   </div>
                                 </div>

                                 
       
                               </form>
                              </div>
            
        </div>
        <hr /></div>
       

     
   
<div className='mt-5'>
{displayReview?.user ?
      
      <div className='px-10 mx-10'>

        { 
          displayReview.map(review => <NewReview key={review._id} newReview={review}></NewReview>)
          
        }
       
      </div>
      :

    <div className='px-10 mx-10'>

      {
        displayReview.map(review => 
          <Review key={review._id}
          review={review}></Review>)
      }
      
    </div>
}

</div>



     


     
            
        </div>
    );
};

export default ServiceDetails;
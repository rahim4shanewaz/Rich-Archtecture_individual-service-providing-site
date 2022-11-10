// import { faComment } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../../Context/ContextApi';

// const AddReview = ({service}) => {

//     const {user} = useContext(AuthContext);

//     const handlePlaceReview = event => {


      


//         event.preventDefault();
//         const form = event.target;
//         const review = form.review.value;
        
        
       
//         const rating = parseInt(form.rating.value)


//         console.log(review,rating );

//         const reviews = {
//             review: review,
//             rating: rating,
//             email: user.email,
//             id: service._id,
//             user
//         }


//         fetch('https://assignment-11-sever.vercel.app/addreview', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//                 authorization: `Bearer ${localStorage.getItem('RC-token-login')}`
               
//             },
//             body: JSON.stringify(reviews)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 if(data.acknowledged){
//                     alert('reviews placed successfully')
//                     form.reset();
                    
//                 }
//             })
//             .catch(er => console.error(er));
//     }


//     return (
//         <div className='w-full min-h-screen mt-5' >
//             <div className='flex flex-col min-h-screen w-full justify-center items-center'>
//             <div className='text-2xl text-center'>
//                 <FontAwesomeIcon className='text-6xl' icon={faComment}></FontAwesomeIcon>
//                <div className='p-10'>
//                <h1 className='headerFont font-bold text-4xl'> AD YOUR REVIEW</h1>
//                <h1>{service._id}</h1>
//                </div>
//             </div>

            
//                               <div>
//                               <form onSubmit={handlePlaceReview} >
                                 
//                                  <div className='flex gap-5'>
//                                  <div className="form-control">
                                      
//                                       <input type="text" name='review' placeholder="Add Your Review"  className=" p-2 pl-0 outline-none  w-full mb-5  border-b-2 border-gray-400" />
//                                   </div>

                                
//                                   <div className="form-control">
                                     
//                                       <input type="text" name='rating' placeholder="Give Your Rating" className=" p-2 pl-0 outline-none  w-full mb-5  border-b-2 border-gray-400" />
//                                   </div>
//                                  </div>

//                                    <div className="form-control">
//                                            <button className="btn mt-3 max-w-xs rounded-none btn-sm btn-outline">Submit</button>
  
//                                    </div>
       
//                                </form>
//                               </div>
            
//         </div>
//         </div>
//     );
// };

// export default AddReview;
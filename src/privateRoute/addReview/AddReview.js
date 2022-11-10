import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/ContextApi';

const AddReview = () => {

    const {user} = useContext(AuthContext);
    const [review, setReview] = useState([])

    const handlePlaceReview = event => {


        event.preventDefault();
        const form = event.target;
        const review = form.title.value;
        
        
       
        const rating = parseInt(form.rating.value)


        console.log(review,rating );

        const service = {
            review: review,
            rating: rating,
            user
        }


        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
               
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){

                    if (data.deletedCount > 0) {


                        alert('deleted successfully');
                        const remaining = review.filter(odr => odr._id !== id);
                        setReview(remaining);





                    }
                    alert('service placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));
    }


    return (
        <div className='w-full' >
            <div className='flex flex-col min-h-screen w-full justify-center items-center'>
            <div className='text-2xl text-center'>
                <FontAwesomeIcon className='text-6xl' icon={faComment}></FontAwesomeIcon>
               <div className='p-10'>
               <h1 className='headerFont font-bold text-4xl'> AD YOUR REVIEW</h1>
               </div>
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
                                 </div>

                                   <div className="form-control">
                                           <button className="btn mt-3 max-w-xs rounded-none btn-sm btn-outline">Submit</button>
  
                                   </div>
       
                               </form>
                              </div>
            
        </div>
        </div>
    );
};

export default AddReview;
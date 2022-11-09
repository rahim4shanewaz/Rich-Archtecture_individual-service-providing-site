import React, { useContext } from 'react';
import { AuthContext } from '../../Context/ContextApi';

const AddReview = () => {

    const {user} = useContext(AuthContext);

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
                    alert('service placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));
    }


    return (
        <div>
             <form onSubmit={handlePlaceReview} >
                                 
                                 <div className="form-control">
                                       <label className="label">
                                           <span className="label-text"> Add Your Review </span>
                                       </label>
                                       <input type="text" name='review' placeholder="Review" className="input input-bordered rounded-none input-sm w-full " />
                                   </div>
                                   <div className="form-control">
                                       <label className="label">
                                           <span className="label-text">Rating</span>
                                       </label>
                                       <input type="text" name='rating' placeholder="rating" className="input input-bordered rounded-none input-sm w-full " />
                                   </div>

                                   <div className="form-control">
                                           <button className="btn mt-3 max-w-xs rounded-none btn-sm btn-outline">Add Your Services</button>
  
                                   </div>
       
                               </form>
            
        </div>
    );
};

export default AddReview;
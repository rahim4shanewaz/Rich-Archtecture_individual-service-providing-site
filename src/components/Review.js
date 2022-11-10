import React from 'react';

const Review = ({review}) => {
    return (
        <div className='mb-5 p-5 bg-slate-50 '>

            <div className='flex gap-5'>
                            <div>
                            <mark class="highlighted_selection" >
                                <div className="avatar">
                                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                      
{review?.user ?

                                                         <div title={review.user.displayName}>
                                                        <img src={review.user.photoURL} alt="" /> 
                                                        </div>
                                                      :
                                                        <div title={review.name}>
                                                        <img src={review.img} alt="" /> 
                                                        </div>
}
                                            </div>
                                            </div></mark>
                                            
                            </div>
 {review?.user ?
                                    <div>
                                        <p className='text-green-400 font-bold text-xl'>{review.user.displayName}</p>
                                        <p>{review.review}</p>
                                     </div>


                                     :
                                   
                                    <div>
                                        <p className='text-green-400 font-bold text-xl'>{review.name}</p>
                                        <p>{review.review}</p>
                                     </div>
}

            </div>





            
        </div>
    );
};

export default Review;
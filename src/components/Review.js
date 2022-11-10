import React from 'react';

const Review = ({review}) => {
    return (
        <div className='mb-5'>

            <div className='flex gap-5'>
                            <div>
                            <mark class="highlighted_selection" >
                                <div className="avatar">
                                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <div title={review.name}>
                                                        <img src={review.img} alt="" /> 
                                                        </div>
                                                    
                                            </div>
                                            </div></mark>
                                            
                            </div>
                                         <div>
                                        <p>{review.review}</p>
                                     </div>

            </div>





            
        </div>
    );
};

export default Review;
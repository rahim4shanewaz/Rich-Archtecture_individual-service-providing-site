import React from 'react';

const NewReview = ({newReview}) => {
    return (
        <div className='mb-5  p-10 sdw'>

<div className='flex gap-5'>
                            <div>
                            <mark class="highlighted_selection" >
                                <div className="avatar">
                                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <div title={newReview.user.displayName}>
                                                        <img src={newReview.user.photoURL} alt="" /> 
                                                       
                                                        </div>
                                                    
                                            </div>
                                            </div></mark>
                                            
                            </div>
                                         <div>
                                        <p>{newReview.review}</p>
                                     </div>

            </div>
            
        </div>
    );
};

export default NewReview;
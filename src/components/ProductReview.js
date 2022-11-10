import React, { useEffect, useState } from 'react';


const ProductReview = ({service}) => {

    const [displayReview, setReview] = useState([])

    useEffect(() => {
        fetch(`https://assignment-11-sever.vercel.app/productreviews?id=${service?._id}`)
            .then(res => res.json())
            
            .then(data => setReview(data)
            )
    }, [service?._id])

  

    return (

        
        <div>
            <h1>review: {displayReview.length}</h1>


     
            
            
        </div>
    );
};

export default ProductReview;
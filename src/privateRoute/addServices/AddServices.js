import React, { useContext } from 'react';

import { AuthContext } from '../../Context/ContextApi';

const AddServices = () => {

    const {user} = useContext(AuthContext);


    const handlePlaceService = event => {


        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = parseInt(form.price.value)
        const length = parseInt(form.length.value);
        const img = form.img.value;
        const descriptions = form.descriptions.value;
        const rating = parseInt(form.rating.value)


        console.log(title,price,length,img,descriptions,rating );

        const service = {

            title: title,
            img: img,
            price: price,
            length: length,
            rating: rating,
            description: descriptions,
            email: user.email,
            timestamp1: Date(),
            timestamp2: new Date(),

            user
        }


        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
               
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
        <div className="  bg-base-200 relative  lg:flex ">
        
        <div className='bg-green-700   lg:w-2/5 lg:flex justify-end items-center absolute   '>
        </div>




        <div className='bg-slate-50 lg:w-full py-10 flex items-center  mx-auto  '>
        <div className=' bg-white sm:h-full   sm:w-full rounded-xl  lg:w-3/5 mx-auto drop-shadow-xl flex justify-center items-center  sdw'>



        <div className=''>
                            <div>
                                <h1 className='text-2xl text-center mt-5 mb-5'>Add Your Services</h1>
                            </div>
                            <div>
                            <form onSubmit={handlePlaceService} >
                                 
                                 <div className="form-control">
                                       <label className="label">
                                           <span className="label-text"> Services Title </span>
                                       </label>
                                       <input type="text" name='title' placeholder="title" className="input input-bordered rounded-none input-sm w-full " />
                                   </div>

                                   <div className='flex gap-2'>
                                   <div className="form-control">
                                       <label className="label">
                                           <span className="label-text">Price</span>
                                       </label>
                                       <input type="text" name='price' placeholder="price" className="input input-bordered rounded-none input-sm w-full " />
                                   </div>
                                   <div className="form-control">
                                       <label className="label">
                                           <span className="label-text"> Duration Length (days)  </span>
                                       </label>
                                       <input type="text" name='length' placeholder="length" className="input input-bordered rounded-none input-sm w-full " />
                                   </div>
                                   </div>
                                 
                                 

                                 <div className="form-control">
                                       <label className="label">
                                           <span className="label-text">Image URL</span>
                                       </label>
                                       <input type="text" name='img' placeholder="URL" className="input input-bordered w-full rounded-none " />
                                   </div>



                                   <div className="form-control">
                                       <label className="label">
                                           <span className="label-text">Descriptions</span>
                                       </label>
                                       {/* <input type="text" name='email' placeholder="Descriptions" className="input input-bordered rounded-none  w-full " /> */}

                                       <textarea name="descriptions" className="textarea textarea-bordered h-24 w-full" placeholder="Descriptions" required></textarea>
                                   </div>








                                   <div className="form-control">
                                           <label className="label">
                                               <span className="label-text">Rating</span>
                                           </label>
                                           <input type="text" name='rating' placeholder="rating" className="input input-bordered rounded-none  w-full max-w-xs" />


                                         
                                           <button className="btn mt-3 max-w-xs rounded-none btn-sm btn-outline">Add Your Services</button>
  
                                   </div>
       
                               </form>

                            </div>

        </div>

        </div>

        </div>

        </div>
    );
};

export default AddServices;
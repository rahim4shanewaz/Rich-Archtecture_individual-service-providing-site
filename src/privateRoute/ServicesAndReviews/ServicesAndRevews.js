import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/ContextApi';


import 'react-toastify/dist/ReactToastify.css';
import useHooks from '../../components/UseHooks';

const ServicesAndRevews = () => {
    useHooks('My Service&Reviews')


    const { user, logOut } = useContext(AuthContext);
    const [services, setService] = useState([])
    const [reviews, setReview] = useState([])
    
   


    useEffect(() => {
        fetch(`https://assignment-11-sever.vercel.app/userServices?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('RC-token-login')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setService(data);
            })
    }, [user?.email, logOut])

    useEffect(() => {
        fetch(`https://assignment-11-sever.vercel.app/userreviews?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('RC-token-login')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReview(data);
            })
    }, [user?.email, logOut])







    const notify1 = () => toast("Service Deleted");

    const handleDeleteService= id => {
        const proceed = window.confirm('Are you sure, you want to cancel this Service');
        if (proceed) {
            fetch(`https://assignment-11-sever.vercel.app/service/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('RC-token-login')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        notify1();
                        const remaining = services.filter(rev => rev._id !== id);
                        setService(remaining);
                    }
                })
        }
    }











    const notify = () => toast("Review Deleted");

    
    const handleDeleteReview = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this Review');
       
    if (proceed) {
            fetch(`https://assignment-11-sever.vercel.app/review/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('RC-token-login')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                       
                        notify()
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReview(remaining);
                    }
                })
        
    }

    }

   
    return (
        

        <div className=' p-5 m-10 mt-10 '>

<div className='text-center headerFont mb-7'>
                <p className="text-2xl font-bold text-orange-600">Rich Architecture</p>
                <h2 className="text-5xl font-semibold">Users Services and Reviews</h2>
                <p className='text-xl font-bold'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
          
            <div>
               

               <div className='grid lg:grid-cols-2'>


                    <div>
                    <h1 className='text-center text-4xl mb-5'>Your Services</h1>
                        <hr />
                    {
                            services.map(service => <div className='p-2 m-2 ' key={service._id}>

                            <div className='flex gap-3 justify-center'>
                            <div className='p-3 mb-1 bg-slate-50 '>
                                 
                                    <p className='text-xl'><span className='font-bold'>Service:</span> {service.title}</p>
                                </div>

                                <div>
                            <button onClick={() => handleDeleteService(service._id)}  title='delete' ><span className='text-red-800 bg-black p-1'>Delete this service</span></button>
                            </div>
                            </div>





                            </div> )
                            }
                    </div>
                
                    <div>
                        <h1 className='text-center text-4xl mb-5'>Your Reviews</h1>
                        <hr />
                    {
                        reviews.map(review =>  <div className='p-2 m-2 ' key={review._id}> 


                        <div className='lg:flex gap-3 mb-5 justify-center'>
                        <div className='p-3 mb-1 bg-slate-50 '>
                            <p className='text-xl'><span className='font-bold'>Service:</span> {review.title}</p>
                            <p className='text-xl'><span className='font-bold'>Review:</span>: {review.review}</p>
                            <p className='text-xl'><span className='font-bold'>Rating:</span>: {review.rating} /5</p>

                        </div>
                        <div>
                        <button  onClick={() => handleDeleteReview(review._id)} title='delete' ><span className='text-red-800 border p-1'>Delete this review</span></button>
                        </div>
                        </div>
                        

                        </div>    )
                        }
                    </div>
              
               </div>


            </div>
        </div>
    );
};

export default ServicesAndRevews;
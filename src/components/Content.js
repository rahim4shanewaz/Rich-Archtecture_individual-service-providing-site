import React from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
    return (
        <div>
            <div className="hero min-h-screen headerFont" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1606744824163-985d376605aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className=" text-5xl font-bold">Hello there </h1><br /> <h1 className='text-xl mb-5'>Looking or best Interior Design Services?</h1>
      <h2 className='text-2xl'>TRY</h2>
      <p className="mb-5 text-4xl"> <span>Rich Architecture</span> </p>
     <Link to={'/allservices'}> <button className="btn btn-outline rounded-none btn-success">Get Started</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Content;
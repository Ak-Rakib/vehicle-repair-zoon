import React from 'react';
import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row mb-14 mt-8">
               <div className='w-1/2 relative'>
               <img src={person} alt='' className="rounded-lg shadow-2xl w-4/5"/>
               <img src={parts} alt='' className="rounded-lg shadow-2xl absolute right-5 w-3/5 top-1/2  border-8"/>
               </div>
                <div className='w-1/2'>
                <p className='text-bold'>About us</p>
                <h1 className="text-5xl font-bold my-3">We are qualified & of experience in this field</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-outline">Get more Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
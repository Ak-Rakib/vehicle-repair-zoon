import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <p className='font-bold'>Service</p>
                <h1 className='font-bold text-5xl my-3'>Our Service Area</h1>
                <p>
                    the majority have suffered alteration in some form, by injected humour, <br />
                    or randomised words which don't look even slightly believable.
                </p>
            </div>
            <div className='grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
                {
                    service.map(services => <ServiceCard
                        key={services._id}
                        services={services}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline">More Services</button>
            </div>
        </div>
    );
};

export default Service;
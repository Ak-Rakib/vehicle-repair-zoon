import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ services }) => {
    const {_id, img, title, price } = services;
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img src={img} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='font-bold'>Price:$<span>{price}</span> </p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`}>
                            <button className="btn btn-outline"><FaArrowAltCircleRight></FaArrowAltCircleRight></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
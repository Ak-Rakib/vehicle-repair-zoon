import React from 'react';
import { FaArrowAltCircleRight, FaCalendar, FaPhone, FaSearchLocation } from 'react-icons/fa';

const Contac = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center mt-12'>
            <div>
                <div className='d-flex align-center'>
                    <FaCalendar></FaCalendar>
                </div>
                <div>
                    <p>
                        We are open monday-friday
                    </p>
                    <p>
                        7:00 am - 9:00 pm
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <FaPhone></FaPhone>
                </div>
                <div>
                    <p>
                        Have a question?
                    </p>
                    <p>
                        +2546 251 2658
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <FaSearchLocation></FaSearchLocation>
                </div>
                <div>
                    <p>
                        Need a repair? our address
                    </p>
                    <p>
                        Liza Street, New York
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contac;
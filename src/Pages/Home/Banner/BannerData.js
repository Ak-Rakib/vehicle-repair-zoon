import React from 'react';
import './BannerData.css'

const BannerData = ({slide}) => {

    const {image, prev, id, next} = slide;
    return (
            <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} alt='' className="w-full rounded-xl"/>
                </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2  top-1/4">
                    <h1 className=' font-bold text-5xl ml-24'>
                        Affordable <br />
                        price for car <br />
                        servicing
                    </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2  top-1/2">
                    <p className='ml-24 max-w-md'>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2  top-3/4 ml-24">
                    <button className="btn btn-outline mr-5">Discover more</button>
                    <button className="btn btn-outline">Latest Project</button>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                    </div>
            </div>
    );
};

export default BannerData;
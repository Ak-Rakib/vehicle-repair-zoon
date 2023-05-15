import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contac from '../Contact/Contac';
import Product from '../Product/Product';
import Service from '../Service/Service';
import Team from '../Team/Team';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Service></Service>
           <Contac></Contac>
           <Product></Product>
           <Team></Team>
        </div>
    );
};

export default Home;
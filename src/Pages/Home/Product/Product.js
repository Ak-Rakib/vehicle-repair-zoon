import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <div className='mt-12 text-center'>
                <p className='font-bold'>Popular Products</p>
                <h1 className='font-bold text-5xl my-3'>Browse Our Products</h1>
                <p>the majority have suffered alteration in some form, by injected humour, <br />
                    or randomised words which don't look even slightly believable. </p>
                <h1>Total products: {products.length}</h1>
            </div>
            <div className='grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product = {product}
                    ></ProductCard>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline">More Products</button>
            </div>
        </div>
    );
};

export default Product;
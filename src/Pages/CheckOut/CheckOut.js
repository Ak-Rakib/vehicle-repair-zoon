import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../ContextProvider/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const checkOutData = useLoaderData();

    const checkOutHandler = event => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const phone = form.contactNumber.value;
        const email = user?.email || 'unregister'
        const message = form.message.value;


        const orders = {
            Service: checkOutData._id,
            ServiceName: checkOutData.title,
            email,
            phone,
            Customer: name,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order send successfully')
                    form.reset();
                }
            })
            .catch(error => console.log(error))
    }


    return (
        <div>
            <h1>Title:{checkOutData.title}</h1>
            <h1>price: ${checkOutData.price}</h1>
            <form onSubmit={checkOutHandler}>
                <div className='grid grid-cols-1 lg:grid-cols-2 m-12 gap-5'>
                    <input type="text" name='firstName' placeholder="First Name" className="input input-bordered input-success w-full mb-10 " />
                    <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered input-success w-full mb-10 " />
                    <input type="text" name='contactNumber' placeholder="Contact Number" className="input input-bordered input-success w-full mb-4 " />
                    <input type="text" name='email' placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered input-success w-full  " />
                    <textarea name='message' className="textarea textarea-success" placeholder="Bio"></textarea>
                </div>
                <div className='text-center'>
                    <input type="submit" className="btn btn-outline mr-3" value="Submit" />
                    <Link to='/order'>
                        <input type="submit" className="btn btn-outline" value="Place Order" />
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;
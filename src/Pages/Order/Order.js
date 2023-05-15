import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import OrderTable from './OrderTable';

const Order = () => {
    const { user, logOut } = useContext(AuthContext)
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${ localStorage.getItem('motor-token')}`
            }
        })
            .then(res => {
              if(res.status === 401 || res.status === 403){
               return logOut();
              }
              return res.json()
            })
            .then(data =>{ 
                console.log(data)
                // setOrder(data)
            })
    }, [user?.email])


    const deleteHandler = id => {
        const proceed = window.confirm('You want to delete this item?')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('delete successfully')
                        const remaining = order.filter(data => data._id !== id)
                        setOrder(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <h1>Total order: {order.length}</h1>
            <div className="overflow-x-auto w-full mb-8 mt-8">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="button" className="btn btn-outline" value='X' />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Servicing</th>
                            <th>message</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order?.map(orders => <OrderTable
                                key={orders._id}
                                orders={orders}
                                deleteHandler={deleteHandler}
                            ></OrderTable>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='text-center'>
                <Link to='/'>
                    <input type="submit" className="btn btn-outline mr-3" value="Back page" />
                </Link>
            </div>
        </div>
    );
};

export default Order;
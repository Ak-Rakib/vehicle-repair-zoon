import React, { useEffect, useState } from 'react';

const OrderTable = ({ orders, deleteHandler }) => {
    const { ServiceName, Customer, message, Service, _id } = orders;
    const [serviceOrder, setServiceOrder] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${Service}`)
            .then(res => res.json())
            .then(data => setServiceOrder(data))
    }, [Service])

    return (
        <tr>
            <th>
                <label>
                    <input onClick={() => deleteHandler(_id)} type="button" className="btn btn-outline" value='X' />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                serviceOrder?.img &&
                                <img src={serviceOrder.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{Customer}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {ServiceName}
                <br />
                <span className="badge badge-ghost badge-sm">{ServiceName}</span>
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">{message}</button>
            </th>
        </tr>
    );
};

export default OrderTable;
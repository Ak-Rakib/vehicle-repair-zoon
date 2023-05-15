import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthProvider';

const PrivateRoute = ({Children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation();

    if(loader){
        return <h1>Loading....</h1>
    }

    if(user){
        return Children;
    }
    return <Navigate to="/login" state={ {from:location}} replace ></Navigate>
};

export default PrivateRoute;
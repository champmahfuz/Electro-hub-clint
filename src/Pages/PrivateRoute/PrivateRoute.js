import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    /* Privete Route need hook and user email. so Dont touch this code or remove this comment untill hook create. */

    // const { user, isLoading } = useAuth();
    // let location = useLocation();
    // if (isLoading) {
    //     return <Spinner animation="border" variant="danger" />
    // }
    // return user.email ? children : (<Navigate to="/login" state={{ from: location }} />)
};

export default PrivateRoute;
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useContext(AuthContext); // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return user ? <Outlet {...rest}>{children}</Outlet> : <Navigate to="/login" />;
}
export default PrivateRoute;


// import React, { useContext } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import AuthContext from '../context/AuthContext';

// const PrivateRoute = () => {
//     const { user } = useContext(AuthContext);

//     // If user is authenticated, render the child elements
//     // If not, navigate to the login page
//     return user ? <Outlet /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;

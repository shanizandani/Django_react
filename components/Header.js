import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div>
      <Link to="/"> Home</Link>
      <span> | </span>
      {user ? (
        <React.Fragment>
          <p>Hello {user.username}</p>
          <p onClick={logoutUser}>Logout</p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link to="/login">Login</Link>
          <span> | </span>
          <Link to="/register">Register</Link>
          <span> | </span>
          <Link to="/forgot-password" className='text-danger'>Forgot Password?</Link>
        </React.Fragment>

      )}
    </div>
  );
};

export default Header;





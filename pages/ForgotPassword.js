import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ForgotPassword = () => {
  const { initiatePasswordReset } = useAuth();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const success = await initiatePasswordReset(email);
      if (success) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Password reset request failed:', error);
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <p>An email with instructions to reset your password has been sent to your email address.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Enter your email address:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
      <p>
        Remember your password? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;




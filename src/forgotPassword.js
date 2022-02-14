import React from 'react';
import './App.css';
import { useHistory} from 'react-router-dom';
import signUp from './signUp';

function forgotPassword() {
  return (
    <div className="App">
      <h1>Forgot password</h1>
      <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="name@email.com" />
          </div>
          <div className="input-group">
            <label htmlFor="secret">secret</label>
            <input type="secret" name="secret" />
          </div>
          <button htmlFor='signin' className="primary">Sign In</button>
    </div>

  );
}

export default forgotPassword;

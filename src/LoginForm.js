import React from 'react';
import './App.css';
import { useHistory} from 'react-router-dom';
import signUp from './signUp';

function LoginForm() {
  return (
    <div className="App">
      <h1>Sign In</h1>

      <p>Don't have an account? <a href="/signUp">Sign Up</a></p>

      <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="name@email.com" />
          </div>
          <div className="input-group">
            <label htmlFor="password">password</label>
            <input type="password" name="password" />
          </div>
          <a href="/forgotPassword">forgot your password?</a>
          <br/>
          <button htmlFor='signin' className="primary"><a href="/comment">Sign In</a></button>
    </div>

  );
}

export default LoginForm;

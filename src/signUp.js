import React from 'react';
import './App.css';
import { useHistory} from 'react-router-dom';
import LoginForm from './LoginForm';

function signUp() {
  return (
    <div className="App">
      <h1>Sign Up</h1>

      <p>Already have an account? <a href="/">Sign in</a></p>

      <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="name@email.com" />
          </div>
          <div className="input-group">
            <label htmlFor="password">password</label>
            <input type="password" name="password" />
          </div>
          <div className="input-group">
            <label htmlFor="secret">secret</label>
            <input type="secret" name="secret" />
          </div>
          <br/>
          <button htmlFor='signin' className="primary">Sign Up</button>
          <p> By clicking the "Sign Up" button you are creating an<br/> account, and you agree to the Terms of Use.</p>
    </div>

  );
}

export default signUp;

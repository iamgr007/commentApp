import React from 'react';
import './App.css';
import InputField from './InputField';

function App() {
  return (
    <div className="App">
      <h1>Sign In</h1>

      <p>Don't have an account? <span>Sign Up</span></p>

      <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="nome@email.com.br" />
          </div>
          <div className="input-group">
            <label htmlFor="password">password</label>
            <input type="password" name="password" />
          </div>
          <span>forgot your password?</span>
          <button htmlFor='signin' className="primary">Sign In</button>
    </div>

  );
}

export default App;

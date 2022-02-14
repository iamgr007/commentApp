import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ForgotPassword from "./forgotPassword"
import Sign from './signUp';
import LoginForm from './LoginForm';
import Comment from "./comment"

function App() {
  return (

    <Router>
            <Routes>
                <Route path="/" element={<LoginForm/>}>
                </Route>
                <Route path="/signUp" element={<Sign/>}>
                </Route>
                <Route path="/forgotPassword" element={<ForgotPassword/>}>
                </Route>
                <Route path="/comment" element={<Comment/>}>
                </Route>
            </Routes>
        </Router>

  );
}

export default App;

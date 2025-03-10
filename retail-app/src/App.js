import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import './styles.css';

const App = () => (
  <Router>
    <div className="navbar">
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
    </div>
    
    <Routes>
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;

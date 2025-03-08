import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is a dynamic React application with React Router.</p>
      
      <h2>See Posts:</h2>
      <ul>
        <li><Link to="/post/1">Post 1</Link></li>
        <li><Link to="/post/2">Post 2</Link></li>
        <li><Link to="/post/3">Post 3</Link></li>
      </ul>
    </div>
  );
};

export default Home;

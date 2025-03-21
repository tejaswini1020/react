import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Post from "./Post"; 
import NotFound from "./NotFound"; 
import "./Styles.css";  

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:id" element={<Post />} /> 
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;

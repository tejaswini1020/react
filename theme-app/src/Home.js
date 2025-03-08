import React, { Suspense } from "react";
import { useTheme } from "./ThemeContext";

const lazyWithDelay = (importFunc, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(importFunc()), delay));

const About = React.lazy(() => lazyWithDelay(() => import("./About"), 2000)); 
const Contact = React.lazy(() => lazyWithDelay(() => import("./Contact"), 3000)); 

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Welcome to the {theme} theme!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Suspense fallback={<div>Loading about section...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading contact section...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
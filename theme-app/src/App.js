import React, { Suspense, useState } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./styles.css";

// Lazy Load Components
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

const App = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </ThemeProvider>
  );
};

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div>
      <h1>Welcome to the {theme} theme!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>

    
      <button onClick={() => setShowAbout(!showAbout)}>
        {showAbout ? "Hide About" : "Show About"}
      </button>
      <button onClick={() => setShowContact(!showContact)}>
        {showContact ? "Hide Contact" : "Show Contact"}
      </button>

      {showAbout && (
        <Suspense fallback={<div>Loading about section...</div>}>
          <About />
        </Suspense>
      )}

      {showContact && (
        <Suspense fallback={<div>Loading contact section...</div>}>
          <Contact />
        </Suspense>
      )}
    </div>
  );
};

export default App;

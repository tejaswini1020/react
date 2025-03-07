import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [article1, setArticle1] = useState({});
  const [article2, setArticle2] = useState({});

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles") 
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data); 
        if (data.results && data.results.length >= 2) {
          setArticle1(data.results[0]); 
          setArticle2(data.results[1]); 
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      
      <button className="toggle-button" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>

      {isVisible && <p className="toggle-text">This is Group2 capstone miniproject<br/>This is a toggled text!</p>}

      <h2>Latest Spaceflight News</h2>
      {article1.title && (
        <div className="post-item">
          <h3>{article1.title}</h3>
          <p>{article1.summary}</p>
          {article1.image_url && <img src={article1.image_url} alt="Article 1" className="article-image" />}
        </div>
      )}

      {article2.title && (
        <div className="post-item">
          <h3>{article2.title}</h3>
          <p>{article2.summary}</p>
          {article2.image_url && <img src={article2.image_url} alt="Article 2" className="article-image" />}
        </div>
      )}
    </div>
  );
};

export default App;
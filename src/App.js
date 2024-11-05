import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';

function Home() {
  return (
    <div className="content">
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
    </div>
  );
}

function About() {
  return (
    <div className="content">
      <h1>About</h1>
      <p>This is the About page.</p>
    </div>
  );
}

function Todos() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('An error occurred while fetching data');
        setLoading(false);
      });
  }, []);

  return (
    <div className="content">
      <h1>Todos</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/todos">Todos</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>

      <style jsx="true">{`
        /* General styling */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .app {
          font-family: Arial, sans-serif;
          text-align: center;
        }
        
        .navbar {
          background-color: #333;
          padding: 10px;
        }
        
        .navbar ul {
          list-style-type: none;
          display: flex;
          justify-content: center;
        }
        
        .navbar li {
          margin: 0 15px;
        }
        
        .navbar a {
          color: white;
          text-decoration: none;
          font-size: 18px;
        }
        
        .navbar a:hover {
          color: #ff5733;
        }
        
        .content {
          padding: 20px;
        }
        
        .content h1 {
          color: #333;
        }
        
        .content p {
          color: #555;
        }
        
        .content ul {
          list-style-type: none;
          padding: 0;
        }
        
        .content li {
          margin: 10px 0;
          font-size: 16px;
        }
      `}</style>
    </Router>
  );
}

export default App;

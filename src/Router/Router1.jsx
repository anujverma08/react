import React from "react";
import { BrowserRouter as Router, Route, Link,Routes } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
const Services = () => {
  return (
    <div>
      <h1>Services</h1>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav>
      <ul style={styles.nav}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/about" style={styles.link}>
            About
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/services" style={styles.link}>
            Services
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/contact" style={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

// function Router1() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/about"element =  {<About /> } />
//           <Route path="/contact" element = {<Contact />} />
//           <Route path="/" element = { <Home />} />
//         </Routes>
//       </div>
//     </Router>
//   );

  
// }

const styles = {
  nav: {
    background: '#333',
    padding: '10px'
  },
  ul: {
    display: 'flex',
    listStylesType: 'none',
    margin: 0,
    padding: 0,
  },
  li: {
    display: 'inline',
    marginRight: '20px',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
};

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;






// Homepage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file for styling

const Homepage = () => {
  return (
    <div>
      <div className="homepageContainer">
        <div className="textSection">
          <h2>Manage your finances in a single application...!</h2>

        </div>
        <div className="bottom-buttons">
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
          <Link to="/signup">
            <button className="signup-button">Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

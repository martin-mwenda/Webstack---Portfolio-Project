import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-task">Add Task</Link></li>
        {/* Add more navigation links here */}
      </ul>
    </nav>
  );
};

export default Navbar;

import { NavLink, Link } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2><Link to={`/`}>Blog</Link></h2>

      <ul>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            id="new-btn"
            to="/new"
          >
            Novo Post
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            
            to="/admin"
          >
            Adiministração
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

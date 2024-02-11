import { NavLink } from "react-router-dom";


const Nav = () => (
  <nav className="header__nav">
    <ul className="header__nav-list">
      <li className="header__nav-item">
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "purple" : "black" })}
        >
          Home
        </NavLink>
      </li>
      <li className="header__nav-item">
        <NavLink
          to="/misdemeanour"
          style={({ isActive }) => ({ color: isActive ? "purple" : "black" })}
        >
          Misdemeanour
        </NavLink>
      </li>
      <li className="header__nav-item">
        <NavLink
          to="/confession"
          style={({ isActive }) => ({ color: isActive ? "purple" : "black" })}
        >
          Confession
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="header__nav">
    <ul className="header__nav-list">
      <li className="header__nav-item">
        <NavLink to="/" className="text-white hover:text-gray-300" activeClassName="font-bold">
          Home
        </NavLink>
      </li>
      <li className="header__nav-item">
        <NavLink to="/misdemeanour" className="text-white hover:text-gray-300" activeClassName="font-bold">
          Misdemeanour
        </NavLink>
      </li>
      <li className="header__nav-item">
        <NavLink to="/confession" className="text-white hover:text-gray-300" activeClassName="font-bold">
          Confession
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;

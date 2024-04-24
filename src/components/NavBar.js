import { NavLink } from "react-router-dom";
import "../NavBar.css";

/* define the NavBar component */
function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/" /* add styling to Navlink */ className="nav-link">
          {" "}
          Home{" "}
        </NavLink>
        <NavLink to="/directors" className="nav-link">
          {" "}
          Directors
        </NavLink>
        <NavLink to="/actors" className="nav-link">
          Actors{" "}
        </NavLink>
        <NavLink to="/movie/:id" className="nav-link">
          {" "}
          movie{" "}
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;

import { NavLink } from "react-router-dom";

const NavItem = ({ label, link }) => {
  return (
    <div className="nav_items">
      <NavLink
        to={label === "Home" ? "/" : link}
        className={({ isActive }) =>
          isActive ? "nav_link active" : "nav_link"
        }
      >
        {label}
      </NavLink>
    </div>
  );
};

export default NavItem;

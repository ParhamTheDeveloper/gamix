import { NavLink } from "react-router-dom";
import "./Link.css";

const Link = ({ children, className, to }) => {
  return (
    <NavLink
      className={`Link Transition ${className}`}
      to={to}
      style={({ isActive }) => {
        if (isActive) {
          return { color: "rgb(111 255 233)" };
        }
      }}
    >
      {children}
    </NavLink>
  );
};

export default Link;

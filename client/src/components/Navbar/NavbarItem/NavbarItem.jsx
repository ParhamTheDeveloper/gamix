import "./NavbarItem.css";
import { Link } from "../../Link";

const Item = ({ children, link }) => {
  return <div className="Navbar-Item">
    <Link to={link}>{children}</Link>
  </div>;
};

export default Item;

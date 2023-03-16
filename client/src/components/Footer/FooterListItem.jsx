import "./FooterListItem.css";
import { Link } from "../Link";

const FooterListItem = ({ children, link }) => {
  return (
    <li className="Footer-List-Item">
      <Link to={link}>{children}</Link>
    </li>
  );
};

export default FooterListItem;

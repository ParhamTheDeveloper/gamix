import "./SidebarItem.css";
import { Button } from "../Button";

const SidebarItem = ({ children, link, icon }) => {
  return (
    <Button link={link} className="Sidebar-Item">
      {icon} {children}
    </Button>
  );
};

export default SidebarItem;

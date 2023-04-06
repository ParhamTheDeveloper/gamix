import "./Menu.css";
import { forwardRef, useContext } from "react";
import { BoxArrowLeft, Mortarboard, Person } from "react-bootstrap-icons";
import Item from "./Item";
import { AuthContext } from "../../../../../shared/contexts/auth.context";
import { useNavigate } from "react-router-dom";
import { useScrollToTop, useTitle } from "../../../../../hooks";

const Menu = forwardRef(({ onClicks = [] }, ref) => {
  const { onLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  useTitle("داشبورد");
  useScrollToTop();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  const items = [
    {
      children: "حساب کاربری",
      icon: <Person />,
      onClick: onClicks[0],
    },
    {
      children: "دوره های من",
      icon: <Mortarboard />,
      onClick: onClicks[1],
    },
    {
      children: "خروج",
      className: "!text-red-500",
      icon: <BoxArrowLeft />,
      onClick: handleLogout,
    },
  ];

  return (
    <div ref={ref} className="Dashboard-Header-Menu Transition">
      {items.map((item, index) => (
        <Item key={index} icon={item.icon} onClick={item.onClick}>
          {item.children}
        </Item>
      ))}
    </div>
  );
});

export default Menu;

import "./Menu.css";
import { forwardRef, useContext } from "react";
import { BoxArrowLeft, Mortarboard, Person } from "react-bootstrap-icons";
import Item from "./Item";
import { AuthContext } from "../../../../../shared/contexts/auth.context";
import { useNavigate } from "react-router-dom";
import { useScrollToTop, useTitle } from "../../../../../hooks";

const Menu = forwardRef((props, ref) => {
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
    },
    {
      children: "دوره های من",
      icon: <Mortarboard />,
    },
    {
      children: "خروج",
      className: "!text-red-500",
      onClick: handleLogout,
      icon: <BoxArrowLeft />,
    },
  ];

  return (
    <div ref={ref} className="Dashboard-Header-Menu Transition Active-Blur">
      {items.map((item, index) => (
        <Item key={index} icon={item.icon} onClick={item.onClick}>
          {item.children}
        </Item>
      ))}
    </div>
  );
});

export default Menu;

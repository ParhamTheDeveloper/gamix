import "./Navbar.css";
import Item from "./NavbarItem/NavbarItem";
import { Button } from "../Button";
import { Sidebar } from "../Sidebar";
import { AuthContext } from "../../shared/contexts/auth.context";
import { useContext, useRef } from "react";
import {
  BoxArrowInRight,
  Collection,
  House,
  List,
  Person,
} from "react-bootstrap-icons";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navbarRef = useRef(null);
  const sidebarRef = useRef(null);
  const items = [
    {
      content: "صفحه اصلی",
      link: "/",
      icon: <House />,
    },
    {
      content: "دوره ها",
      link: "/courses",
      icon: <Collection />,
    },
    {
      content: "درباره ما",
      link: "about-us",
      icon: <Person />,
    },
  ];

  const handleClickSidebar = () => {
    sidebarRef.current.classList.toggle("active");
  };

  window.addEventListener("scroll", () => {
    navbarRef.current.classList.toggle("Active-Blur", window.scrollY);
    navbarRef.current.classList.toggle("Navbar-Active-Blur", window.scrollY);
  });

  return (
    <>
      <nav ref={navbarRef} className="Navbar Transition">
        <div className="Navbar-Container Container">
          <div className="Navbar-Icon">گیمیکس</div>
          <div className="Navbar-List">
            {items.map((item, index) => (
              <Item key={index} link={item.link}>
                {item.content}
              </Item>
            ))}
          </div>
          <Button
            className="Navbar-Sidebar-Toggler"
            onClick={handleClickSidebar}
          >
            <List className="text-2xl" />
          </Button>
          {user && (
            <Button link="dashboard" className="!px-3">
              <Person className="text-2xl" />
            </Button>
          )}
          {!user && (
            <Button link="login">
              ورود <BoxArrowInRight className="text-2xl" />
            </Button>
          )}
        </div>
      </nav>
      <Sidebar ref={sidebarRef} items={items} />
    </>
  );
};

export default Navbar;

import "./Navbar.css";
import * as Icons from "react-bootstrap-icons";
import Item from "./NavbarItem";
import { Button } from "../Button";
import { useRef } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const navbarRef = useRef(null);
  const sidebarRef = useRef(null);
  const items = [
    {
      content: "صفحه اصلی",
      link: "/",
      icon: <Icons.House />,
    },
    {
      content: "دوره ها",
      link: "/courses",
      icon: <Icons.Collection />,
    },
    {
      content: "درباره ما",
      link: "about-us",
      icon: <Icons.Person />,
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
            <Icons.List className="text-2xl" />
          </Button>
          <Button link="login">
            ورود <Icons.BoxArrowInRight className="text-2xl" />
          </Button>
        </div>
      </nav>
      <Sidebar ref={sidebarRef} items={items} />
    </>
  );
};

export default Navbar;

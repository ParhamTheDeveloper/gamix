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
  PersonFill,
} from "react-bootstrap-icons";
import { Picture } from "../Picture";

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
          {user?.profilePic && (
            <Button link="dashboard" className="!w-12 !h-10 !p-0 !rounded-full">
              <Picture
                src={user.profilePic}
                className="h-12 !w-12 md:h-16 md:!w-16 !rounded-full"
              />
            </Button>
          )}
          {user && !user?.profilePic && (
            <Button link="dashboard" className="w-10 md:!w-12 !h-10 !p-0 !rounded-full">
              <div className="h-12 w-12 bg-lightblue md:h-16 md:w-16 rounded-full !text-base flex justify-center items-center md:text-3xl text-white">
                <PersonFill />
              </div>
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

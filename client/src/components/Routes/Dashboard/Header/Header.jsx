import "./Header.css";
import Menu from "./Menu/Menu";
import { PersonFill, ThreeDotsVertical } from "react-bootstrap-icons";
import { Button } from "../../../Button";
import { Picture } from "../../../Picture";
import { AuthContext } from "../../../../shared/contexts/auth.context";
import { useContext, useRef } from "react";

const Header = ({ onClicks }) => {
  const menuRef = useRef(null);
  const { user } = useContext(AuthContext);

  const handleOptionsClick = (e) => {
    const button = e.currentTarget;
    menuRef.current.classList.toggle("Active");
    menuRef.current.style.top = `${button.getBoundingClientRect().top - 32}px`;
    menuRef.current.style.left = `${button.getBoundingClientRect().left}px`;
  };

  return (
    <div className="Dashboard-Header">
      <div className="flex flex-row items-center">
        {user.profilePic && (
          <Picture
            src={user.profilePic}
            className="h-12 !w-12 md:h-16 md:!w-16 !rounded-full"
          />
        )}
        {!user.profilePic && (
          <div className="h-12 w-12 bg-lightblue md:h-16 md:w-16 rounded-full flex justify-center items-center text-xl md:text-3xl text-white">
            <PersonFill />
          </div>
        )}
        <div className="Dashboard-Header-Profile">
          <div className="text-white">{user.username}</div>
          <div className="text-sm text-gray-400">{user.rule}</div>
        </div>
      </div>
      <Button className="Dashboard-Header-Options" onClick={handleOptionsClick}>
        <ThreeDotsVertical />
      </Button>
      <Menu ref={menuRef} onClicks={onClicks} />
    </div>
  );
};

export default Header;

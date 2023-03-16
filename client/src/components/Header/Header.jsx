import { ArrowDown } from "react-bootstrap-icons";
import { Button } from "../Button";
import { Wave } from "../Wave";
import "./Header.css";

const Header = () => {
  const handleScrollDownButton = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <header className="Header">
      <h1 className="text-3xl lg:text-5xl leading-[3rem] font-extrabold text-white text-center">
        برنامه نویسی ویندوز رو از همین جا شروع کن
      </h1>
      <h2 className="text-2xl  text-center leading-9 text-lightblue w-92">
        برای اولین بار در <span className="text-mediumsky">ایران</span> اموزش
        برنامه نویسی ویندوز با <span className="text-lightsky">Win32</span> و{" "}
        <span className="text-lightsky">DirectX</span>
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Button link="/signup" className="Header-Start-Learning-Button">
          شروع یادگیری
        </Button>
        <Button
          link="/login"
          className="z-10 h-14 text-xl hover:drop-shadow-none hover:shadow-2xl hover:shadow-mediumblue"
        >
          ورود
        </Button>
      </div>
      <Wave src="/Images/Waves/wave (3).svg" className="Header-Wave" />
      <button
        className="Header-Scroll-Down-Button Transition"
        onClick={handleScrollDownButton}
      >
        <ArrowDown className="Transition"/>
      </button>
    </header>
  );
};

export default Header;

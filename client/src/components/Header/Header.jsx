import { Button } from "../Button";
import { Picture } from "../Picture";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header Container">
      <h1 className="text-3xl lg:text-5xl leading-[3rem] font-extrabold text-white text-center">
        برنامه نویسی ویندوز رو از همین جا شروع کن
      </h1>
      <h2 className="text-2xl  text-center leading-9 text-lightblue w-92">
        برای اولین بار در <span className="text-mediumsky">ایران</span> اموزش برنامه نویسی ویندوز با <span className="text-lightsky">Win32</span> و <span className="text-lightsky">DirectX</span>
      </h2>
      <div className="flex flex-row gap-4 mt-8">
        <Button link="/signup" className="h-14 text-xl !bg-blue-600 hover:drop-shadow-none hover:shadow-2xl hover:shadow-blue-700">شروع یادگیری</Button>
        <Button link="/login" className="h-14 text-xl hover:drop-shadow-none hover:shadow-2xl hover:shadow-mediumblue">ورود</Button>
      </div>
    </header>
  );
};

export default Header;

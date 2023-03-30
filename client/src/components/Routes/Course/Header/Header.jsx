import "./Header.css";
import { Mortarboard, Box, Cart, Headset } from "react-bootstrap-icons";
import { Button } from "../../../Button";
import { Picture } from "../../../Picture";

const Tag = ({ children }) => {
  return <span className="Course-Header-Tag">{children}</span>;
};

const Header = ({ course }) => {
  return (
    <header className="Course-Header">
      <div className="Course-Header-Top">
        <Picture src={course.img} className="Course-Header-Picture" />
        <div className="Course-Header-Content">
          <div className="text-xl my-4 text-white">
            دوره کامل و پروژه محور {course.name}
          </div>
          <div className="text-gray-300">{course.description.what}</div>
        </div>
      </div>
      <div className="Course-Header-Bottom">
        <Tag>
          <Mortarboard />
          {course.studentsCount} دانشجو
        </Tag>
        <Tag>
          <Box />
          {course.episodesCount} جلسه
        </Tag>
        <Tag>
          <Headset />
          پشتیبانی بزودی
        </Tag>
        <Button className="mr-auto !hidden md:!flex">
          <Cart className="Course-Header-Cart" /> ثبت نام
        </Button>
      </div>
      <Button className="md:!hidden mr-auto w-full mt-8 lg:mt-0">
        <Cart className="Course-Header-Cart" /> ثبت نام
      </Button>
    </header>
  );
};

export default Header;

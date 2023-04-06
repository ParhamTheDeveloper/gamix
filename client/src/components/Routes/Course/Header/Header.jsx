import "./Header.css";
import { Mortarboard, Box, Cart, Headset } from "react-bootstrap-icons";
import { Button } from "../../../Button";
import { Picture } from "../../../Picture";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../shared/contexts/auth.context";
import axios from "axios";

const Tag = ({ children }) => {
  return <span className="Course-Header-Tag">{children}</span>;
};

const Header = ({ course }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const { user } = useContext(AuthContext);

  const handleRegisterCourseClick = async () => {
    await axios.patch(
      process.env.REACT_APP_SERVER_URL +
        `/user/course?username=${user.username}&courseId=${course._id}`
    );
  };

  useEffect(() => {
    if (user) {
      user.registeredCourses.find(
        (userCourse) => userCourse.name === course.name
      ) && setIsRegistered(true);
    }
  }, []);

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
        {!isRegistered &&
          ((user && (
            <Button
              className="mr-auto !hidden md:!flex"
              onClick={handleRegisterCourseClick}
              link="/dashboard"
            >
              <Cart className="Course-Header-Cart" /> ثبت نام
            </Button>
          )) ||
            (!user && (
              <Button className="mr-auto !hidden md:!flex" link="/login">
                <Cart className="Course-Header-Cart" /> ثبت نام
              </Button>
            )))}
        {isRegistered && (
          <div className="hidden md:flex mr-auto text-xl text-white">
            از دوره لذت ببر :)
          </div>
        )}
      </div>
      {!isRegistered &&
        ((user && (
          <Button
            className="md:!hidden mr-auto w-full mt-8 lg:mt-0"
            onClick={handleRegisterCourseClick}
            link="/dashboard"
          >
            <Cart className="Course-Header-Cart" /> ثبت نام
          </Button>
        )) ||
          (!user && (
            <Button
              className="md:!hidden mr-auto w-full mt-8 lg:mt-0"
              link="/login"
            >
              <Cart className="Course-Header-Cart" /> ثبت نام
            </Button>
          )))}
      {isRegistered && (
        <div className="md:hidden mr-auto text-xl text-white">
          از دوره لذت ببر :)
        </div>
      )}
    </header>
  );
};

export default Header;

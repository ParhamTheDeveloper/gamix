import "./Courses.css";
import { GraphUpArrow } from "react-bootstrap-icons";
import { Card } from "../../../Card";
import { useContext } from "react";
import { CoursesContext } from "../../../../shared/contexts/courses.context";

const Courses = () => {
  const courses = useContext(CoursesContext);

  return (
    <section className="Courses Container">
      <div className="w-fit mx-6 md:mx-8 mt-12 text-white font-bold text-2xl flex gap-x-4 items-center justify-center">
        <GraphUpArrow /> جدیدترین دوره های برنامه نویسی
      </div>
      <div className="Courses-Inner">
        {courses.map((item, index) => {
          return courses.length - 5 < index ? ( // Last 4 courses
            <Card
              key={index}
              imgsrc={item.img}
              title={item.name}
              people={item.students}
              btnlink={`/courses/${item.name}`}
              episodes={item.episodes}
              className="Courses-Card"
              animationDelay={index + 1}
            />
          ) : null;
        })}
      </div>
    </section>
  );
};

export default Courses;

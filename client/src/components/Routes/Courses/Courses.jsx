import "./Courses.css";
import { Mortarboard } from "react-bootstrap-icons";
import { Card } from "../../Card";
import { CoursesContext } from "../../../shared/contexts/courses.context";
import { useScrollToTop, useTitle } from "../../../hooks";
import { useContext } from "react";

const Courses = () => {
  const courses = useContext(CoursesContext);

  useTitle("دوره های اموزشی برنامه نویسی");
  useScrollToTop();

  return (
    <section className="Courses 2xl:container 2xl:mx-auto">
      <div className="w-fit mx-6 md:mx-8 mt-12 text-white font-bold text-2xl flex gap-x-4 items-center justify-center">
        <Mortarboard /> دوره های اموزشی برنامه نویسی
      </div>
      <div className="Courses-Inner">
        {courses?.map((item, index) => {
          return (
            <Card
              key={index}
              imgsrc={item.img}
              title={item.name}
              people={item.studentsCount}
              btnlink={`/courses/${item.name}`}
              episodes={item.episodesCount}
              className="Courses-Card"
              animationDelay={index + 1}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Courses;

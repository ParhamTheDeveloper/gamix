import "./Courses.css";
import * as Icons from "react-bootstrap-icons";
import { Card } from "../../../Card";
import { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {}, []);

  return (
    <section className="Courses">
      <div className="w-fit mx-8 mt-12 text-white font-bold text-2xl flex gap-x-4 items-center justify-center">
        <Icons.GraphUpArrow /> جدیدترین دوره ها
      </div>
      <div className="Courses-Inner">
        {new Array(10)
          .fill({
            imgsrc:
              "data:image/jpeg;base64,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",
            title: "اموزش DirectX",
            people: 10,
            btnlink: "/fax",
            episodes: 50,
          })
          .map((item, index) => {
            return (
              <Card
                key={index}
                imgsrc={item.imgsrc}
                title={item.title}
                people={item.people}
                btnlink={item.btnlink}
                episodes={item.episodes}
                className="w-full inline-flex ml-4 mt-4"
                animationDelay={index + 1}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Courses;

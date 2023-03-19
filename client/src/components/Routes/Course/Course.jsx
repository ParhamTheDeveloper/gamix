import "./Course.css";
import { CircleFill, Download } from "react-bootstrap-icons";
import { Header } from "./Header";
import { Accordion } from "../../../Accordion";
import { CourseItemsWrapper } from "./CourseItemsWrapper";
import { CoursesContext } from "../../../shared/contexts/courses.context";
import { NotFound } from "../NotFound";
import { useParams } from "react-router-dom";
import { useScrollToTop, useTitle } from "../../../hooks";
import { useContext } from "react";

const Course = () => {
  const courses = useContext(CoursesContext);
  const { name } = useParams();
  const course = courses?.find(
    (course) => course.name.toLowerCase() == name.toLowerCase()
  );
  const items = [
    {
      title: `${course?.name} چیست؟`,
      children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      title: `چرا ${course?.name} ؟`,
      children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      title: "بازارکار؟",
      children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      title: "پیشنیازی نیاز است؟",
      children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
    },
  ];

  useScrollToTop();
  useTitle(
    `${
      course
        ? `آموزش ${course.name}` + ` | دوره پروژه محور ${course.name}`
        : "دوره مورد نظر پیدا نشد"
    }`
  );

  return (
    <>
      {course?.name && (
        <section className="Course-Container Container">
          <div className="Course">
            <Header course={course} />
            <CourseItemsWrapper data={items} />
            <section className="Course-Items-Wrapper">
              <div className="w-fit my-8 text-2xl text-white flex flex-row items-center gap-x-2">
                <CircleFill className="text-xs" /> قسمت های دوره
              </div>
              {course?.episode.map((item, index) => (
                <Accordion
                  key={index}
                  title={`قسمت ${index + 1} | ${item.title}`}
                  height={456}
                  extra={
                    <a
                      href={item.video}
                      target="_blank"
                      className="Course-Download-Button Transition"
                      download
                    >
                      <Download />
                      <div>فایل پیوست</div>
                    </a>
                  }
                  className="my-4 text-xs"
                >
                  <video poster={course.img} className="Course-Video" controls>
                    <source src={item.video} type="video/mp4" />
                  </video>
                </Accordion>
              ))}
            </section>
          </div>
        </section>
      )}
      {!course?.name && <NotFound />}
    </>
  );
};

export default Course;

import "./Course.css";
import { CircleFill, Download } from "react-bootstrap-icons";
import { Header } from "./Header";
import { Accordion } from "../../Accordion";
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
    (course) => course.name.toLowerCase() === name.toLowerCase()
  );
  const items = [
    {
      title: `${course?.name} چیست؟`,
      children: course?.description.what,
    },
    {
      title: `چرا ${course?.name} ؟`,
      children: course?.description.why,
    },
    {
      title: "بازارکار؟",
      children: course?.description.laborMarket,
    },
    {
      title: "پیشنیازی نیاز است؟",
      children: course?.description.prerequisite,
    },
    {
      title: "مزایای دوره",
      children: course?.description.advantage,
    },
    {
      title: "سر فصل های دوره",
      children: course?.description.topics,
    },
  ];

  useScrollToTop();
  useTitle(
    `${
      course
        ? `آموزش ${course.name} | دوره پروژه محور ${course.name}`
        : "دوره مورد نظر پیدا نشد"
    }`
  );

  let projectsItems = [];

  course?.description.projects.forEach((item) => {
    projectsItems.push({
      children: <div className="mx-4 text-sm">{item}</div>,
    });
  });

  return (
    <>
      {course?.name && (
        <section className="Course-Container Container">
          <div className="Course">
            <Header course={course} />
            <CourseItemsWrapper title="توضیحات" data={items} />
            <CourseItemsWrapper
              title="پروژه های کار شده در طول دوره"
              data={projectsItems}
            />
            <section className="Course-Items-Wrapper">
              <div className="w-fit my-8 text-2xl text-white flex flex-row items-center gap-x-2">
                <CircleFill className="text-xs" /> قسمت های دوره
              </div>
              {course?.episodes.map((item, index) => (
                <Accordion
                  key={index}
                  title={`قسمت ${index + 1} | ${item.title}`}
                  extra={
                    <a
                      href={item.video}
                      rel="noreferrer"
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

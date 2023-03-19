import "./Home.css";
import { Header } from "./Header";
import { Courses } from "./Courses";
import { About } from "./About";
import { Quality } from "./Quality";
import { useScrollToTop, useTitle } from "../../../hooks";
import { useContext } from "react";
import { CoursesContext, CoursesProvider } from "../../../shared/contexts/courses.context";

const Home = () => {
  const courses = useContext(CoursesContext);

  useTitle("اموزش بازی سازی در ویندوز");
  useScrollToTop();

  return (
    <section className="Home Container Transition">
      <Header />
      <CoursesProvider value={courses}>
        <Courses />
      </CoursesProvider>
      <About />
      <Quality />
    </section>
  );
};

export default Home;

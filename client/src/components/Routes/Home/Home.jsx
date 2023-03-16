import "./Home.css";
import { Header } from "../../Header";
import { Courses } from "./Courses";
import { About } from "./About";
import { useScrollToTop, useTitle } from "../../../hooks";
import { useRef } from "react";
import { Quality } from "./Quality";

const Home = () => {
  const homeRef = useRef(null);

  useTitle("اموزش بازی سازی در ویندوز");
  useScrollToTop();

  return (
    <section className="Home Container Transition" ref={homeRef}>
      <Header />
      <Courses />
      <About />
      <Quality />
    </section>
  );
};

export default Home;

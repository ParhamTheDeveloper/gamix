import "./Home.css";
import { Header } from "../../Header";
import { Courses } from "./Courses";
import { useTitle } from "../../../hooks";
import { useRef } from "react";

const Home = () => {
  const homeRef = useRef(null);

  return (
    <div className="Home Container Transition" ref={homeRef}>
      <Header />
      <Courses />
    </div>
  );
};

export default Home;

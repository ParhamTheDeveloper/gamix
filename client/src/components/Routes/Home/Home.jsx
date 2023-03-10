import { useRef } from "react";
import { useTitle } from "../../../hooks";
import { Header } from "../../Header";
import "./Home.css";

const Home = () => {
  const homeRef = useRef(null);

  return (
    <div className="Home" ref={homeRef}>
      <Header />
    </div>
  );
};

export default Home;

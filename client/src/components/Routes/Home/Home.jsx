import "./Home.css";
import { Header } from "../../Header";
import { Courses } from "./Courses";
import { About } from "./About";
import { Snippet } from "../../Snippet";
import { useTitle } from "../../../hooks";
import { useRef } from "react";

const Home = () => {
  const homeRef = useRef(null);

  return (
    <div className="Home Container Transition" ref={homeRef}>
      <Header />
      <Courses />
      <About />
      <Snippet
        extension="++C"
        codes={
        `#include <iostream>
        
int main()
{
  std::cout << "Hello, World!\\n";
  return 0;
}`
      }
      />
    </div>
  );
};

export default Home;

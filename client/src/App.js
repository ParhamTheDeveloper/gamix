import "./App.css";
import "./fonts/IranSans.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Routes/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { MainCourses } from "./components/Routes/Courses";
import { Login } from "./components/Routes/Login";
import { Signup } from "./components/Routes/Signup";
import { Course } from "./components/Routes/Course";
import { CoursesProvider } from "./shared/contexts/courses.context";
import { Loading } from "./components/Loading";
import { NotFound } from "./components/Routes/NotFound";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const loadCourses = () => {
      axios
        .get("http://localhost:3001/courses/")
        .then((data) => data.data)
        .then((data) => setCourses(data));
    };

    loadCourses();
  }, []);

  if (!courses) {
    return <Loading />;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <CoursesProvider value={courses}>
              <Home />
            </CoursesProvider>
          }
        />
        <Route path="/courses">
          <Route
            index
            element={
              <CoursesProvider value={courses}>
                <MainCourses />
              </CoursesProvider>
            }
          />
          <Route
            path=":name"
            element={
              <CoursesProvider value={courses}>
                <Course />
              </CoursesProvider>
            }
          />
        </Route>
        <Route path="/about-us" element={<h1>About</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

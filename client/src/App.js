import "./App.css";
import "./fonts/IranSans.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./components/Routes/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { MainCourses } from "./components/Routes/Courses";
import { Login } from "./components/Routes/Login";
import { Signup } from "./components/Routes/Signup";
import { Course } from "./components/Routes/Course";
import { CoursesProvider } from "./shared/contexts/courses.context";
import { Loading } from "./components/Loading";
import { Dashboard } from "./components/Routes/Dashboard";
import { NotFound } from "./components/Routes/NotFound";
import { AuthContext } from "./shared/contexts/auth.context";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import About from "./components/Routes/About/About";

const App = () => {
  const [courses, setCourses] = useState(null);
  const { user, onLogin } = useContext(AuthContext);

  useEffect(() => {
    const loadCourses = () => {
      axios
        .get(process.env.REACT_APP_SERVER_URL + "/courses")
        .then((data) => data.data)
        .then((data) => setCourses(data));
    };
    if (
      localStorage.getItem("user_email") !== "null" ||
      localStorage.getItem("user_password") !== "null"
    ) {
      onLogin().then();
    }

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
        <Route path="/about-us" element={<About />} />
        {!user && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup/" element={<Signup />} />
          </>
        )}
        {user && (
          <>
            <Route
              path="/login"
              element={<Navigate replace to="/dashboard" />}
            />
            <Route
              path="/signup/"
              element={<Navigate replace to="/dashboard" />}
            />
          </>
        )}
        {user && <Route path="/dashboard" element={<Dashboard />} />}
        {!user && (
          <Route path="/dashboard" element={<Navigate replace to="/login" />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

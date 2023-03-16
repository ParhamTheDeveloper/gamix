import "./App.css";
import "./fonts/IranSans.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Routes/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { MainCourses } from "./components/Routes/Courses";
import { Login } from "./components/Routes/Login";
import { Signup } from "./components/Routes/Signup";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<h1>About</h1>} />
        <Route path="/courses" element={<MainCourses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Routes/Home";
import { Navbar } from "./components/Navbar";
import "./App.css";
import "./fonts/IranSans.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<h1>About</h1>} />
      </Routes>
    </Router>
  );
};

export default App;

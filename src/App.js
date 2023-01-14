import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

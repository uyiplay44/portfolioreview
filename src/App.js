import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/*" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/skill" element={<Skill/>} />
        <Route path="/work" element={<Work/>} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import CVPage from "./components/CVPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CV" element={<CVPage />} />
        </Routes>
      </main>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
}
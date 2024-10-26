import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css'
import '../i18n'; // import the i18n configuration


import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Teaching from "./pages/Teaching";
import Contact from "./pages/Contact";
import Cookies from "./pages/Cookies";
// import App from './App.jsx'

// https://ico.org.uk/global/cookies/ best example about cookies ever

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/cookies" element={<Cookies />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

import Home from "./pages/Home";
import About from "./pages/About";
// import App from './App.jsx'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

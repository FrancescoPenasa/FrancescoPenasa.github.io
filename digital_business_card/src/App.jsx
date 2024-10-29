import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import githubLogo from "./assets/icons/png/github.png";
import linkedinLogo from "./assets/icons/png/linkedin.png";
import instagramLogo from "./assets/icons/png/instagram.png";

import linkedinBtnLogo from "./assets/icons/png/linkedin_btn.png"
import mailLogo from "./assets/icons/png/mail.png";

import photo from "./assets/image.png";
import "./App.css";

function Header() {
  return (
    <>
      <img
        className="photo"
        src={photo}
        alt="Foto"
        srcSet={`${photo} 300w, ${photo} 768w, ${photo} 1280w, ${photo} 3200w`}
      />
      <h1 className="name">Francesco Penasa</h1>
      <h3 className="job">Software Developer</h3>
      <a href="http://FrancescoPenasa.github.io">
        <h5 className="site">Francesco Penasa website</h5>
      </a>
      <div className="btns">
        <button className="primary" type="button">
          <img src={mailLogo} alt="mail logo" />
        <span>Email</span>
        </button>
        <button className="secondary" type="button">
          <img src={linkedinBtnLogo} alt="linkedin logo" />
          <span>Linkedin</span>
        </button>
      </div>
    </>
  );
}
function Main() {
  return (
    <div className="main">
      <h3 className="title">About</h3>
      <p className="content">
I’m a software engineer with experience across the stack, working primarily with Flutter and React but also familiar with Django, Flask, and Express for backend projects. 
My background in consulting has made me appreciate agile teamwork and the value of organized, purposeful collaboration. 
I bring a steady, pragmatic outlook to each project, always looking for ways to streamline and simplify complex tasks while continuing to learn and grow.

<hr />
In my free time, I’m diving into game development—a natural extension of my passion for video games, particularly those that challenge players to master complex systems over time. 
Games like Sekiro and Street Fighter have taught me more than just technical skill; they’ve shown me how to stay calm under pressure, learn from setbacks, and take pride in the hard-won progress that only comes through persistence. 
I see games as a mirror of personal growth, where every failure is an opportunity to understand yourself better and every win is a reminder of the journey that got you there. 
I bring that same mindset into my work, approaching challenges with patience, curiosity, and respect for the process.
      </p>
      <h3 className="title">Interests</h3>
      <p className="content">
        <ul>
          <li><strong>Gaming for Growth</strong> – Games that demand skill, focus, and resilience have shaped my approach to both personal and professional growth. 
          I believe in learning from every setback and celebrating the hard-won progress that comes with steady effort.</li>
          <li><strong>Collaborative Mindset</strong> – I’m motivated by the sense of community that comes from working closely with others, 
          where diverse perspectives come together to solve complex problems</li>
          <li><strong>Continuous Learning</strong> – Whether it’s exploring a new tech stack, experimenting with game development, or improving my workflow, 
          I’m always excited by the process of learning and applying that knowledge in meaningful ways.</li>
        </ul>

      </p>
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <ul className="footer-social-list">
        <li>
          <a href="http://github.com/francescopenasa">
            <img src={githubLogo} alt="github logo" className="footer-icon"/>
          </a>
        </li>
        <li>
          <a href="http://github.com/francescopenasa">
            <img src={linkedinLogo} alt="linkedin logo" className="footer-icon"/>
          </a>
        </li>
        <li>
          <a href="http://github.com/francescopenasa">
            <img src={instagramLogo} alt="instagram logo" className="footer-icon"/>
          </a>
        </li>
      </ul>
    </footer>
  );
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;

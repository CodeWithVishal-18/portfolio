import React, { memo } from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

let Home = memo(() => {
  return (
    <section className="home-section" id="home">
      <div className="home-inner">

        <div className="home-text">
          <p className="home-greeting">
            Hi There!{" "}
            <span style={{   display: "inline-block",   animation: "waveHand 2.5s ease-in-out infinite" }} > 👋🏻 </span>
          </p>

          <h1 className="home-name">I'M <span className="name-highlight">VISHAL SHUKLA</span></h1>
          <div className="home-role">
            <Typewriter
              words={[
                "Full Stack Developer",
                "React Developer",
                "Problem Solver",
                "Freelancer"
              ]} loop={0} cursor cursorStyle="|" typeSpeed={80} deleteSpeed={50} delaySpeed={1500}/>
          </div>

          <p className="home-tagline">I build fast, scalable, and user-friendly web applications.</p>
          <div className="home-buttons">
            <Link to={"/projects"} className="btn primary">View Projects</Link>
            <Link to={"/resume"} className="btn secondary" download>Download Resume</Link>
          </div>

          <div className="home-socials">
            <a href="https://github.com/CodeWithVishal-18" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/vishal-shukla-1818vk" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
            <a href="mailto:vishal.shuklaji45@gmail.com" target="_blank" rel="noreferrer"><i className="bi bi-envelope-fill"></i></a>
          </div>
        </div>

        <div className="hero-bg-section">
          <img src="hero-bg.svg" alt="Hero Illustration" />
        </div>

      </div>
    </section>
  )
})

export default Home;
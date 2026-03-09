import React, { memo } from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";

let Home = memo(() => {
  let orbitItems = [
    { icon: "⚛️", label: "React", angle: 0, color: "#00F5A0" },
    { icon: "🎨", label: "Design", angle: 72, color: "#7B61FF" },
    { icon: "🔧", label: "Node", angle: 144, color: "#FF6B6B" },
    { icon: "📱", label: "Mobile", angle: 216, color: "#FFD93D" },
    { icon: "☁️", label: "Cloud", angle: 288, color: "#00B4D8" },
  ]

  return (
    <section className="home-section" id="home">
      <div className="home-inner">
        <div className="home-text">
          <p className="home-greeting">
            Hi There!{" "}
            <span style={{ display: "inline-block", animation: "waveHand 2.5s ease-in-out infinite" }}>👋🏻</span>
          </p>
          <h1 className="home-name">I'M <span className="name-highlight">VISHAL SHUKLA</span></h1>
          <div className="home-role">
            <Typewriter
              words={[
                "Full Stack Developer",
                "React Developer",
                "Problem Solver",
                "Freelancer"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </div>
        <div className="home-illustration">
          <div className="hero-visual">
            <div className="hero-circle">
              👨‍💻
              {orbitItems.map(({ icon, label, angle, color }) => {
                let rad = (angle - 90) * Math.PI / 180;
                let r = 38;
                return (
                  <div key={label} className="orbit-item" style={{ left: `${50 + r * Math.cos(rad)}%`, top: `${50 + r * Math.sin(rad)}%`, borderColor: `${color}44`, color: color }}>
                    {icon} {label}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Home;
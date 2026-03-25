import React, { memo } from "react";
import "./Resume.css";

let Resume = memo(() => {
  return (
    <section className="resume-section container" id="resume">

      <h2 className="resume-title">My <span>Resume</span></h2>

      <p className="resume-subtitle">
        You can preview my resume below or download it.
      </p>
      <div className="resume-download">

        <a href="/resume.pdf" download className="download-btn">
          <i className="bi bi-download"></i>
          Download Resume
        </a>

      </div>
      <div className="resume-preview">

        <iframe
          src="/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
          title="Resume"
          loading="lazy"
        ></iframe>

      </div>

    </section>
  );
});

export default Resume;
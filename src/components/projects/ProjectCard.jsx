import React, { memo } from "react";

const ProjectCard = memo(({ title, description, image, github, demo, tech }) => {

    return (
        <div className="project-card">

            <div className="project-image-wrapper">
                <img src={image} alt={title} loading="lazy" />
            </div>

            <div className="project-content">

                <h4>{title}</h4>

                <p>{description}</p>

                <div className="tech-stack">
                    {tech.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </div>

                <div className="project-buttons d-fex justify-content-between">

                    <a href={github} target="_blank" rel="noreferrer" className="github">
                        <i className="devicon-github-original"></i>
                    </a>

                    <a href={demo} target="_blank" rel="noreferrer" className="livedemo">
                        <i className="bi bi-box-arrow-up-right"></i>
                    </a>

                </div>

            </div>

        </div>
    );
});

export default ProjectCard;
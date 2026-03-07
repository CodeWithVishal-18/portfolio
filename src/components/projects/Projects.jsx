import React, { memo } from "react";
import ProjectCard from "./ProjectCard";
import "./Project.css";

let projects = [
    {
        title: "Currency Converter",
        description:
            "A real-time currency converter using exchange rate API.",
        image: "/projects/currency.png",
        github: "https://utility-versee.vercel.app/",
        demo: "https://currency-demo.com",
        tech: ["JavaScript", "API", "CSS"]
    },
    {
        title: "Developer Portfolio",
        description:
            "Modern developer portfolio built with React and responsive UI.",
        image: "/projects/portfolio.png",
        github: "https://github.com/yourusername/portfolio",
        demo: "https://portfolio-demo.com",
        tech: ["React", "Bootstrap", "CSS"]
    },
    {
        title: "Task Manager App",
        description:
            "Full stack task manager with CRUD operations.",
        image: "/projects/task.png",
        github: "https://github.com/yourusername/task-manager",
        demo: "https://task-demo.com",
        tech: ["React", "Node", "MongoDB"]
    }
];

let Projects = memo(() => {
    return (
        <section className="projects-section container" id="projects">

            <h2 className="projects-title">
                My <span>Projects</span>
            </h2>

            <p className="projects-subtitle">
                A selection of projects I've built while learning modern technologies.
            </p>

            <div className="row">

                {projects.map((project, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                        <ProjectCard {...project} />
                    </div>
                ))}

            </div>

        </section>
    );
});

export default Projects;
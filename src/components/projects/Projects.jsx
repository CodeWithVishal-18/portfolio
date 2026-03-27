import React, { memo } from "react";
import ProjectCard from "./ProjectCard";
import "./Project.css";

let projects = [
    {
        title: "UtilityVerse",
        description:
            "UtilityVerse is a modern utility dashboard that helps users manage daily tasks, format text, test knowledge with quizzes, and track job applications - all in one fast and minimal interface",
        image: "/projects/utilityverse.png",
        github: "https://github.com/CodeWithVishal-18/UtilityVerse",
        demo: "https://utility-versee.vercel.app/",
        tech: ["React","JavaScript", "Context API","Routing", "CSS","Bootstrap"]
    },
    {
        title: "JapMala - Counter App",
        description:
            "A mobile-first digital Jap Mala that helps users track mantra chanting with customizable counts and provides a collection of mantras for different deities in a simple, distraction-free interface.",
        image: "/projects/japmala.png",
        github: "https://github.com/CodeWithVishal-18/JapMala---Counter-Application",
        demo: "https://japmala-mantra.netlify.app/",
        tech: ["React", "Bootstrap", "CSS","API","Routing"]
    },
    {
        title: "LoveSync Connect",
        description:
            "LoveSync Connect is an interactive web app that calculates relationship compatibility using both partners’ names and dates of birth. It analyzes name compatibility and horoscope matching to generate a realistic and engaging compatibility result for couples. ❤️",
        image: "/projects/lovesync.png",
        github: "https://github.com/CodeWithVishal-18/",
        demo: "https://lovesync-connect.netlify.app/",
        tech: ["React", "JavaScript", "CSS","Bootstrap"]
    },
    {
        title: "MovieSearch Application",
        description:
            "Built a movie search application that allows users to find movie details in real time, displaying information like genre, cast, and IMDb rating with a responsive UI and dark/light theme toggle.",
        image: "/projects/moviesearch.png",
        github: "https://github.com/CodeWithVishal-18/Movie-Search-Application",
        demo: "https://oncemoviesearch.netlify.app/",
        tech: ["React", "JavaScript", "CSS","Bootstrap"]
    }
];

let Projects = memo(() => {
    return (
        <section className="projects-section container" id="projects">
            <h2 className="projects-title">My <span>Projects</span></h2>
            <p className="projects-subtitle">A selection of projects I've built while learning modern technologies.</p>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </section>
    )
})

export default Projects;
import React, { memo } from "react";
import ProfileCard from "../../component/ProfileCard";
import "./About.css";

const technologies = [
    { icon: "devicon-react-original colored", name: "React.js" },
    { icon: "devicon-nextjs-plain", name: "Next.js" },
    { icon: "devicon-javascript-plain colored", name: "JavaScript" },
    { icon: "devicon-typescript-plain colored", name: "TypeScript" },
    { icon: "devicon-java-plain colored", name: "Java" },
    { icon: "devicon-spring-plain colored", name: "Spring Boot" },
    { icon: "devicon-mysql-plain colored", name: "MySQL" },
    { icon: "devicon-bootstrap-plain colored", name: "Bootstrap" },
    { icon: "devicon-git-plain colored", name: "Git" },
    { icon: "devicon-github-original", name: "GitHub" },
    { icon: "devicon-amazonwebservices-plain colored", name: "AWS" },
    { icon: "devicon-vscode-plain colored", name: "VS Code" }
];

const About = memo(() => {
    return (
        <section className="about-section container" id="about">
            <div className="section-heading text-center">
                <h2>About <span>Me</span></h2>
            </div>

            <div className="row align-items-center gy-5">
                <div className="col-lg-4">
                    <div className="profile-wrapper">
                        <ProfileCard
                            name="Vishal Shukla"
                            title="Frontend Developer"
                            handle="vishalshukla"
                            status="Available for Work"
                            contactText="Contact Me"
                            avatarUrl="/profile.jpg"
                            showUserInfo={false}
                            enableTilt={true}
                            enableMobileTilt={false}
                            behindGlowColor="rgba(125,190,255,.25)"
                            behindGlowEnabled
                            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                        />
                    </div>
                </div>

                <div className="col-lg-8">
                    <div className="about-content">
                        <p>
                            I'm a passionate <span className="highlight " style={{letterSpacing:"2px"}}><strong>Full Stack Developer </strong></span>
                            who enjoys transforming ideas into modern,
                            responsive and user-friendly web applications.
                            I love creating clean interfaces while building
                            scalable backend systems that provide great user
                            experiences.
                        </p>
                        <p>
                            My primary stack includes
                            <span className="highlight"> React.js</span>,
                            <span className="highlight"> Next.js</span>,
                            <span className="highlight"> Java</span>,
                            <span className="highlight"> Spring Boot</span>,
                            <span className="highlight"> MySQL</span> and
                            modern frontend technologies.
                        </p>
                        <p>
                            Beyond coding, I'm continuously improving my
                            Data Structures & Algorithms skills, exploring
                            new technologies and building projects that
                            solve practical problems.
                        </p>
                        <div className="info-grid">
                            <div className="info-card">
                                <i className="bi bi-geo-alt"></i>
                                <div>
                                    <span>Location</span>
                                    <h6>Mumbai, Maharashtra</h6>
                                </div>
                            </div>

                            <div className="info-card">
                                <i className="bi bi-briefcase"></i>
                                <div>
                                    <span>Status</span>
                                    <h6>Open To Work</h6>
                                </div>
                            </div>

                            <div className="info-card">
                                <i className="bi bi-mortarboard"></i>
                                <div>
                                    <span>Education</span>
                                    <h6>Graduation in BSc IT</h6>
                                </div>
                            </div>

                            <div className="info-card">
                                <i className="bi bi-lightning-charge"></i>
                                <div>
                                    <span>Specialization</span>
                                    <h6>Full Stack Development</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tech-section">
                <div className="text-center mb-5">
                    <h2>My <span>Tech Stack</span></h2>
                    <p>Technologies I use to build modern applications.</p>
                </div>

                <div className="tech-grid">
                    {technologies.map((tech, index) => (
                        <div className="tech-card" key={index} >
                            <i className={tech.icon}></i>
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="achievement-section">
                <div className="text-center mb-5">
                    <h2>Professional <span>Highlights</span></h2>
                </div>

                <div className="row g-4">
                    <div className="col-md-3 col-6">
                        <div className="achievement-card">
                            <h2>10+</h2>
                            <p>Projects Built</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="achievement-card">
                            <h2>15+</h2>
                            <p>Technologies</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="achievement-card">
                            <h2>100+</h2>
                            <p>DSA Problems</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="achievement-card">
                            <h2>∞</h2>
                            <p>Continuous Learning</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default About;
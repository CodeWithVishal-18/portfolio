import React, { memo } from "react";
import ProfileCard from "../../component/ProfileCard";
import "./About.css";

const About = memo(() => {
    return (
        <section className="about-section container" id="about">
            <div className="row align-items-center about-top">
                <div className="col-lg-4 text-center order-1 order-lg-2">

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
                            behindGlowColor="rgba(125, 190, 255, 0.67)"
                            behindGlowEnabled
                            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                        />
                    </div>
                </div>
                <div className="col-lg-8 about-text order-2 order-lg-1">
                    <h2 className="about-title">About <span>Me</span></h2>
                    <p>Hi, I’m <strong>Vishal Shukla</strong>, an aspiring <span className="highlight">Full Stack Developer</span> passionate about building modern, scalable, and visually engaging web applications. I enjoy transforming ideas into real digital products and creating experiences that are both functional and intuitive.</p>

                    <p>I primarily work with <span className="highlight">JavaScript</span> and modern technologies like <span className="highlight">React.js</span>, <span className="highlight">Next.js</span>, and <span className="highlight">TypeScript</span>. I focus on building <span className="highlight">responsive interfaces</span>, interactive UI, and <span className="highlight">high-performance web applications</span> that deliver great user experiences.</p>
                    
                    <p>I enjoy <span className="highlight">problem-solving</span>, experimenting with <span className="highlight">creative UI designs</span>, and <span className="highlight">writing clean</span>, <span className="highlight">maintainable code</span>. I’m always learning new technologies and improving my skills to grow into a strong <span className="highlight">Full Stack Developer</span> who builds impactful digital solutions.</p>
                </div>
            </div>

            <div className="section-divider"></div>
            <div className="technical-skills">
                <h3 className="skills-heading">Technical <span>Skills</span></h3>
                <p className="skills-subtitle">Technologies and tools I work with</p>
                <div className="skill-category">
                    <h5>Languages</h5>
                    <div className="badge-container">
                        <div className="skill-badge">
                            <div className="skill-content"><i className="devicon-javascript-plain colored"></i>
                                <span>JavaScript</span>
                            </div>
                            <div className="skill-progress">
                                <div className="progress-bar">
                                    <div className="progress-fill js"></div>
                                </div>
                                <span>85%</span>
                            </div>
                        </div>

                        <div className="skill-badge">
                            <div className="skill-content">
                                <i className="devicon-typescript-plain colored"></i>
                                <span>TypeScript</span>
                            </div>
                            <div className="skill-progress">
                                <div className="progress-bar">
                                    <div className="progress-fill js"></div>
                                </div>
                                <span>70%</span>
                            </div>
                        </div>

                        <div className="skill-badge">
                            <div className="skill-content">
                                <i className="devicon-java-plain colored"></i>
                                <span>Java</span>
                            </div>
                            <div className="skill-progress">
                                <div className="progress-bar">
                                    <div className="progress-fill js"></div>
                                </div>
                                <span>75%</span>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="skill-category">
                    <h5>Frontend</h5>
                    <div className="badge-container">
                        <div className="skill-badge">
                            <div className="skill-content">
                                <i className="devicon-html5-plain colored"></i>
                                <span>HTML5</span>
                            </div>
                            <div className="skill-progress">
                                <div className="progress-bar">
                                    <div className="progress-fill js"></div>
                                </div>
                                <span>95%</span>
                            </div>
                        </div>

                        <div className="skill-badge">
                            <div className="skill-content">
                                <i className="devicon-css3-plain colored"></i>
                                <span>CSS3</span>
                            </div>
                            <div className="skill-progress">
                                <div className="progress-bar">
                                    <div className="progress-fill js"></div>
                                </div>
                                <span>92%</span>
                            </div>
                        </div>

                        <div className="skill-badge">
                            <div className="skill-content">
                                <i className="devicon-react-original colored"></i>
                                React
                            </div>
                            <div className="skill-progress">
                                <div className="progress-bar">
                                    <div className="progress-fill js"></div>
                                </div>
                                <span>85%</span>
                            </div>
                        </div>

                        <div className="skill-badge">
                            <div className="skill-content">
                                <i className="devicon-bootstrap-plain colored"></i>
                                Bootstrap
                            </div>

                            <div className="skill-progress">
                                <div className="progress-bar">
                                    <div className="progress-fill js"></div>
                                </div>
                                <span>90%</span>
                            </div>
                        </div>

                        <div className="skill-badge">
                            <div className="skill-content">
                                <i className="devicon-nextjs-plain"></i>
                                Next.js
                            </div>
                            <div className="skill-progress">
                                <div className="progress-bar">
                                    <div className="progress-fill js"></div>
                                </div>
                                <span>72%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skill-category">
                    <h5>Testing Tools</h5>
                    <div className="badge-container">
                        <div className="skill-badge">
                            <div className="skill-content">
                                <i className="devicon-junit-plain colored"></i>
                                JUnit
                            </div>
                            <div className="skill-progress">
                                <div className="progress-bar">
                                    <div className="progress-fill js"></div>
                                </div>
                                <span>74%</span>
                            </div>
                        </div>
                        <div className="skill-badge">
                            <div className="skill-content">
                                🧪 Manual Testing
                            </div>
                            <div className="skill-progress">
                                <div className="progress-bar">
                                    <div className="progress-fill js"></div>
                                </div>
                                <span>85%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skill-category">
                    <h5>Cloud & Tools</h5>
                    <div className="badge-container">
                        <div className="skill-badge">
                            <div className="skill-content">
                                <i className="devicon-amazonwebservices-plain colored"></i>
                                AWS
                            </div>
                            <div className="skill-progress">
                                <div className="progress-bar">
                                    <div className="progress-fill js"></div>
                                </div>
                                <span>73%</span>
                            </div>
                        </div>

                        <div className="skill-badge">
                            <div className="skill-content">
                                <i className="devicon-vscode-plain colored"></i>
                                VS Code
                            </div>
                            <div className="skill-progress">
                                <div className="progress-bar">
                                    <div className="progress-fill js"></div>
                                </div>
                                <span>98%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skill-category">
                    <h5>Version Control</h5>
                    <div className="badge-container">
                        <div className="skill-badge">
                            <div className="skill-content">
                                <i className="devicon-git-plain colored"></i>
                                Git
                            </div>
                            <div className="skill-progress">
                                <div className="progress-bar">
                                    <div className="progress-fill js"></div>
                                </div>
                                <span>82%</span>
                            </div>
                        </div>
                        <div className="skill-badge">
                            <div className="skill-content">
                                <i className="devicon-github-original"></i>
                                GitHub
                            </div>
                            <div className="skill-progress">
                                <div className="progress-bar">
                                    <div className="progress-fill js"></div>
                                </div>
                                <span>88%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default About;
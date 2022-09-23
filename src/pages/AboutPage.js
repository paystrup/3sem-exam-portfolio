// 📁 pages/AboutPage.js
import AboutPageHeader from "../components/AboutPageHeader";

export default function AboutPage() {
    return (
        <section className="aboutPage">
            <AboutPageHeader />
            <div className="aboutSkills">
                <h2>I CAN HELP YOU WITH ...</h2>
                <div className="skillsetBox">
                    <div className="skillsetItem">
                        <div className="skillsetBoxTop">
                            <p>01</p>
                            <div className="stripe"></div>
                        </div>
                        <h3>DESIGN</h3>
                        <p>
                            Through my freelance work and education as a Multimedia Designer, I'm experienced in creating solid user-centered designs, that will help your brand stand out in the digital world. I work with 3D, graphic design, motion graphics and UX/UI.
                        </p>
                    </div>
                    <div className="skillsetItem">
                        <div className="skillsetBoxTop">
                            <p>02</p>
                            <div className="stripe"></div>
                        </div>
                        <h3>FRONTEND DEVELOPMENT</h3>
                        <p>I can bring concepts and designs to life by building scalable, fast, responsive and easy to use web experiences from scratch. I always put quality and great user experiences first. I work with HTML/CSS/JS/React/JSX/JSON/WP Rest API.</p>
                    </div>
                    <div className="skillsetItem">
                        <div className="skillsetBoxTop">
                            <p>03</p>
                            <div className="stripe"></div>
                        </div>
                        <h3>SOUND DESIGN</h3>
                        <p>I'm an experienced sound designer, music producer and an analog gear nerd. I strive to create emotionally resonant sonic experiences that matter. I make beats, create production tools for producers, compositions and soundtracks for advertisements.</p>
                    </div>
                </div>
            </div>
            <div className="aboutExperience">
                <div>
                    <h2>THE TOOLS I USE</h2>
                </div>

                <div className="experienceCol">
                    <div className="stripe2"></div>

                    <div className="experienceRow">
                        <div className="experienceRowContainer">
                            <h4>GRAPHIC DESIGN</h4>
                        </div>
                        <div>
                            <p>Adobe CC (Illustrator, Photoshop, InDesign, After Effects, Premiere Pro, XD), Figma, ProCreate</p>
                        </div>
                    </div>

                    <div className="stripe2"></div>

                    <div className="experienceRow">
                        <div className="experienceRowContainer">
                            <h4>3D</h4>
                        </div>
                        <div>
                            <p>Blender, Cinema 4D, Octane Render, Marvelous Designer, DAZ 3D, Substance Painter</p>
                        </div>
                    </div>

                    <div className="stripe2"></div>


                    <div className="experienceRow">
                        <div className="experienceRowContainer">
                            <h4>PROGRAMMING</h4>
                        </div>
                        <div>
                            <p>HTML, CSS, JavaScript, React, JSON, GSAP, Git, WordPress (Headless CMS)</p>
                        </div>
                    </div>

                    <div className="stripe2"></div>

                    <div className="experienceRow">
                        <div className="experienceRowContainer">
                            <h4>SOUND</h4>
                        </div>
                        <div>
                            <p>Ableton Live, Protools, FL Studio, Logic Pro</p>
                        </div>
                    </div>

                    <div className="stripe2"></div>

                    <div className="experienceRow">
                        <div className="experienceRowContainer">
                            <h4>THEORY</h4>
                        </div>
                        <div>
                            <p>
                                <b>Programming:</b> Semantic Code, SEO (Onpage), Best Coding Practices, Interface Architecture Maps, User Flow 

                                <br></br><br></br><b>UX & Research:</b>  BMC, Card Sorting, Copywriting, Costumer Journey, Data Analysis, Golden Circle, Interface Architecture Maps, Lo-Fi & Hi-Fi Prototyping, Marketing Funnel, Onboarding, Personas, Research & Interview Techniques, SoMe Strategy, Staircase Model, Sweetspot, Tone Of Voice, Usability Tests, User Flow, VPC, Wireframing, Wireflow

                                <br></br><br></br><b>Project Management & Strategy:</b> Agile & Waterfall Management, Concept Development & Prototyping, Double Diamond, Google Sprint, Offpage SEO, Project Management, User Generated Content

                                <br></br><br></br><b>Graphic Design:</b> Content Development For SoMe, Design Theory (Psychology, Colors, Composition, Typography, Space), Digital & Analog Design Practices, Logo Design, Motion Graphics, Product Design, Software Knowledge, Video & Image Editing
                            </p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
        
        
    );
}
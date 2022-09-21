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
                        <h3>Design</h3>
                        <p>
                            Through my freelance work and education as a Multimedia Designer, I'm experienced in creating solid user-centered designs, that will help your brand stand out in the digital world. I work with 3D, graphic design, motion graphics and UX/UI.
                        </p>
                    </div>
                    <div className="skillsetItem">
                        <div className="skillsetBoxTop">
                            <p>02</p>
                            <div className="stripe"></div>
                        </div>
                        <h3>Frontend Development</h3>
                        <p>I can bring concepts and designs to life by building scalable, fast, responsive and easy to use web experiences from scratch. I work with HTML/CSS/JS/React/JSX/JSON.</p>
                    </div>
                    <div className="skillsetItem">
                        <div className="skillsetBoxTop">
                            <p>03</p>
                            <div className="stripe"></div>
                        </div>
                        <h3>Sound Design</h3>
                        <p>I'm an experienced sound designer, music producer and an analog gear nerd. I strive to create emotionally resonant sonic experiences that matter. I make beats, create production tools for producers, compositions and soundtracks for advertisements.</p>
                    </div>
                </div>
            </div>
            <div className="aboutExperience">
                <div>
                    <h2>EXPERIENCE</h2>
                </div>

                <div className="experienceCol">
                    <div className="experienceRow">
                        <div className="experienceRowContainer">
                            <h4>Graphic Design & 3D</h4>
                        </div>
                        <div>
                            <p>Adobe CC, Illustrator, Photoshop, InDesign, After Effects, XD - Blender, Octane Render, Marvelous Designer, DAZ 3D, Substance Painter</p>
                        </div>
                    </div>
                    <div className="experienceRow">
                        <div className="experienceRowContainer">
                            <h4>Programming</h4>
                        </div>
                        <div>
                            <p>CSS, HTML, JavaScript, React, JSON, GSAP, GitHub</p>
                        </div>
                    </div>
                    <div className="experienceRow">
                        <div className="experienceRowContainer">
                            <h4>Sound</h4>
                        </div>
                        <div>
                            <p>Ableton Live, Protools, FL Studio, Logic Pro</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        
        
    );
}
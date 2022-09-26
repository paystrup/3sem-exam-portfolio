// 📁 pages/AboutPage.js
import AboutPageHeader from "../components/AboutPageHeader";
import AboutMeDesc from "../components/AboutMeDesc";
import AboutImage from "../components/assets/aboutpic2.png"

export default function AboutPage() {
    return (
        <section className="aboutPage">
            <AboutPageHeader />
            <AboutMeDesc />
            <section className="aboutSkills">
                <h2>MY COMPETENCES</h2>
                <div className="skillsetBox">
                    <div className="skillsetItem">
                        <h3>01 — DESIGN</h3>
                        <p>
                            Through my freelance work and education as a Multimedia Designer, I'm experienced in creating solid user-centered designs, that will help your brand stand out in the digital world. I work with 3D, graphic design, branding, product design, concept development, communication, motion graphics and UX/UI.
                        </p>
                    </div>
                    <div className="skillsetItem">
                        <h3>02 — FRONTEND DEVELOPMENT</h3>
                        <p>I can bring concepts and designs to life by building scalable, fast, responsive and easy to use web experiences from scratch. I always put quality and great user experiences first. I work with HTML/CSS/JS/React/JSX/JSON/WP Rest API.</p>
                    </div>
                    <div className="skillsetItem">
                        <h3>03 — SOUND DESIGN</h3>
                        <p>I'm an experienced sound designer, music producer and an analog gear nerd. I strive to create emotionally resonant sonic experiences that matter. I make beats, create production tools for producers, compositions and soundtracks for advertisements.</p>
                    </div>
                </div>
            </section>
            <div className="aboutExperience">
                <div>
                    <h2>THE TOOLS I USE</h2>
                </div>

                <div className="experienceCol">
                    <div className="stripe3"></div>
                    <div className="experienceRow">
                        <div className="experienceRowContainer">
                            <h4>GRAPHIC DESIGN</h4>
                        </div>
                        <div>
                            <p>Adobe CC (Illustrator, Photoshop, InDesign, After Effects, Premiere Pro, XD), Figma, ProCreate</p>
                        </div>
                    </div>

                    <div className="stripe3"></div>

                    <div className="experienceRow">
                        <div className="experienceRowContainer">
                            <h4>3D</h4>
                        </div>
                        <div>
                            <p>Blender, Cinema 4D, Octane Render, Marvelous Designer, DAZ 3D, Substance Painter</p>
                        </div>
                    </div>

                    <div className="stripe3"></div>

                    <div className="experienceRow">
                        <div className="experienceRowContainer">
                            <h4>PROGRAMMING</h4>
                        </div>
                        <div>
                            <p>HTML, CSS, JavaScript, React, JSON, GSAP, Git, WordPress (Headless CMS)</p>
                        </div>
                    </div>

                    <div className="stripe3"></div>

                    <div className="experienceRow">
                        <div className="experienceRowContainer">
                            <h4>SOUND</h4>
                        </div>
                        <div>
                            <p>Ableton Live, Protools, FL Studio, Logic Pro</p>
                        </div>
                    </div>

                    <div className="stripe3"></div>
                    
                </div>
            </div>
            <section className="aboutMeImage">
                <img src={AboutImage} alt="Paystrup / Nikolaj Friis Pejstrup producing music at his computer in his homestudio"></img>
            </section>
        </section>
        
        
    );
}
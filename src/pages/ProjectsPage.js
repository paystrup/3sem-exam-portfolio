import { useState, useEffect, useRef } from "react";
import ProjectItem from "../components/ProjectItem";
import { gsap } from "gsap";
import ScrollTopButton from "../components/ScrollTopButton";

export default function ProjectsPage() {
    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://wordpress.paystrup.dk/wp-json/wp/v2/posts?_embed&per_page=20");
            const data = await response.json();
            setProjects(data);
        }
        getData();
    }, []);

    useEffect(() => {            
        tl.current = gsap.timeline(({defaults: {duration: 0.5}}))
          .to(q(".projectsHeaderText"), {
            y: 0,
            opacity: 1,
            duration: 0.5
          })
          .to(q(".projectsHeaderP"), {
            y: 0,
            opacity: 1
          })
          .to(q(".grid-container"), {
            y: 0,
            opacity: 1
          });
    }, [q]);
    
    return (
        <section className="allProjectsPage" ref={el}>
            <ScrollTopButton />
            <section className="allProjectsPageHeader">
                <h1 className="projectsHeaderText">A DEEPER DIVE INTO MY PROJECTS</h1>
                <p className="projectsHeaderP">The latest years I've helped my clients creating sustainable and unique solutions through combining the use of 3D, graphic design, motion graphics and sound design. Explore my projects below.</p>
            </section>
            
            <section className="grid-container">
                {projects.map(project => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </section>
        </section>
    );
}
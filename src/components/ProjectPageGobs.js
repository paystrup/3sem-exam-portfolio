import { useState, useEffect } from "react";
import image from "./assets/gobs/gobs-cover.png"
import ProjectPageGobsHeader from "./ProjectPageGobsHeader";

export default function ProjectPageGobs() {
    // 🔍 filter for mapping the right projectpage
    // 🔍 WP -> tag
    const mapFilter = "gobs";

    const [project, setProject] = useState([]);

    useEffect(() => {
        async function getProjects() {
        // ⏰ add new v to force the catch to update, if WP Rest API doens't show updated data
        const res = await fetch(`https://wordpress.paystrup.dk/wp-json/wp/v2/posts?tag=${mapFilter}_embed&v=1231`);
        const data = await res.json();
        console.log(data);
        setProject(data);
        }

        getProjects();
    }, [])


    return (
        <section className="projectPage">
            <ProjectPageGobsHeader project={project}/>
            <div className="projectHeaderPic"><img src={image} alt={project.title?.rendered} /></div>
            <div className="projectIntro">
                <h6>ABOUT THE PROJECT</h6>
                <p>{project.acf.intro}</p>
            </div>
            <div className="projectEmbed">
                
            </div>
        </section>
    );
}
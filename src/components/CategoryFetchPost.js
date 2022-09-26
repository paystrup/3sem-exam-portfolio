import { useState, useEffect } from "react";
import ProjectItemCategory from "./ProjectItemCategory";

export default function CategoryFetchPost( { categoryID }) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://wordpress.paystrup.dk/wp-json/wp/v2/posts?categories=${categoryID}`);
            const data = await response.json();
            setProjects(data);
            console.log(data)
        }
        getData();
    }, [categoryID]);

    return (
        <section>
            <section className="categoryGrid">
                {projects.map(project => (
                    <ProjectItemCategory key={project.id} project={project} />
                ))}
            </section>
        </section>
    );
}
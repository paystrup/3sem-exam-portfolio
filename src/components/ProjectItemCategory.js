import { useNavigate } from "react-router-dom";

export default function ProjectItem({ project }) {
    const navigate = useNavigate();

    // 🔙 Fallback image, if no embedded img is found
    let image = "http://wordpress.paystrup.dk/wp-content/uploads/2022/09/projects-placeholder-1.png"; // fallback image

    // if embedded image is available redefine image to the wp url
    if (project.acf && project.acf?.squarecover) {
        image = project.acf?.squarecover;
    }

    // props imported from fetch via -> ./pages/ProjectsPage.js
    return (
        <article className="projectItem" onClick={() => navigate("/projects/" + project.slug)}>
            <img src={image} alt={project.title.rendered} />
            <div className="projectItemText">
                <h2>{project.acf?.case}</h2>
                <h3>{project.acf?.date}</h3>
            </div>
        </article>
    );
}
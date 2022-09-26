import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function ProjectItem({ project }) {
    const elRef = useRef();
    const elTween = useRef();
    const navigate = useNavigate();

    // 🔙 Fallback image, if no embedded img is found
    let image = "http://wordpress.paystrup.dk/wp-content/uploads/2022/09/projects-placeholder-1.png"; // fallback image

    // if embedded image is available redefine image to the wp url
    if (project.acf && project.acf?.squarecover) {
        image = project.acf?.squarecover;
    }

    useEffect(() => {            
        elTween.current = gsap.to(elRef.current, {
            borderRadius: "50%",
            opacity: 0.7,
            duration: 0.4,
            ease: "Expo.easeIn",
            filter: 'grayscale(100%)',
            paused: true,
        });
        gsap.to(".projectItemCategory", {
            opacity: 1
        });
    }, []);

    const onMouseEnterHandler = () => {
        elTween.current.play();
    };

    const onMouseLeaveHandler = () => {
        elTween.current.reverse();
    };

    // props imported from fetch via -> ./components/CategoryFetchPost.js
    return (
        <article 
            className="projectItemCategory"
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
            onClick={() => navigate("/projects/" + project.slug)}
        >
            <div className="categoryImageContainer">
                <img ref={elRef} src={image} alt={project.title.rendered} className="categoryImage"/>
            </div>
            <div className="projectItemText">
                <h2>{project.acf?.case}</h2>
                <h3>{project.acf?.date}</h3>
            </div>
            <div className="categoryTeaser">
                <h3>{project.acf?.teaser}</h3>
            </div>
        </article>
    );
}
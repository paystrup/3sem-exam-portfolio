import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function ProjectPage() {
    const [project, setProject] = useState({});
    const params = useParams();
    console.log(params);
    const slug = params.slug;

    useEffect(() => {
        async function getData() {
            const url = `https://www.wordpress.paystrup.dk/wp-json/wp/v2/posts?slug=${slug}&_embed`;
            const response = await fetch(url);
            const data = await response.json();
            setProject(data[0]);
        }
        getData();
        
    }, [slug]);

    let image = "http://www.wordpress.paystrup.dk/wp-content/uploads/2022/09/projects-placeholder.png";

    if (project._embedded && project._embedded["wp:featuredmedia"]) {
        image = project._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <section className="projectPage">
                <div className="projectPageHeader">
                    <div className="projectPageBoxLeft">
                        <h4>CASE</h4>
                    </div>
                    <div className="projectPageBoxRight">
                        <div> 
                            <h2>{project.acf.case}</h2>
                        </div>
                        <div className="projectPageBoxRightLower">
                            <div className="ppDetails">
                                <h6>CLIENT</h6>
                                <p>{project.acf.client}</p>
                        </div>
                            <div className="ppDetails">
                                <h6>SERVICE</h6>
                                <p>{project.acf.service}</p>
                            </div>
                            <div className="ppDetails">
                                <h6>DATE</h6>
                                <p>{project.acf.date}</p>
                            </div>
                    </div>
                </div>
                </div>
                <div className="projectHeaderPic"><img src={image} alt={project.title?.rendered} /></div>
                <div className="projectIntro">
                    <h6>ABOUT THE PROJECT</h6>
                    <p>{project.acf.intro}</p>
                </div>
        </section>
    );
}

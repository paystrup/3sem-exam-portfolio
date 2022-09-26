import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ScrollTopButton from "../components/ScrollTopButton";
import ProjectPageHeader from "../components/ProjectPageHeader";
import ProjectPageContent from "../components/ProjectPageContent";


export default function PostPage() {
    const [post, setPost] = useState({});
    const params = useParams();
    console.log(params);
    const slug = params.slug;

    useEffect(() => {
        async function getPost() {
            const url = `https://www.wordpress.paystrup.dk/wp-json/wp/v2/posts?slug=${slug}&_embed`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data[0]);
            setPost(data[0]);
        }
        getPost();
    }, [slug]);
    
    let image = "http://wordpress.paystrup.dk/wp-content/uploads/2022/09/projects-placeholder-1.png";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <section className="projectPage">
            <ScrollTopButton />
            <ProjectPageHeader post={post}/>
            <figure className="projectHeaderPic">
                <img src={image} alt={post.title?.rendered} />
            </figure>
            <div className="projectIntro">
                <h6>ABOUT THE PROJECT</h6>
                <div dangerouslySetInnerHTML={{ __html: post.acf?.intro}}></div>
            </div>

            <ProjectPageContent post={post}/>

            <div className="goBackButton">
                <Link to="/projects" className="mainBtn">GO BACK TO ALL PROJECTS</Link>
            </div>
            
        </section>
    );
}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

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
            <section className="projectPageHeader">
                <div className="projectPageBoxLeft">
                    <h4>CASE</h4>
                </div>
                <article className="projectPageBoxRight">
                    <h2>{post.title && parse(post.title.rendered)}</h2>
                    <div className="projectPageBoxRightLower">
                        <div className="ppDetails">
                            <h6>CLIENT</h6>
                            <p>Insert client here{/*{post.acf.client}*/}</p>
                            
                        </div>
                        <div className="ppDetails">
                            <h6>SERVICE</h6>
                            <p>Insert service here{/*{post.acf.service}*/}</p>
                        </div>
                        <div className="ppDetails">
                            <h6>DATE</h6>
                             <p>Insert date here {/*{post.acf.date}*/}</p> 
                        </div>
                    </div>
                </article>
            </section>
            <figure className="projectHeaderPic">
                <img src={image} alt={post.title?.rendered} />
            </figure>
            <div className="projectIntro">
                <h6>ABOUT THE PROJECT</h6>
                {post.content && parse(post.content.rendered)}
                
            </div>
        </section>
    );
}

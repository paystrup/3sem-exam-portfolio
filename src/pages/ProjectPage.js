import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { InstagramEmbed } from 'react-social-media-embed';

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
                            <p>{post.acf?.client}</p>
                            
                        </div>
                        <div className="ppDetails">
                            <h6>SERVICE</h6>
                            <p>{post.acf?.service}</p>
                        </div>
                        <div className="ppDetails">
                            <h6>DATE</h6>
                             <p>{post.acf?.date}</p> 
                        </div>
                    </div>
                </article>
            </section>
            <figure className="projectHeaderPic">
                <img src={image} alt={post.title?.rendered} />
            </figure>
            <div className="projectIntro">
                <h6>ABOUT THE PROJECT</h6>
                <div dangerouslySetInnerHTML={{ __html: post.acf?.intro}}></div>
            </div>

            {post.acf?.instaembed ? 
            (<div className="projectEmbed">
                <InstagramEmbed url={post.acf?.instaembed} width={1000} />
            </div>) 
            : ""}
            
            {post.acf?.embed ? 
            (<div className="projectEmbed" dangerouslySetInnerHTML={{ __html: post.acf?.embed}}>
            
            </div>) 
            : ""}

            {post.acf?.section1img ? 
            (<div className="sectionImage">
                <img src={post.acf?.section1img?.url} alt={post.acf?.section1img?.alt}></img>
            </div>) 
            : ""}

            {post.acf?.section1 ? 
            (<div className="projectIntro">
                <div dangerouslySetInnerHTML={{ __html: post.acf?.section1}}></div>
            </div>) 
            : ""}
            
            {post.acf?.gallery?.url ?
            (<div className="projectGallery">
                <img src={post.acf?.gallery.url} alt={post.acf?.gallery.alt}></img>
                <img src={post.acf?.gallery2.url} alt={post.title?.rendered}></img>
                <img src={post.acf?.gallery3.url} alt={post.title?.rendered}></img>
                <img src={post.acf?.gallery4.url} alt={post.title?.rendered}></img>
                <img src={post.acf?.gallery5.url} alt={post.title?.rendered}></img>
            </div>)
            : ""}

            {post.acf?.section2img ? 
            (<div className="sectionImage">
                <img src={post.acf?.section2img?.url} alt={post.acf?.section2img?.alt}></img>
            </div>) 
            : ""}

            {post.acf?.section2 ? 
            (<div className="projectIntro">
                <div dangerouslySetInnerHTML={{ __html: post.acf?.section2}}></div>
            </div>) 
            : ""}

            {post.acf?.section3img ? 
            (<div className="sectionImage">
                <img src={post.acf?.section3img?.url} alt={post.acf?.section3img?.alt}></img>
            </div>) 
            : ""}

            
            {post.acf?.section3 ? 
            (<div className="projectIntro">
                <div dangerouslySetInnerHTML={{ __html: post.acf?.section3}}></div>
            </div>) 
            : ""}

            
        </section>
    );
}

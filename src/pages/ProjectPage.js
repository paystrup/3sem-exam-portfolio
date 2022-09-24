import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { InstagramEmbed } from 'react-social-media-embed';
import ScrollTopButton from "../components/ScrollTopButton";

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


    // Messy code below, I know, I'm sorry. Without ACF pro it's not possbile to array images
    // -> a lot of custom keys 😥
    return (
        <section className="projectPage">
            <ScrollTopButton />
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

            {post.acf?.download ? 
            (<div className="projectIntro downloads">
                <div dangerouslySetInnerHTML={{ __html: post.acf?.download}}></div>
                <div dangerouslySetInnerHTML={{ __html: post.acf?.download2}}></div>
                <div dangerouslySetInnerHTML={{ __html: post.acf?.download3}}></div>
            </div>) 
            : ""}

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

            {post.acf?.section4img ? 
            (<div className="sectionImage">
                <img src={post.acf?.section4img?.url} alt={post.acf?.section4img?.alt}></img>
            </div>) 
            : ""}

            {post.acf?.section4 ? 
            (<div className="projectIntro">
                <div dangerouslySetInnerHTML={{ __html: post.acf?.section4}}></div>
            </div>) 
            : ""}

            {post.acf?.section5img ? 
            (<div className="sectionImage">
                <img src={post.acf?.section5img?.url} alt={post.acf?.section5img?.alt}></img>
            </div>) 
            : ""}

            {post.acf?.section5grid1 ? 
            (<div className="sectionImage sectionGrid">
                <img src={post.acf?.section5grid1?.url} alt={post.acf?.section5grid1?.alt}></img>
                <img src={post.acf?.section5grid2?.url} alt={post.acf?.section5grid2?.alt}></img>
                <img src={post.acf?.section5grid3?.url} alt={post.acf?.section5grid3?.alt}></img>
                <img src={post.acf?.section5grid4?.url} alt={post.acf?.section5grid4?.alt}></img>
            </div>) 
            : ""}

            {post.acf?.section5img2 ? 
            (<div className="sectionImage">
                <img src={post.acf?.section5img2?.url} alt={post.acf?.section5img2?.alt}></img>
            </div>) 
            : ""}

            {post.acf?.section5img3 ? 
            (<div className="sectionImage">
                <img src={post.acf?.section5img3?.url} alt={post.acf?.section5img3?.alt}></img>
            </div>) 
            : ""}

            {post.acf?.section6grid ? 
            (<div className="sectionImage sectionGrid">
                <img src={post.acf?.section6grid?.url} alt={post.acf?.section6grid?.alt}></img>
                <img src={post.acf?.section6grid2?.url} alt={post.acf?.section6grid2?.alt}></img>
                <img src={post.acf?.section6grid3?.url} alt={post.acf?.section6grid3?.alt}></img>
                <img src={post.acf?.section6grid4?.url} alt={post.acf?.section6grid4?.alt}></img>
            </div>) 
            : ""}

            {post.acf?.section5 ? 
            (<div className="projectIntro">
                <div dangerouslySetInnerHTML={{ __html: post.acf?.section5}}></div>
            </div>) 
            : ""}

            {post.acf?.jollyvid ? 
            (<div className="sectionImage">
                <video loop autoPlay muted>
                    <source src={post.acf?.jollyvid?.url} type="video/webm" />
                </video>
            </div>) 
            : ""}

            {post.acf?.section6 ? 
            (<div className="projectIntro">
                <div dangerouslySetInnerHTML={{ __html: post.acf?.section6}}></div>
            </div>) 
            : ""}

            {post.acf?.section7img ? 
            (<div className="sectionImage">
                <img src={post.acf?.section7img?.url} alt={post.acf?.section7img?.alt}></img>
            </div>) 
            : ""}

            {post.acf?.section7 ? 
            (<div className="projectIntro">
                <div dangerouslySetInnerHTML={{ __html: post.acf?.section7}}></div>
            </div>) 
            : ""}

            {post.acf?.jollyvid2 ? 
            (<div className="sectionImage">
                <video loop autoPlay muted>
                    <source src={post.acf?.jollyvid2?.url} type="video/webm" />
                </video>
            </div>) 
            : ""}

            {post.acf?.section8 ? 
            (<div className="projectIntro">
                <div dangerouslySetInnerHTML={{ __html: post.acf?.section8}}></div>
            </div>) 
            : ""}

            {post.acf?.instaembed2 ? 
            (<div className="projectEmbed">
                <InstagramEmbed url={post.acf?.instaembed2} width={500} />
            </div>) 
            : ""}

            {post.acf?.section8img ? 
            (<div className="sectionImage">
                <img src={post.acf?.section8img?.url} alt={post.acf?.section8img?.alt}></img>
            </div>) 
            : ""}

            {post.acf?.section9 ? 
            (<div className="projectIntro">
                <div dangerouslySetInnerHTML={{ __html: post.acf?.section9}}></div>
            </div>) 
            : ""}

            
        </section>
    );
}

// imported into ProjectPage.js

import parse from "html-react-parser";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function ProjectPageHeader( { post }) {
    // animate after DOM is rendered 👀
    useEffect(() => {
        gsap.to(".projectPageHeader", {
            opacity: 1,
            duration: 1
        });
    }, []);


    return (
        <>
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
        </>
    );
}
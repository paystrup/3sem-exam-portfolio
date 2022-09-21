import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function AboutMeTeaser() {
    gsap.registerPlugin(ScrollTrigger);

    // animate after DOM is rendered 👀
    useEffect(() => {
        gsap.to(".aboutMeTeaserHeader", {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            start: 'top',
            toggleActions: "restart none none none"
          }
        });
        gsap.to(".aboutMeTeaserLower", {
            y: 0,
            delay: 0.6,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              start: 'top',
              toggleActions: "restart none none none"
            }
        });
    }, []);

    return (
        <section className="aboutMeTeaser">
            <div className="aboutMeTeaserHeader"> 
                <h4>I design and build solid user-centered experiences that help brands grow and stand out in both the digital and analog world.</h4>
                <Link to="/about">
                    <ArrowUpRightIcon/>READ MORE ABOUT ME
                </Link>
            </div>
            <div className="aboutMeTeaserLower">
                <p>As a Multimedia Designer, Digital Artist and Sound Designer the combination of my competences for design, code and sound positions me in a unique place in the web design world.</p>
            </div>
        </section>
    );
}
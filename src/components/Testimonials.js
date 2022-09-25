import TestimonialsRow from "./TestimonialsRow";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

export default function Testimonials() {
    gsap.registerPlugin(ScrollTrigger);

    // animate after DOM is rendered 👀
    useEffect(() => {
        gsap.to(".testimonialsHeaderText", {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '.testimonialsHeaderText',
                toggleActions: "restart none none none"
            }
        });

        gsap.to(".testimonialsLink", {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
            scrollTrigger: {
                trigger: '.testimonialsLink',
                toggleActions: "restart none none none"
            }
        });
    }, []);

    return (
        <section className="testimonials2">
            <div className="testimonialsHeader">
                <h2 className="testimonialsHeaderText">
                    Clients I've worked with.
                    <br></br>
                    <span>Are you up next?</span>
                </h2>
                <div className="testimonialsLink">
                    <a className="testimonialsHeaderLink" href="/projects">
                        <ArrowUpRightIcon /> SEE MORE WORK
                    </a>
                </div>
              
            </div>
            <TestimonialsRow/>
        </section>
    );
}
import TestimonialsRow from "./TestimonialsRow";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Testimonials() {
    gsap.registerPlugin(ScrollTrigger);

    // animate after DOM is rendered 👀
    useEffect(() => {
        gsap.to(".testimonialsHeaderText", {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '#trigger',
            toggleActions: "restart none none none"
          }
        });

        gsap.to(".testimonialsHeaderLink", {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
                trigger: '#trigger',
                toggleActions: "restart none none none"
            }
        });
    }, []);

    return (
        <section id="testimonials" className="testimonials2">
            <div className="testimonialsHeader">
                <h2 className="testimonialsHeaderText">
                    Clients I've worked with.
                    <br></br>
                    <span>Are you next?</span>
                </h2>
                <a className="testimonialsHeaderLink" href="/projects">
                    SEE MORE WORK
                </a>
            </div>
            <TestimonialsRow id="trigger"/>
        </section>
    );
}
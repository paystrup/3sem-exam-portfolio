import BigTextMarquee from "./BigTextMarquee"
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ArrowDownRightIcon } from '@heroicons/react/24/solid'
import LandingVideo from "../components/assets/test2.mp4"

export default function LandingPage() {
    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useEffect(() => {            
        tl.current = gsap.timeline(({defaults: {duration: 0.5}}))
          .to(q(".landingBoxUpper"), {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.3
          })
          .to(q(".marqueeLanding"), {
            y: 0,
            opacity: 1
          })
          .to(q(".landingVideo"), {
            y: 0,
            opacity: 1
        });
    }, [q]);

    // ✨ big text marquee component on the landingpage
    // ▶ text and speed
    const LandingBigText = 'Nikolaj Pejstrup';
    const speed = 150;

    return (
        <section className="landingPage" ref={el}>
            <div className="landingVideo">
                {/* <video src={LandingVideo} type="video/mp4" autoPlay muted loop></video> */}
            </div>
            <div className="landingContainer">
                <div className="landingBoxUpper">
                    <h4>Digital artist and sound designer from Aarhus, Denmark. Currently studying Multimedia Design, specializing in Frontend Development.</h4>
                    <div className="landingCTA">
                        <ArrowDownRightIcon/>
                        <a href="/#testimonials">EXPLORE MY PORTFOLIO BELOW</a>
                    </div>
                    
                </div>
                <div className="marqueeLanding">
                    <BigTextMarquee text={LandingBigText} speed={speed}/>
                </div>
            </div>
        </section>
    );
}
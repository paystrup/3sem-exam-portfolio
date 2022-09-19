import BigTextMarquee from "./BigTextMarquee"
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

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
          });
    }, [q]);

    const LandingBigText = 'Nikolaj Pejstrup';
    const speed = 150;
    return (
        <section className="landingPage" ref={el}>
            <div className="landingContainer">
                <div className="landingBoxUpper">
                    <h4>Digital artist and sound designer from Aarhus, Denmark. Currently studying Multimedia Design.</h4>
                    <p>EXPLORE MY PORTFOLIO BELOW</p>
                </div>
                <div className="marqueeLanding">
                    <BigTextMarquee text={LandingBigText} speed={speed}/>
                </div>
                
            </div>
     
        </section>
            
    )
}
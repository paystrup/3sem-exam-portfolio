import BigTextMarquee from "./BigTextMarquee"
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ArrowDownRightIcon } from '@heroicons/react/24/solid'
import landingImage from '../components/assets/personal4.png'

export default function LandingPage() {
    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useEffect(() => {            
        tl.current = gsap.timeline(({defaults: {duration: 0.5}}))
        
        .to(q(".landingImage"), {
            y: 0,
            opacity: 1
        })
        .to(q(".landingBoxUpper"), {
            y: 0,
            opacity: 1,
            duration: 0.5
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
    const LandingBigText = 'nikolaj pejstrup';
    const speed = 180;

    return (
        <section className="landingPage" ref={el}>
            <div className="landingContainer">
                <div className="landingBoxUpper">
                    <div className="landingText">
                        <h4>Digital artist and sound designer from Aarhus, Denmark. Currently studying Multimedia Design, specializing in Frontend Development.</h4>
                        <div className="landingCTA">
                            <ArrowDownRightIcon/>
                            <a href="/#aboutTeaser">EXPLORE MY PORTFOLIO BELOW</a>
                        </div>
                    </div>
           
                    <div className="landingText">
                        <h4>PORTFOLIO © 2022</h4>
                    </div>
                </div>
                <div className="marqueeLanding">
                    <BigTextMarquee text={LandingBigText} speed={speed}/>
                </div>
            </div>
            <div className="landingImage">
                <img src={landingImage} alt="Personal Paystrup"></img>
            </div>
        </section>
    );
}
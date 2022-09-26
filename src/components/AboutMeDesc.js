import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutMeDesc() {
    gsap.registerPlugin(ScrollTrigger);
    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useEffect(() => {            
        tl.current = gsap.timeline(({defaults: {duration: 0.5, ease: "power3.inOut"}}))
          .to(q(".aboutImage"), {
            y: 0,
            opacity: 1,
            duration: 1,
            'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)'
          })
          .to(q(".aboutPageHeaderBox"), {
            opacity: 1
          });
    }, [q]);

    return (
        <section className="aboutMe" ref={el}>
            <h3>ABOUT ME</h3>
            <p>
                I'm Nikolaj. A Digital Artist, Sound Designer and Multimedia Design Student from Aarhus, Denmark - currently specializing in Frontend Development. I love italian food, art and football. I have a deep passion for creating solutions that dare to stand out, solutions that matter. I see myself as a person who is an enthusiastic creative, detail orientated, hard working and a fast learner.
                <br></br>
                <br></br>
                The latest 6 years I've worked freelance and helped international brands by creating experiences through the combination of graphic design, 3D, motion graphics and sound. I've been blessed to work with brands such as Puma, Universal Music, Sony Music, Warner Music, Depop, Splice and many more...
                <br></br>
                <br></br>
                I've always wanted to use my competences to create interactive experiences, and this lead me to studying Multimedia Design at Business Academy Aarhus in 2021. This has enabled me to combine my previous competences about graphic design, motion design and sound design with programming to create cool web experiences. 
                <br></br>
            </p>
        </section>
    );
}
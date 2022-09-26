import headerImage from "../components/assets/personal3.png"
import payicon from "../components/assets/payicon.svg"
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutPageHeader() {
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
          gsap.to(".aboutImg", {
            y: -150,
            opacity: 0,
            scrollTrigger: {
              scrub: true,
              end: '+=1000'
            }
          });
    }, [q]);

    return (
      <section className="aboutPageHeader" ref={el}>
           <div className="aboutImage">
              <img
              className="aboutImg"
              src={headerImage}
              alt="Nikolaj Pejstrup / Paystrup sitting in his home studio producing music"
              ></img>
          </div>
          <div className="aboutPageHeaderBox">
              
              <p>
              <img src={payicon} alt="Paystrup Icon"></img> I have a need, a passion, to be creative, to create, to let my ideas
                  flow — wherever it's through art, music, design or coding.
                  I'm always learning, always exploring, always developing my skills.
              </p>
          </div>
          <div className="aboutPageHeaderLinks">
            <a className="mainBtn" href="https://www.linkedin.com/in/nikolajpejstrup/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <a className="mainBtn" href="http://wordpress.paystrup.dk/wp-content/uploads/2022/09/Nikolaj-Friis-Pejstrup-CV2022.pdf" target="_blank" rel="noreferrer noopener"> DOWNLOAD MY CV</a>
          </div>
          
      </section>
    );
}
import { NavLink } from "react-router-dom";
import logo from "../components/assets/logo.svg"
import { NavLinks } from "./data/NavLinks";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Navigation() {
    const [nav, setNav] = useState(false);

    // gsap animations, ref to objects 📌
    const logoRef = useRef(); // navbar logo
    const navLinksRef = useRef(); // navbar links

    // animate after DOM is rendered 👀
    useEffect(() => {
        gsap.to(logoRef.current, { y: 0, opacity: 1, duration: 1});
        gsap.to(navLinksRef.current, { y: 0, opacity: 1, duration: 0.5, delay: 0.4});
    });

    return (
        <nav>
            <div className="navLogoContainer" ref={logoRef}>
                <NavLink to="/" className="navLogo"><a href="/"><img src={logo} alt="Paystrup / Nikolaj Pejstrup Logo"></img></a></NavLink>
            </div>
            <div className="menuItems">
                <div onClick={() => setNav(!nav)} className="menuContainerMobile">
                    {nav ? 
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="2" 
                            stroke="currentColor" 
                            class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg> : 
                        
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={2} 
                            stroke="currentColor" 
                            className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                    } 
                </div>
                <ul className="menuLinks" ref={navLinksRef}>
                    {
                        NavLinks.map(({name, path, id}, index) => {
                            return (
                                <li><NavLink to={path} key={id}>{name}</NavLink></li>
                            )
                        })
                    }
                    <li><a href="mailto:hello@paystrup.dk"><button>Get in touch</button></a></li>
                </ul>
            </div>
            {nav ? 
                (<div className="menuLinksMobile">
                    <ul>
                        {
                            NavLinks.map(({name, path, id}, index) => {
                                return (
                                    <li onClick={() => setNav(false)}><NavLink to={path} key={id}>{name}</NavLink></li>
                                )
                            })
                            
                        }
                    </ul>
                </div>)

                : ""
            }
        </nav>
    )
}
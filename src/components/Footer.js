import { NavLink } from "react-router-dom";
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

export default function Footer() {
    // 🌅 date for footerBottom
    const date = new Date();
    const n = date.toDateString();
    const time = date.toLocaleTimeString();
    const timeDate = n.toUpperCase() + time.toUpperCase();

    return (
        <footer>
            <div className="footerTop">
                <div className="footerCTA">
                    <h2>Let's work — together.</h2>
                    <h2><a href="mailto:hello@paystrup.dk"><ArrowLongRightIcon />Get in touch</a></h2>
                </div>
                <div className="footerRight">
                    <div>
                        <h3>Contact</h3>
                        <ul className="footerLinks">
                            <li><a href="mailto:hello@paystrup.dk">hello@paystrup.dk</a></li>
                            
                            <li><a href="tel:+4528730214">+45 2873 0214</a></li>
                            <li>Denmark, Aarhus C</li>                 
                        </ul>    
                    </div>
                    <div>
                        <h3>Sitemap</h3>
                        <ul className="footerLinks">
                            <li><li><a href="/">Home</a></li></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/projects">Projects</NavLink></li>                   
                        </ul>    
                        
                    </div>
                    <div>
                        <h3>Socials</h3>
                        <ul className="footerLinks">
                            <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/niko_paystrup/?hl=en">Instagram</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://github.com/paystrup">GitHub</a></li> 
                            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nikolajpejstrup/">LinkedIn</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.behance.net/paystrup">Behance</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://payxbuch.com/">BeatStars</a></li>                    
                        </ul>    
                    </div>
                </div>
            </div>
            <div className="stripe3"></div>
            <div className="footerBottom">
                <p>ALL RIGHTS SERVED © 2022</p>
                <p>PAYSTRUP / NIKOLAJ FRIIS PEJSTRUP</p>
                <p>{timeDate}</p>
            </div>
        </footer>
    );
}
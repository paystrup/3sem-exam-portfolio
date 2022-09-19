import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div>
                <h2>Let's work together.</h2>
                <h2><u>Get in touch</u></h2>
            </div>
            <div className="footerRight">
                <div>
                    <h3>Contact</h3>
                    <ul className="footerLinks">
                        <li><a href="mailto:hello@paystrup.dk"><span>hello@paystrup.dk</span></a></li>
                        <li>Aarhus, Denmark</li>
                        <li><a href="tel:+4528730214">+45 2873 0214</a></li>                 
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
                    </ul>    
                </div>
            </div>
        </footer>
    );
}
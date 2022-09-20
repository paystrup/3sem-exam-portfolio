import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

export default function AboutMeTeaser() {
    return (
        <section className="aboutMeTeaser">
            <div className="aboutMeTeaserHeader"> 
                <h4>I design solid user-centered experiences that help brands grow and stand out in both the digital and analog world.</h4>
                <Link to="/about">
                    <ArrowUpRightIcon/>Read more about me
                </Link>
            </div>

            <p>As a Multimedia Designer, Digital Artist and Sound Designer the combination of my competences for design, code and sound positions me in a unique place in the web design world.</p>
        </section>
    );
}
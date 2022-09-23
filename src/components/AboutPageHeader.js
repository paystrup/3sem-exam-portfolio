import headerImage from "../components/assets/personal3.png"

export default function AboutPageHeader() {
    return (
        <section className="aboutPageHeader">
            
            <div>
                <p>
                    I'm Nikolaj Pejstrup, also known by my artist name Paystrup - an homage to my american side of the family. I'm a Danish Multimedia Design student at Business Academy Aarhus, currently specializing in Frontend Development. 
                    
                    <br></br>
                    <br></br>
                    I'm an experienced digital artist and sound designer from Aarhus, Denmark. The latest 8 years, I've been helping international brands with unique, cutting-edge solutions through the use of graphic design, 3D, motion graphics and sound design.

                    <br></br>
                    <br></br>
                    Through my freelance work I've been blessed to work with renowned brands such as Universal Music, Sony Music, Puma, Mizuno, Splice, Depop and many more.

                    <br></br>
                    <br></br>
                    As a person I have a need, a passion, to be creative, to create, to let my ideas flow - wherever it's through art, music, graphic design or coding. I'm always learning, always exploring, always developing my skills.
                </p>
            </div>
            <img src={headerImage} alt="Nikolaj Pejstrup / Paystrup sitting in his home studio producing music"></img>
        </section>
    );
}
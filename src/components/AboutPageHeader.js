import headerImage from "../components/assets/personal4.png"
import payicon from "../components/assets/payicon.svg"

export default function AboutPageHeader() {
    return (
      <section className="aboutPageHeader">
        <div className="aboutPageHeaderBox">
            
            <p>
            <img src={payicon} alt="Paystrup Icon"></img> I have a need, a passion, to be creative, to create, to let my ideas
                flow — wherever it's through art, music, design or coding.
                I'm always learning, always exploring, always developing my skills.
            </p>
        </div>
        <div className="aboutImage">
            <img
            src={headerImage}
            alt="Nikolaj Pejstrup / Paystrup sitting in his home studio producing music"
            ></img>
        </div>
      </section>
    );
}
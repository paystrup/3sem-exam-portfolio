import payicon from "../components/assets/payiconWhite.svg"

export default function HireMe() {

    return (
        <section className="hireMe">
            <div className="hireMeBox">
                <p>
                    <img src={payicon} alt="Paystrup Icon"></img> I'm looking for an internship Q1 2023 in Aarhus, can I help your team create ship cool experiences? I like Frontend Development, Graphic Design, UX/UI.
                </p>
            </div>
            <div className="hireMeLinks">
                <a className="mainBtn" href="https://www.linkedin.com/in/nikolajpejstrup/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                <a className="mainBtn" href="mailto:hello@paystrup.dk" target="_blank" rel="noreferrer noopener">SEND ME A MAIL</a>
            </div>
        </section>

    );
}
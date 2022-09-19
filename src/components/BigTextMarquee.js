import Marquee from "react-fast-marquee";
import payicon from "../components/assets/payicon.svg"

export default function BigTextMarquee( { text, speed }) {

    return (
        <Marquee speed={speed} gradient={false}>
            <div className="bigTextContainer">
                <h1>{text}</h1>
                <img src={payicon} alt="Paystrup / Nikolaj Pejstrup Logo"></img>
                <h1>{text}</h1>
                <img src={payicon} alt="Paystrup / Nikolaj Pejstrup Logo"></img>
            </div>
        </Marquee>
    );
}
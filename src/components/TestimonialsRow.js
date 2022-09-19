import pumaLogo from "./assets/pumaLogo.svg";
import universalLogo from "./assets/universalLogo.svg";
import sonyLogo from "./assets/sonyLogo.svg";
import spliceLogo from "./assets/spliceLogo.svg";
import depopLogo from "./assets/depopLogo.svg";
import warnerLogo from "./assets/warnerLogo.svg";
import Marquee from "react-fast-marquee";

export default function TestimonialsRow() {

    return (
        <Marquee speed={80} gradient={false}>
            <div className="logoRow">
                <div className="singleLogo">
                    <div className="singleLogoInner"><img src={pumaLogo} alt="Puma logo"></img></div>
                </div>
                <div className="singleLogo">
                    <div className="singleLogoInner"><img src={universalLogo} alt="Puma logo"></img></div>
                </div>
                <div className="singleLogo">
                    <div className="singleLogoInner"><img src={sonyLogo} alt="Puma logo"></img></div>
                </div>
                <div className="singleLogo">
                    <div className="singleLogoInner"><img src={spliceLogo} alt="Puma logo"></img></div>
                </div>
                <div className="singleLogo">
                    <div className="singleLogoInner"><img src={depopLogo} alt="Puma logo"></img></div>
                </div>
                <div className="singleLogo">
                    <div className="singleLogoInner"><img src={warnerLogo} alt="Puma logo"></img></div>
                </div>
            </div>
        </Marquee>
    );
}
import React from "react";
import HeroPhoto from "./HeroPhoto";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMediaBox from "./SocialMediaBox";

function HeroPart() {
  return (
    <>
    <div className="heroBanner">
      <div className="HeroPart">
        <HeroPhoto />
        <p className="description">
          Hello, I’m <span>Dipan Sarkar</span> UX/UI Designer and <br />
          Front-end Developer Based in India❤️.
        </p>
        <SocialMediaBox />
      </div>

      <div className="heroFooter">
        <div className="contactInfo">
          <p>Email : dipansarkar1005@gmail.com</p>
          <a href="tel">call : +91 7003224488</a>
        </div>
        <h1 className="Typewriter">
          I{" "}
          <span>
            <Typewriter
              words={[
                "Am A Developer",
                "Code Your Thoughts",
                "Build Web Apps",
                "Code Cool Websites",
            ]}
            loop={10000}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={console.log("done")}
            onType={console.log("type")}
            />
          </span>
        </h1>
      </div>
    </div>
    
            </>
  );
}

export default HeroPart;

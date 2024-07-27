import React from "react";
import TypewriterText from "./TypewriterText";
import SocialMediaBox from "./SocialMediaBox";
import { transform } from "framer-motion";
import Description from "./Description";
import ContactInfo from "./ContactInfo";
function HomeHeroPart() {
  const Typewriterstyle = {
    position: "absolute",
    top: "40%",
    left:"50%",
    transform:"translate(-50% , -50% )",
   
  };

  const socialMediaBoxStyle = {
    bottom:"13rem"
  }
  const descriptionStyle = {
    // position:"absolute",
    bottom:"30%",
    left:"50%"
  }


  return (
    <div
      style={{ color: "white", position: "relative" }}
      className="homeHeroPart"
    >
      <TypewriterText typeWriterPosition="typeWriterPosition" Typewriterstyle={Typewriterstyle} />
      <SocialMediaBox socialMediaBoxStyle={socialMediaBoxStyle} />
      <div className="HomeFooter">
        <ContactInfo/>
      <Description descriptionStyle={descriptionStyle} />
      </div>
    </div>
  );
}

export default HomeHeroPart;

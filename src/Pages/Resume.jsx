import React from "react";
import Comp1 from "../Components/Comp1";
import Navbar from "../Components/Navbar";
import SocialMediaBox from "../Components/SocialMediaBox";
import ContactInfo from "../Components/ContactInfo";

function Resume() {
  const socialMediaBoxStyle = {
    position: "fixed",
  };
const contactInfoStyle={
  position: "fixed",
  bottom: "4rem",
  left: "4rem",
}
  return (
    <div
      className="resume"
      style={{ position: "relative", backgroundColor: "red" }}
    >
      <Comp1 />
      <div
        className="resumeComp2 comp"
        style={{
          position: "absolute",
          minHeight: "100vh",
          overflowY: "scroll",
        }}
      >
        <Navbar />
        <h1 className="MiddleText">Resume</h1>
        <SocialMediaBox socialMediaBoxStyle={socialMediaBoxStyle} />

        <ContactInfo contactInfoStyle={contactInfoStyle} />
      </div>
    </div>
  );
}

export default Resume;

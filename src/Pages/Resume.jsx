import React from "react";
import Comp1 from "../Components/Comp1";
import Navbar from "../Components/Navbar";
import SocialMediaBox from "../Components/SocialMediaBox";
import ContactInfo from "../Components/ContactInfo";
import ResumeComp2 from "../Components/ResumeComp2";

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
     <ResumeComp2/>
    </div>
  );
}

export default Resume;

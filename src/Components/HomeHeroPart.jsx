import React from "react";
import TypewriterText from "./TypewriterText";
import SocialMediaBox from "./SocialMediaBox";
function HomeHeroPart() {
  const style = {
    position: "absolute",
    top: "50%",
    border: "2px solid red",
    backgroundColor: "white",
  };
  return (
    <div
      style={{ color: "white", position: "relative" }}
      className="homeHeroPart"
    >
      <TypewriterText typeWriterPosition="typeWriterPosition" />
<SocialMediaBox/>

    </div>
  );
}

export default HomeHeroPart;

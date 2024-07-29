import Navbar from "./Navbar";
import SocialMediaBox from "./SocialMediaBox";
import ContactInfo from "./ContactInfo";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ResumeComp2() {
  const socialMediaBoxStyle = {
    position: "fixed",
  };
  const contactInfoStyle = {
    position: "fixed",
    bottom: "4rem",
    left: "4rem",
  };
  return (
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
      <div className="bottomNavigation">
        <div className="links">
          <Link>Home</Link> / <Link>Resume</Link>
        </div>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
    </div>
  );
}

export default ResumeComp2;

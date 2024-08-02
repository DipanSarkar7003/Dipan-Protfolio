import Navbar from "./Navbar";
import SocialMediaBox from "./SocialMediaBox";
import ContactInfo from "./ContactInfo";
import { Link } from "react-router-dom";
import profile from "../assets/Profile.jpg";
import cv from "../assets/cv.pdf";
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
        <i className="fa-solid fa-chevron-down downButton"></i>
      </div>

      <div className="ResumeWrapper">
        <div className="resumeTop">
          <img className="ResumeProfilePicture" src={profile} alt="" />
          <p className="resumeDescription">
            Hello! I’m Dipan Sarkar. Web developer from India, West bengal,
            Kolkata. I have rich experience in web site design and building,
            also I am good at wordpress. I love to talk with you about our
            unique Project.
          </p>
          <div className="resumeDescBox1 resumeDescBox">
            <p>
              <span>Age</span> : 21
            </p>
            <p>
              <span>Freelance</span> : Available
            </p>
            <p>
              <span>Phone</span> : 7003224488
            </p>
          </div>
          <div className="resumeDescBox2 resumeDescBox">
            <p>
              <span>Residence</span> : India
            </p>
            <p>
              <span>Address</span> : Kolkata
            </p>
            <p>
              <span>E-mail</span> : dipansarkar1005@gmail.com
            </p>
          </div>
        </div>
        <a href={cv} className="downloadCv">
          <span className="downloadCvInnerText"> Download CV</span>
          <span className="circle"></span>
        </a>
        {/* RESUME TOP PART ENDS HERE  */}

        <div className="resumeMain">
          <h2 className="educationHeading">Education : -</h2>
          <div className="resumeEducationBox">
            <div className="resumeEducation1 resumeEducation">
              <h3>Bachelor of  Computer Application</h3>
              <p>Indira Gandhi National Open Univesity, Kolkata, West Bengal</p>
              <p className="current" id="current">2023-present</p>
            </div>
            <div className="resumeEducation2 resumeEducation">
              <h3>Higher Secondary Examination</h3>
              <p>Barrackpore Latbagan High school</p>
              <p>2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeComp2;

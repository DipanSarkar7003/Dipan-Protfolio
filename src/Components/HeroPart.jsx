import HeroPhoto from "./HeroPhoto";
import SocialMediaBox from "./SocialMediaBox";
import TypewriterText from "./TypewriterText";

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
         <TypewriterText/>
        </div>
      </div>
    </>
  );
}

export default HeroPart;

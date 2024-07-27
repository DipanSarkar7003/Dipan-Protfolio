import ContactInfo from "./ContactInfo";
import Description from "./Description";
import HeroPhoto from "./HeroPhoto";
import SocialMediaBox from "./SocialMediaBox";
import TypewriterText from "./TypewriterText";

function HeroPart() {
  return (
    <>
      <div className="heroBanner">
        <div className="HeroPart">
          <HeroPhoto />
          <Description />
          <SocialMediaBox />
        </div>

        <div className="heroFooter">
         <ContactInfo/>
          <TypewriterText />
        </div>
      </div>
    </>
  );
}

export default HeroPart;

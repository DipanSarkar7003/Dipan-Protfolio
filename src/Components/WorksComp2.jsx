import Navbar from "./Navbar";
import SocialMediaBox from "./SocialMediaBox";
import ContactInfo from "./ContactInfo";
import { Link } from "react-router-dom";
import work1 from "../assets/images/work1.jpeg";
import work2 from "../assets/images/work2.jpeg";
function WorksComp2() {
  const worksArrey = [
    {
      id: 1,
      title: "REZ project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel felis id diam luctus ultricies. Integer semper, purus vel tempus fermentum, nunc lectus viverra velit, id elementum purus ipsum id enim.",
      link: "https://project-re1845ykb-dipansarkar7003s-projects.vercel.app/?vercelToolbarCode=qPRYLH0QTHo5Hfa",
      image: work1,
      date: "2023",
      tools: ["HTML", "CSS", "JavaScript"],
    },

    {
      id: 2,
      title: "CoinX project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel felis id diam luctus ultricies. Integer semper, purus vel tempus fermentum, nunc lectus viverra velit, id elementum purus ipsum id enim.",
      link: "https://coin-x-project-ge6c0o69j-dipansarkar7003s-projects.vercel.app/",
      image: work2,
      date: "2024",
      tools: ["REACT", "Jsx", "JavaScript"],
    },
  ];

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
      <h1 className="MiddleText">Works</h1>

      <SocialMediaBox socialMediaBoxStyle={socialMediaBoxStyle} />
      <ContactInfo contactInfoStyle={contactInfoStyle} />
      <div className="bottomNavigation">
        <div className="links">
          <Link>Home</Link> / <Link>Works</Link>
        </div>
        <i className="fa-solid fa-chevron-down downButton UpdownButton"></i>
      </div>
      <div className="workWrapper">
        {worksArrey.map((work) => {
          console.log(work.image);
          return (
            <div className="workItem" key={work.id}>
              <div className="workImage">
                <img src={work.image} alt={work.title} />
              </div>
              <div className="workContent">
                <div>
                  <h3>{work.title}</h3>

                  <div className="workTools">
                    {work.tools.map((tool) => (
                      <span key={tool}>{tool} , {" "}</span>
                    ))}
                  </div>
                  <div className="workDate">{work.date}</div>
                </div>
                <div className="workLinks">
                  <a href={work.link} target="_blank" rel="noopener noreferrer">
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          );
          // return null;  // Comment this line to hide all works
        })}
      </div>
    </div>
  );
}

export default WorksComp2;

import Navbar from "../Components/Navbar";
import Comp1 from "../Components/Comp1";
import HomeHeroPart from "../Components/HomeHeroPart";

function Home() {
  return (
    <div
      className="Home"
      style={{ position: "relative", backgroundColor: "#262626" }}
    >
      <Comp1 />
      <div className="HomeComp2 comp">
        <Navbar />
        <HomeHeroPart />
      </div>
      <div className="comp" id="comp3"></div>
    </div>
  );
}

export default Home;

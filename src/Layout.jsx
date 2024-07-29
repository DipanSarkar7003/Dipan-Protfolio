import Comp2 from "./Comp2";
import Comp1 from "./Components/Comp1";

const Layout = () => {
  return (
    <div
      className="layout"
      style={{ position: "relative", backgroundColor: "#262626" }}
    >
      <Comp1 />
      <Comp2 />
      <div className="comp" id="comp3"></div>
    </div>
  );
};

export default Layout;

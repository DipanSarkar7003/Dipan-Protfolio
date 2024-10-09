import Comp2 from "./Comp2";
import Comp1 from "./Components/Comp1";
import Comp3 from "./Components/Comp3";

const Layout = () => {
  return (
    <div
      className="layout"
      style={{ position: "relative", backgroundColor: "#262626" }}
    >
      <Comp1 />
      <Comp2 />
      <Comp3 />
    </div>
  );
};

export default Layout;

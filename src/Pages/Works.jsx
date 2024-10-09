import React from "react";
import Comp1 from "../Components/Comp1";
import Navbar from "../Components/Navbar";
import WorksComp2 from "../Components/WorksComp2";

function Works() {
  return (
    <div
      className="work"
      style={{ position: "relative", backgroundColor: "#262626" }}
    >
      <Comp1 />
      <WorksComp2 />
    </div>
  );
}

export default Works;

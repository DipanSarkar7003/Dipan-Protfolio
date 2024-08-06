import React from "react";
import ProgressItem from "./ProgressItem";

const techStack = [
  {
    name: "HTML/CSS",
    percentage: 80,
  },
  {
    name: "JavaScript",
    percentage: 80,
  },
  {
    name: "React/redux",
    percentage: 65,
  },
  {
    name: "github",
    percentage: 70,
  }
];

function ProgressComp() {
  return (
    <div className="  techStackComp">
      <h2 className="techStackHeadding resumePartHeadding">technical Stack : -</h2>
      <div style={{display:"flex"}} className="progressComp">
        {techStack.map((item, index) => (<>
          <ProgressItem key={index} item={item} color={"#4bffa5"} />
        </>
        ))}
      </div>
    </div>
  );
}

export default ProgressComp;

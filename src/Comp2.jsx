import { useRef } from "react";
import Navbar from "./Components/Navbar";
import HeroPart from "./Components/HeroPart";
import { motion } from "framer-motion";
import SocialMediaBox from "./Components/SocialMediaBox";
import { Outlet } from "react-router-dom";

function Comp2() {
  return (
    <>
      <div className="comp" id="comp2">
        <Navbar />
        <HeroPart />
      </div>
    </>
  );
}

export default Comp2;

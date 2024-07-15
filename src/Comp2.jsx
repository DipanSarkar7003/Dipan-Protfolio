import  {  useRef  } from "react";
import Navbar from "./Components/Navbar";
import HeroPart from "./Components/HeroPart";
import { motion } from "framer-motion";
import SocialMediaBox from "./Components/SocialMediaBox";

function Comp2() {
  const pointerPosition = useRef({ x: 0, y: 0 });

  function pointerMove(e) {
    console.log(e.clientX, e.clientY);
    pointerPosition.current = { x: e.clientX, y: e.clientY };
    console.log(pointerPosition.current.x);
  }

  return (<>
    <div className="comp" id="comp2" onMouseMove={(e) => pointerMove(e)}>
      <Navbar />
      <HeroPart />
      <motion.div
        animate={{ x: pointerPosition.current.x, y: pointerPosition.current.y , transition:{type:'spring' , mass:3} }}
        className="pointer"
        ></motion.div>
<SocialMediaBox/>
    </div>
        </>
  );
}

export default Comp2;

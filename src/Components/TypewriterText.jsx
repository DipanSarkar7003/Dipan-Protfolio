import { Typewriter } from "react-simple-typewriter";

function TypewriterText({typeWriterPosition , Typewriterstyle}) {
  console.log(Typewriterstyle)

  return (
    <h1 className={`Typewriter `} style={Typewriterstyle} >
      I{" "}
      <span style={{color:" #4bffa5"}}>
        <Typewriter
          words={[
            "Am A Developer",
            "Code Your Thoughts",
            "Build Web Apps",
            "Code Cool Websites",
          ]}
          loop={10000}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          onLoopDone={console.log("done")}
          onType={console.log("type")}
        />{" "}
      </span>
    </h1>
  );
}

export default TypewriterText;

import { color } from "framer-motion";

function ProgressItem({ item, color }) {
  const progressItemStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: `radial-gradient(closest-side, #101010 79%, transparent 80% 100%),conic-gradient(${color} ${item.percentage}%, #282828 0)`,
    color: "black",
  };
  console.log(item);

  return (
    <div
      className="progressWholeItem"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.3rem",
      }}
    >
      <div style={{ position: "relative" }}>
        <div className="progress-bar" style={progressItemStyle}>
          <progress
            value="90"
            min="0"
            max="100"
            style={{
              visibility: "hidden",
              height: "0",
              width: "0",
              color: "red",
              zIndex: "2",
            }}
          ></progress>
        </div>
        <div
          className="progressbarBefore"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50% , -50%)",
          }}
        >
          {item.percentage}%
        </div>
      </div>

      <p className="progressItemName">{item.name}</p>
    </div>
  );
}

export default ProgressItem;

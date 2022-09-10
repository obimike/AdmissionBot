import React, { useState } from "react";
import { VscHubot, VscChromeClose } from "react-icons/vsc";

function Fab(props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={props.style}>
      <div
        className="transition-3 hey"
        style={{
          position: "absolute",
          color: "#00828b",
          backgroundColor: "#fff",
          boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
          opacity: hovered ? "1" : "0",
        }}
      >
        Hey, It's Eddie!!!
      </div>

      <button
        className="transition-3 fab"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => props.onClick && props.onClick()}
        style={{
          boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          ...{ border: hovered ? "2px solid #00828b" : "4px solid #ce0058" },
        }}
      >
        {!props.visible ? (
          <VscHubot className="icon" color="00828b" />
        ) : (
          <VscChromeClose className="icon" color="#ce0058" />
        )}
      </button>
    </div>
  );
}

export default Fab;

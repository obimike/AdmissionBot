import React, { useState } from "react";
import { FaMousePointer } from "react-icons/fa";
import { BsPhoneFill } from "react-icons/bs";

function Hero_text() {
  const [hover, setHover] = useState(false);
  const [hovered, setHovered] = useState(false);
  return (
    <div className="hero-text">
      <div className="apply_text">
        Apply now through Clearing Join Hull this September
      </div>
      <div className="join_text">Join Hull this September</div>
      <div className="call_button">
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            backgroundColor: hover ? "#fff" : "#ce0058",
            color: hover ? "#ce0058" : "#fff",
            border: hover ? "4px solid #fff" : "4px solid #ce0058",
          }}
          className="call"
        >
          <BsPhoneFill /> Call 01482 243009
        </button>
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            backgroundColor: hovered ? "#ce0058" : "#00000000",
            color: "#fff",
            fontWeight: 600,
            border: hovered ? "4px solid #ce0058" : "4px solid #fff",
          }}
          className="apply"
        >
          <FaMousePointer /> Apply now
        </button>
      </div>
    </div>
  );
}

export default Hero_text;

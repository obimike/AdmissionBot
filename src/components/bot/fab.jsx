import React, { useState } from "react";
import { VscHubot, VscChromeClose } from "react-icons/vsc";

import { useAuth } from "../../util/authProvider";

function Fab() {
  const { setvisible, visible } = useAuth();
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: "24px", right: "24px" }}>
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
        Ask Eddie!
      </div>

      <button
        className="transition-3 fab"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          console.count("onClick");
          setvisible(!visible);
        }}
        style={{
          boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          ...{ border: hovered ? "2px solid #00828b" : "4px solid #ce0058" },
        }}
      >
        {!visible ? (
          <VscHubot className="icon" color="00828b" />
        ) : (
          <VscChromeClose className="icon" color="#ce0058" />
        )}
      </button>
    </div>
  );
}

export default Fab;

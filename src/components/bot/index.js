import React, { useState } from "react";
import FAB from "./fab";
import ChatWindow from "./chat_window";

function Index() {
  const [visible, setvisible] = useState(false);

  return (
    <div>
      <ChatWindow visible={visible} />
      <FAB
        onClick={() => setvisible(!visible)}
        style={{ position: "fixed", bottom: "24px", right: "24px" }}
        visible={visible}
      />
    </div>
  );
}

export default Index;

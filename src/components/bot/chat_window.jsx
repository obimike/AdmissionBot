import ReactWebChat from "botframework-webchat";
import React from "react";
import Logo from "../../assets/images/logo.png";
import { useAuth } from "../../util/authProvider";
import { DirectLine } from "botframework-directlinejs";

function Chat_window() {
  const { gToken, visible } = useAuth();

  const sOption = {
    botAvatarImage: Logo,
    botAvatarInitials: "",
    rootZIndex: 0,
    bubbleBackground: "#e5e5ea",
    bubbleFromUserBackground: "#248bf5",
    bubbleFromUserTextColor: "#fff",
    bubbleBorderColor: "#00828b",
    bubbleBorderRadius: 24,
    bubbleFromUserBorderColor: "#fff",
    bubbleFromUserBorderRadius: 24,
    suggestedActionBorderRadius: 24,
    suggestedActionLayout: "stacked",
    hideUploadButton: true,
    backgroundColor: "#1C00ff00",
  };

  const directLine = new DirectLine({ token: gToken });

  return (
    <div
      className="transition-5 chatbox"
      style={{
        backgroundColor: "#fff",
        // Border
        borderRadius: "12px",
        border: "2px solid #00828b",
        overflow: "hidden",
        scrollBehavior: "smooth",
        //shadow
        boxShadow: "0px 0px 16px 6px rgba(0,0,0,0.33)",
        display: "flex",
        flexDirection: "column",
        ...{ opacity: visible ? 1 : 0 },
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: 41,
          width: "100%",
          color: "white",
          backgroundColor: "#00828b",
          padding: 5,
          fontWeight: "lighter",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            height: 8,
            width: 8,
            backgroundColor: "greenyellow",
            borderRadius: "100%",
            marginRight: 8,
          }}
        ></div>
        Eddie, Admission Bot
      </div>
      <div
        style={{
          height: 489,
        }}
      >
        {}
        <ReactWebChat
          styleOptions={sOption}
          directLine={directLine}
          userID={Math.random().toString(36).slice(2)}
          username="Eddie"
        />
      </div>
    </div>
  );
}

export default Chat_window;

import { DirectLine } from "botframework-directlinejs";
import React, { useState, useEffect } from "react";
import ReactWebChat from "botframework-webchat";
import botImage from "../../assets/images/chatbot.png";

function Chat_window(props) {
  const [gtoken, setgtoken] = useState("");

  // Set the avatar options.
  const sOptions = {
    botAvatarImage: botImage,
    botAvatarInitials: "Leo",
    rootZIndex: 0,
    bubbleBackground: "#e5e5ea",
    bubbleFromUserBackground: "#248bf5",
    bubbleFromUserTextColor: "#fff",
    bubbleBorderColor: "#00828b",
    bubbleBorderRadius: 24,
    bubbleFromUserBorderColor: "#ce0058",
    bubbleFromUserBorderRadius: 24,
    suggestedActionBorderRadius: 24,
    suggestedActionLayout: "stacked",
    hideUploadButton: true,
    backgroundColor: "#1C00ff00",
  };

  useEffect(() => {
    const options = {
      crossDomain: true,
      method: "POST",
      mode: "no-cors",

      headers: {
        Authorization:
          "Bearer fgTWhHSip1o.FBEQckO6aCRZFLfxEZiP4lZSs8Ui5y5BReOcTb6KnDE",
      },
    };

    console.log("------78799999999999999999999---------");

    return () => {
      fetch(
        "https://directline.botframework.com/v3/directline/tokens/generate",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setgtoken(response.token);
        })
        .catch((err) => console.error(err));
    };
  }, []);

  // if (props.visible === false) return null;

  return (
    <>
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
          ...{ display: props.visible ? "flex" : "none" },
        }}
      >
        <ReactWebChat
          styleOptions={sOptions}
          directLine={
            new DirectLine({
              token: gtoken,
            })
          }
          userID={Math.random().toString(36).slice(2)}
          username="Leo"
        />
      </div>
    </>
  );
}

export default Chat_window;

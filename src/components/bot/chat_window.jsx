import { DirectLine } from "botframework-directlinejs";
import React, { useMemo, useState, useEffect } from "react";
import ReactWebChat from "botframework-webchat";
import botImage from "../../assets/images/chatbot.png";
import axios from "axios";

function Chat_window(props) {
  const [gToken, setgToken] = useState();

  const sOption = {
    botAvatarImage: botImage,
    botAvatarInitials: "Leo",
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

  // useEffect(() => {
  //   return () => {
  //     axios.get("http://localhost:444").then(function (response) {
  //       // handle success
  //       setgToken(response.data.token);
  //       console.log(response.data.token);
  //     });
  //   };
  // }, []);

  useMemo(() => {
    axios.get("http://localhost:444").then(function (response) {
      // handle success
      setgToken(response.data.token);
      console.log(response.data.token);
    });
  }, []);

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
          styleOptions={sOption}
          directLine={
            new DirectLine({
              token: gToken,
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

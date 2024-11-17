import { useEffect, useState } from "react";
import "./style.scss";
import { useChatContext } from "../../../context/ChatContext";
const Message = ({ message }) => {
  const [displayedChars, setDisplayedChars] = useState(0);
  const { state, dispatch } = useChatContext();

  useEffect(() => {
    if (message.role === "assistant") {
      const interval = setInterval(() => {
        setDisplayedChars((prev) => {
          if (prev < message.content.length) {
            dispatch({ type: "SET_LOADING", payload: true });
            return prev + 1;
          } else {
            clearInterval(interval);
            dispatch({ type: "SET_LOADING", payload: false });
            return prev;
          }
        });
      }, 30);
    }
  }, [message]);
  return (
    <div
      className={`message ${
        message.role === "user" ? "user-message" : "assistant-message"
      }`}
    >
      <div className="avatar">{message.role === "assistant" ? "AI" : "U"}</div>
      <div className="message-content">
        <div className="message-author">
          {message.role === "assistant" ? "Grabber" : "You"}
        </div>
        <div className="message-text">
          {message.role === "user" ? (
            message.content
          ) : (
            <span>{message.content.slice(0, displayedChars)}</span>
          )}
        </div>
      </div>
    </div>
  );
};
export default Message;

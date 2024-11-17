import Header from "../Header";
import ChatArea from "../ChatArea";
import InputArea from "../InputArea";
import "./style.scss";
import { useChatContext } from "../../context/ChatContext";
import { useEffect, useState } from "react";
import { getChatResponse } from "../api/api";

const MainSection = () => {
  const [displayedChars, setDisplayedChars] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const { state, dispatch } = useChatContext();
  const text = "How can i help you?";
  const { messages } = state;
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedChars((prev) => {
        if (prev < text.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  const handleSendMessage = async (e, question) => {
    e.preventDefault();
    const response = await getChatResponse(question);
    if (response === "") {
      setErrorMessage("An error occurred while sending the message.");
    } else {
      dispatch({
        type: "ADD_MESSAGE",
        payload: { question, response: response },
      });
      setErrorMessage("");
    }
    console.log("response", response);

    console.log("messages", messages);
  };
  if (errorMessage) {
    return <div className="chat-initial-container">{errorMessage}</div>;
  }

  if (messages.length === 0)
    return (
      <div className="chat-initial-container">
        <h2 className="chat-initial-title">
          {text.split("").map((char, index) => (
            <span
              key={index}
              style={{
                opacity: index < displayedChars ? 1 : 0,
                transition: "opacity 0.3s",
              }}
            >
              {char}
            </span>
          ))}
        </h2>
        <InputArea handleSendMessage={handleSendMessage} />
      </div>
    );
  return (
    <div className="main-content">
      <Header />
      <ChatArea messages={messages} />
      <InputArea handleSendMessage={handleSendMessage} />
    </div>
  );
};

export default MainSection;

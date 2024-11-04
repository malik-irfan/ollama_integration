import "./style.scss";
const Message = ({ message }) => {
  return (
    <div
      className={`message ${
        message.role === "user" ? "user-message" : "assistant-message"
      }`}
    >
      <div className="avatar">{message.role === "assistant" ? "AI" : "U"}</div>
      <div className="message-content">
        <div className="message-author">
          {message.role === "assistant" ? "Veloria" : "You"}
        </div>
        <div className="message-text">{message.content}</div>
      </div>
    </div>
  );
};
export default Message;

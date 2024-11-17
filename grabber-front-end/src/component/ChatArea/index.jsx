import Message from "../common/Message";
import "./style.scss";
const ChatArea = ({ messages }) => {
  return (
    <div className="chat-area">
      <div className="chat-messages">
        {messages?.map((message, i) => (
          <Message message={message} key={i} />
        ))}
      </div>
    </div>
  );
};
export default ChatArea;

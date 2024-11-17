import { useState, useContext } from "react";
import { CommonButton } from "../common/CommonButton";
import { useChatContext } from "../../context/ChatContext";
import { CommonInput } from "../common/CommonInput";
import "./style.scss";
import { Paperclip } from "lucide-react";
import { Form } from "react-bootstrap";
const InputArea = ({ handleSendMessage }) => {
  const { state } = useChatContext();
  const [question, setQuestion] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(e, question);
    setQuestion("");
  };
  return (
    <div className="input-area">
      <Form onSubmit={handleSubmit} className="input-container">
        <div className="message-input-wrapper">
          <CommonInput
            type="text"
            placeholder="Message Grabber..."
            className="message-input"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <CommonButton
            className="attachment-button iconbtn"
            variant="outlined"
          >
            <Paperclip size={16} />
          </CommonButton>
        </div>
        <CommonButton
          type="submit"
          className="send-button"
          variant="primary"
          disabled={state.loading}
        >
          Send
        </CommonButton>
      </Form>
      <p className="disclaimer">
        MyChat can make mistakes. Consider checking important info.
      </p>
    </div>
  );
};
export default InputArea;

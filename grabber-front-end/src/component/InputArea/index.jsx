import { CommonButton } from "../common/CommonButton";
import { CommonInput } from "../common/CommonInput";
import "./style.scss";
import { Paperclip } from "lucide-react";
const InputArea = () => {
  return (
    <div className="input-area">
      <div className="input-container">
        <div className="message-input-wrapper">
          <CommonInput
            type="text"
            placeholder="Message Veloria..."
            className="message-input"
          />
          <CommonButton
            className="attachment-button iconbtn"
            variant="outlined"
          >
            <Paperclip size={16} />
          </CommonButton>
        </div>
        <CommonButton className="send-button" variant="primary">
          Send
        </CommonButton>
      </div>
      <p className="disclaimer">
        MyChat can make mistakes. Consider checking important info.
      </p>
    </div>
  );
};
export default InputArea;

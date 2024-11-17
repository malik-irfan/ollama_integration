import { Bot, ChevronDown } from "lucide-react";
import "./style.scss";
import { useChatContext } from "../../context/ChatContext";
import { MessageSquarePlus, ChevronLeft, ChevronRight } from "lucide-react";
import { CommonButton } from "../common/CommonButton";
import { useState } from "react";

const Sidebar = () => {
  const { state, dispatch } = useChatContext();
  const { messages } = state;
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  console.log("messages sidebaar", messages[0]);
  return (
    <div className={`sidebar-container ${isOpen ? "open" : "closed"}`}>
      {!isOpen ? (
        <CommonButton
          type="button"
          className="toggle-btn"
          variant="outline"
          onClick={toggleSidebar}
        >
          {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </CommonButton>
      ) : null}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <div className="sidebar-header-button">
            <CommonButton
              type="button"
              className="toggle-btn"
              variant="outline"
              onClick={toggleSidebar}
            >
              {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </CommonButton>
            <CommonButton
              type="button"
              className="iconbtn"
              variant="outline"
              onClick={() => dispatch({ type: "RESET_MESSAGES" })}
            >
              <MessageSquarePlus size={16} />
            </CommonButton>
          </div>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-section">
            <h2 className="sidebar-section-title">Comming Soon....</h2>
            {/* {[
              messages[0]?.content,
              "Repository Not Found Issue",
              "Remote Origin Error Fix",
            ].map((title) => (
              <a key={title} href="#" className="chat-link">
                {title}
              </a>
            ))} */}
          </div>
          {/* <div className="sidebar-section">
            <h2 className="sidebar-section-title">Yesterday</h2>
            {["Test Title Validation", "Safari CSS Loading Issues"].map(
              (title) => (
                <a key={title} href="#" className="chat-link">
                  {title}
                </a>
              )
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

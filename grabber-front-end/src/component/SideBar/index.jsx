import { Bot, ChevronDown } from "lucide-react";
import "./style.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <button className="sidebar-button">
          <Bot size={16} />
          Veloria
          <ChevronDown size={16} style={{ marginLeft: "auto" }} />
        </button>
      </div>
      <div className="sidebar-content">
        <div className="sidebar-section">
          <h2 className="sidebar-section-title">Today</h2>
          {[
            "Casual Greeting Exchange",
            "Repository Not Found Issue",
            "Remote Origin Error Fix",
          ].map((title) => (
            <a key={title} href="#" className="chat-link">
              {title}
            </a>
          ))}
        </div>
        <div className="sidebar-section">
          <h2 className="sidebar-section-title">Yesterday</h2>
          {["Test Title Validation", "Safari CSS Loading Issues"].map(
            (title) => (
              <a key={title} href="#" className="chat-link">
                {title}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

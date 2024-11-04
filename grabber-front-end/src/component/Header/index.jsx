import { Share, MessageSquare } from "lucide-react";
import "./style.scss";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-title">
        <MessageSquare size={20} />
        <span>Veloria</span>
      </div>
      <button className="sidebar-button" style={{ width: "auto" }}>
        <Share size={16} />
      </button>
    </header>
  );
};
export default Header;

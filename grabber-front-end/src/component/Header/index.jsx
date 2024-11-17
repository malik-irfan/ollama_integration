import { Share, MessageSquare } from "lucide-react";
import "./style.scss";
import { CommonButton } from "../common/CommonButton";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-title">
        <MessageSquare size={20} />
        <span>Grabber</span>
      </div>
      <CommonButton className="iconbtn" variant="outlined">
        <Share size={16} />
      </CommonButton>
    </header>
  );
};
export default Header;

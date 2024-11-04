import Header from "../Header";
import ChatArea from "../ChatArea";
import InputArea from "../InputArea";
const MainSection = ({ messages }) => {
  return (
    <div className="main-content">
      <Header />

      <ChatArea messages={messages} />
      <InputArea />
    </div>
  );
};
export default MainSection;

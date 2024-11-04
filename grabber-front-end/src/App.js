import "./App.scss";
import { useState } from "react";
import Sidebar from "./component/SideBar";
import MainSection from "./component/MainSection";

function App() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hey there! How's it going?" },
    { role: "user", content: "what are you doing" },
    { role: "assistant", content: "Just here, ready to help out! What's up?" },
  ]);

  return (
    <div className="chat-container">
      <Sidebar />
      <MainSection messages={messages} />
    </div>
  );
}

export default App;

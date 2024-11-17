import "./App.scss";
import { useState } from "react";
import Sidebar from "./component/SideBar";
import MainSection from "./component/MainSection";

function App() {
  return (
    <div className="chat-container">
      <Sidebar />
      <MainSection />
    </div>
  );
}

export default App;

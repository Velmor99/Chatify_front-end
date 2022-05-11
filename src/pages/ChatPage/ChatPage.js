import React from "react";
import "./chat-page.scss";
import TopChatPanel from "../../components/TopChatPanel/TopChatPanel";
import Correspondence from "../../components/Correspondence/Correspondence";
import MessagePanel from "../../components/MessagePanel/MessagePanel";
import {Outlet} from 'react-router-dom';

const ChatPage = () => {
  return (
    <div className="messages">
      <TopChatPanel />
      <Correspondence />
      <Outlet />
      <MessagePanel />
    </div>
  );
};

export default ChatPage;

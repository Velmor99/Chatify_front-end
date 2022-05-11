import React from "react";
import "./chatlist.scss";
import Card from "./card/ChatCard";
import { Link } from "react-router-dom";

const ChatList = () => {
  return (
    <div className="chat-list">
      <ul>
        <li>
          <Link className="chat-list__link" to={"/chat/23"}>
            <Card />
          </Link>
        </li>
        <li>
          <Link className="chat-list__link" to={"/chat/23"}>
            <Card />
          </Link>
        </li>
        <li>
          <Link className="chat-list__link" to={"/chat/23"}>
            <Card />
          </Link>
        </li>
        <li>
          <Link className="chat-list__link" to={"/chat/23"}>
            <Card />
          </Link>
        </li>
        <li>
          <Link className="chat-list__link" to={"/chat/23"}>
            <Card />
          </Link>
        </li>
        <li>
          <Link className="chat-list__link" to={"/chat/23"}>
            <Card />
          </Link>
        </li>
        <li>
          <Link className="chat-list__link" to={"/chat/23"}>
            <Card />
          </Link>
        </li>
        <li>
          <Link className="chat-list__link" to={"/chat/23"}>
            <Card />
          </Link>
        </li>
        <li>
          <Link className="chat-list__link" to={"/chat/23"}>
            <Card />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ChatList;

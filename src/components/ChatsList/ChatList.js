import React from "react";
import "./chatlist.scss";
import Card from "./card/ChatCard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ChatList = ({ conversations, email }) => {
  return (
    <div className="chat-list">
      <ul>
        {conversations.length > 0 ? (
          conversations.map((item) => (
            <li key={item._id}>
              <Link className="chat-list__link" to={`/chat/${item._id}`}>
                <Card
                  lastMessage={item.lastMessage}
                  reciever={item.members.filter((user) => user.email !== email)}
                />
              </Link>
            </li>
          ))
        ) : (
          <li>
            <p>none</p>
          </li>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  conversations: state.conversations,
  email: state.auth.user.email,
});

export default connect(mapStateToProps, null)(ChatList);

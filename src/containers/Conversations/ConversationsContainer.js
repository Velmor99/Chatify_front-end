import React, { useEffect } from "react";
import ChatListPage from "../../pages/ChatLIstPage/ChatLIstPage";
import { connect } from "react-redux";
import { getAllConversationsRequest } from "../../redux/conversations/conversationAction";

const ConversationsContainer = ({ email, getAllConversations }) => {
  useEffect(() => {
    getAllConversations(email);
  }, []);
  return <ChatListPage></ChatListPage>;
};

const mapStateToProps = (state) => ({
  email: state.auth.user.email,
});

const mapDispatchToProps = {
  getAllConversations: getAllConversationsRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationsContainer);

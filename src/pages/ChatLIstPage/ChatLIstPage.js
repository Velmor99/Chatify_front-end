import React from "react";
import "./chat-list-page.scss";
import ImageCarousel from "../../components/ImagesCarousel/Carousel";
import ChatList from "../../components/ChatsList/ChatList";
import VioletButton from "../../components/VioletButton/VioletButton";

const ChatListPage = () => {
  return (
    <>
      <div className="image-carousel-container">
        <ImageCarousel />
        <div className="line"></div>
      </div>
      <ChatList />
      <VioletButton buttonStatus={"createChat"} />
    </>
  );
};

export default ChatListPage;

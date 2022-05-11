import React from "react";
import "./topchatpanel.scss";
import arrowIcon from "../../img/svg/arrow-left.svg";

const TopChatPanel = () => {
  return (
    <div className="top-chat-panel">
      <button className="top-chat-panel__back-button">
        <img src={arrowIcon} alt="back" className="top-chat-panel__image"></img>
      </button>
      <div className="top-chat-panel__info-block">
        <h2 className="top-chat-panel__name">Tecnogeeks</h2>
        <p className="top-chat-panel__members">212 Members</p>
      </div>
      <div className="top-chat-panel__buttons-block">
        <button className="top-chat-panel__options-button">
          <svg
            fill="#686A8A"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
          >
            <title>dots-horizontal-triple</title>
            <path d="M10 12c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM10 6c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM10 18c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopChatPanel;

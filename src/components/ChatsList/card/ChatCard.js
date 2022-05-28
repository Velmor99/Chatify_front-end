import React from "react";
import "./chatcard.scss";

const Card = ({ reciever, lastMessage }) => {
  const {name, img} = reciever[0]
  return (
    <div className="card">
      <div className="card-content">
        <div className="image">
          {img.length > 0 ? (
            <img src={img} alt="profile photo"></img>
          ) : (
            <img
              src="https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
              alt="profile photo"
            ></img>
          )}
          <div className="online-status"></div>
        </div>
        <div className="right-side">
          <div className="text-information">
            <p className="name">
              <span className="name-info">{name}</span>
              {/* <div className="mute-image"> */}
              {/* <img></img> */}
              {/* </div> */}
            </p>
            <p>
              <span className="message-text">{lastMessage}</span>
            </p>
          </div>
          <div className="time-info">
            <p>
              <span className="time">12:00</span>
            </p>
            <p>
              <span className="message-count">312</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

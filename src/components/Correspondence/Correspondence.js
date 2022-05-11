import React from "react";
import "./correspondence.scss";
import dotIcon from "../../img/svg/dot-text.svg";

const messages = [
  {
    id: 1,
    sender: "Igor Molotov",
    message:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada.",
    time: "12:04",
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isOwner: false,
    isView: true,
  },
  {
    id: 2,
    sender: "John Doe",
    message:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
    time: "12:07",
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isOwner: true,
    isView: true,
  },
  {
    id: 3,
    sender: "John Doe",
    message: "Quisque velit nisi",
    time: "12:07",
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isOwner: true,
    isView: true,
  },
  {
    id: 4,
    sender: "Igor Molotov",
    message: "Quisque velit nisi",
    time: "12:10",
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isOwner: false,
    isView: true,
  },
  {
    id: 5,
    sender: "Igor Molotov",
    message: "Quisque velit nisi",
    time: "12:10",
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isOwner: false,
    isView: true,
  },
  {
    id: 6,
    sender: "Igor Molotov",
    message: "Quisque velit nisi",
    time: "12:10",
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isOwner: false,
    isView: true,
  },
  {
    id: 7,
    sender: "John Doe",
    message:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    time: "12:10",
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isOwner: true,
    isView: false,
  },
];

const Correspondence = () => {
  return (
    <section className="correspondence">
      <div className="correspondence__background">
        <ul className="correspondence__messages-list">
          {messages.map((item) => (
            <li className={`correspondence__message-item ${item.isOwner ? "correspondence__message-item-owner" : "correspondence__message-item-sender"}`} key={item.id}>
              <div
                className={`correspondence__message ${
                  item.isOwner
                    ? "correspondence__message-owner"
                    : "correspondence__message-sender"
                }`}
              >
                <div className={`correspondence__message-content ${item.isOwner ? "correspondence__message-content-owner" : "correspondence__message-content-sender"}`}>
                  <span className="correspondence__name">{item.sender}</span>
                  <span className="correspondence__content">
                    {item.message}
                  </span>
                  <div className="correspondence__time-info">
                    <span className="correspondence__time">{item.time}</span>
                    {item.isView && (
                      <div className="correspondence__visible-indicator">
                        <img src={dotIcon} alt="read text"></img>
                      </div>
                    )}
                  </div>
                </div>
                <div className={`correspondence__image-block ${item.isOwner ? "correspondence__image-block-owner" : "correspondence__image-block-sender"}`}>
                  <img src={item.img}></img>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Correspondence;

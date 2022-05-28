import React, {useEffect, useRef} from "react";
import "./correspondence.scss";
import dotIcon from "../../img/svg/dot-text.svg";
import {connect} from 'react-redux';

const Correspondence = ({messages, email}) => {
  const correspondence = useRef(null)
  useEffect(() => {
    // console.log(correspondence.current)
    correspondence.current.scrollTo({
      top: correspondence.current.scrollHeight,
      behavior: "smooth"
    })
  }, [messages])
  // console.log(messages)
  return (  
    <section className="correspondence">
      <div ref={correspondence} className="correspondence__background">
        <ul className="correspondence__messages-list">
           {/**todo сделать лишку отдельным компонентом */}
          {messages ? messages.map((item) => (
            <li key={item._id} className={`correspondence__message-item ${item.senderEmail === email ? "correspondence__message-item-owner" : "correspondence__message-item-sender"}`}>
              <div
                className={`correspondence__message ${
                  item.senderEmail === email
                    ? "correspondence__message-owner"
                    : "correspondence__message-sender"
                }`}
              >
                <div className={`correspondence__message-content ${item.senderEmail === email ? "correspondence__message-content-owner" : "correspondence__message-content-sender"}`}>
                  <span className="correspondence__name">{item.senderName}</span>
                  <span className="correspondence__content">
                    {item.text}
                  </span>
                  <div className="correspondence__time-info">
                    <span className="correspondence__time">{item.createdAt}</span>
                    {item.isView && (
                      <div className="correspondence__visible-indicator">
                        <img src={dotIcon} alt="read text"></img>
                      </div>
                    )}
                  </div>
                </div>
                <div className={`correspondence__image-block ${item.senderEmail === email ? "correspondence__image-block-owner" : "correspondence__image-block-sender"}`}>
                  <img src={item.img}></img>
                </div>
              </div>
            </li>
          )) : ""}
        </ul>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  messages: state.messages,
  email: state.auth.user.email
})

export default connect(mapStateToProps, null)(Correspondence);

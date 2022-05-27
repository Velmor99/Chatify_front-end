import React, {useEffect, useRef} from "react";
import "./correspondence.scss";
import dotIcon from "../../img/svg/dot-text.svg";
import {connect} from 'react-redux';

const Correspondence = ({messages}) => {
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
          {messages ? messages.map((item) => (
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
          )) : ""}
        </ul>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  messages: state.messages
})

export default connect(mapStateToProps, null)(Correspondence);

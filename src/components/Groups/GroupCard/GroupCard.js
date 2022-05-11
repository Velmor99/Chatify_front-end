import React from "react";
import "./groupcard.scss";
import arrowIcon from "../../../img/svg/arrow-right.svg";

const GroupCard = ({ title, lastMessage, particepants, img, isLive }) => {
  return (
    <div className="group-card">
      <div className="group-card__image-block">
        <img className="group-card__image" src={img}></img>
      </div>
      <div className="group-card__content-block">
        <h2 className="group-card__title">{title}</h2>
        <p className="group-card__last-message">{lastMessage}</p>
        <p className="group-card__particepants">{`${particepants} particepants`}</p>
      </div>
      <button className="group-card__button">
        <img className="group-card__button-image" src={arrowIcon}></img>
      </button>
    </div>
  );
};

export default GroupCard;

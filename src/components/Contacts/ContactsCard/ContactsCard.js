import React from "react";
import "./contacts-card.scss";
import arrowIcon from "../../../img/svg/arrow-right.svg";

const ContactsCard = ({ title, description, phone, img, isLive }) => {
  return (
    <div className="contacts-card">
      <div className="contacts-card__image-block">
        <img className="contacts-card__image" src={img}></img>
      </div>
      <div className="contacts-card__content-block">
        <h2 className="contacts-card__title">{title}</h2>
        <p className="contacts-card__last-message">{description}</p>
        <p className="contacts-card__particepants">{`${phone}`}</p>
      </div>
      <button className="contacts-card__button">
        <img className="contacts-card__button-image" src={arrowIcon}></img>
      </button>
    </div>
  );
};

export default ContactsCard;

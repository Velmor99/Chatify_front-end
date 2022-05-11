import React from "react";
import "./violet-button.scss";
import { Link } from "react-router-dom";
import addGroupIcon from "../../img/svg/add-group.svg";
import createChatIcon from "../../img/svg/create-chat.svg";
import addContact from "../../img/svg/user-add.svg";

const VioletButton = ({ buttonStatus }) => {
  const options = () => {
    switch (buttonStatus) {
      case "createChat":
        return {
          link: "/",
          img: createChatIcon,
        };
      case "addGroup":
        return {
          link: "/",
          img: addGroupIcon,
        };
      case "addContact":
        return {
          link: "/",
          img: addContact,
        };

      default:
        break;
    }
  };

  return (
    <Link className="violet-button" to={options().link}>
      <div className="violet-button__image-block">
        <img className="violet-button__image" src={options().img}></img>
      </div>
    </Link>
  );
};

export default VioletButton;

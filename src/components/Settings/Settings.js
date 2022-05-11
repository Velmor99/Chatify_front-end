import React from "react";
import "./settings.scss";
import arrowIcon from "../../img/svg/arrow-right.svg";
import settingsIcon from "../../img/svg/for_settings/profile.svg";
import moonIcon from "../../img/svg/for_settings/moon.svg";
import privacyIcon from "../../img/svg/for_settings/privacy.svg";
import helpIcon from "../../img/svg/for_settings/help.svg";
import chatIcon from "../../img/svg/for_settings/chat.svg";
import trashIcon from "../../img/svg/for_settings/bin.svg";
import visibilityIcon from "../../img/svg/for_settings/visibility_off.svg";

const Settings = () => {
  return (
    <section className="settings">
      <ul className="settings__list">
        <li className="settings__item">
          <div className="settings__item-image-block">
            <img className="" src={moonIcon} alt="dark mode"></img>
          </div>
          <h2 className="settings__item-text">Dark mode</h2>
          <input className="settings__item-checkbox" type="checkbox"></input>
        </li>
        <li>
          <div className="settings__underline"></div>
        </li>
        <li className="settings__item">
          <div className="settings__item-image-block">
            <img src={settingsIcon} alt="settings"></img>
          </div>
          <div>
            <h2 className="settings__item-account-text">Account</h2>
            <p className="settings__semi-visible-text">Name, City, Phone</p>
          </div>
          <button className="settings__item-button">
            <img src={arrowIcon}></img>
          </button>
        </li>
        <li className="settings__item">
          <div className="settings__item-image-block">
            <img src={privacyIcon} alt="security and privacy"></img>
          </div>
          <h2 className="settings__item-text">Security and Privacy</h2>
          <button className="settings__item-button">
            <img src={arrowIcon}></img>
          </button>
        </li>
        <li className="settings__item">
          <div className="settings__item-image-block">
            <img src={visibilityIcon} alt="visibility"></img>
          </div>
          <h2 className="settings__item-text">Visibility</h2>
          <button className="settings__item-button">
            <img src={arrowIcon}></img>
          </button>
        </li>
        <li className="settings__item">
          <div className="settings__item-image-block">
            <img src={chatIcon} alt="chats"></img>
          </div>
          <h2 className="settings__item-text">Chats</h2>
          <button className="settings__item-button">
            <img src={arrowIcon}></img>
          </button>
        </li>
        <li className="settings__item">
          <div className="settings__item-image-block">
            <img src={helpIcon} alt="help"></img>
          </div>
          <h2 className="settings__item-text">Help</h2>
          <button className="settings__item-button">
            <img src={arrowIcon}></img>
          </button>
        </li>
        <li className="settings__item">
          <div className="settings__item-image-block">
            <img src={trashIcon} alt="delete account"></img>
          </div>
          <h2 className="settings__item-text">Delete account</h2>
          <button className="settings__item-button">
            <img src={arrowIcon}></img>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Settings;

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./sidebar.scss";

const Sidebar = () => {
  const [isHome, toggleHome] = useState(true);
  const [isProfile, toggleProfile] = useState(false);
  const [isMessages, toggleMessages] = useState(false);
  const [isSettings, toggleSettings] = useState(false);
  const [isHelp, toggleHelp] = useState(false);
  const [isPassword, togglePassword] = useState(false);
  const [isSignOut, toggleSignOut] = useState(false);
  const [isToggle, changeToggle] = useState(false);
  const isMediumSize = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const toggleMenu = (value) => {
    switch (value) {
      case "isHome":
        toggleHome(true);
        toggleProfile(false);
        toggleMessages(false);
        toggleSettings(false);
        toggleHelp(false);
        togglePassword(false);
        toggleSignOut(false);
        break;
      case "isProfile":
        toggleHome(false);
        toggleProfile(true);
        toggleMessages(false);
        toggleSettings(false);
        toggleHelp(false);
        togglePassword(false);
        toggleSignOut(false);
        break;
      case "isMessages":
        toggleHome(false);
        toggleProfile(false);
        toggleMessages(true);
        toggleSettings(false);
        toggleHelp(false);
        togglePassword(false);
        toggleSignOut(false);
        break;
      case "isSettings":
        toggleHome(false);
        toggleProfile(false);
        toggleMessages(false);
        toggleSettings(true);
        toggleHelp(false);
        togglePassword(false);
        toggleSignOut(false);
        break;
      case "isHelp":
        toggleHome(false);
        toggleProfile(false);
        toggleMessages(false);
        toggleSettings(false);
        toggleHelp(true);
        togglePassword(false);
        toggleSignOut(false);
        break;
      case "isPassword":
        toggleHome(false);
        toggleProfile(false);
        toggleMessages(false);
        toggleSettings(false);
        toggleHelp(false);
        togglePassword(true);
        toggleSignOut(false);
        break;
      case "isSignOut":
        toggleHome(false);
        toggleProfile(false);
        toggleMessages(false);
        toggleSettings(false);
        toggleHelp(false);
        togglePassword(false);
        toggleSignOut(true);
        break;
      case "isToggle":
        // toggleHome(false);
        // toggleProfile(false);
        // toggleMessages(false);
        // toggleSettings(false);
        // toggleHelp(false);
        // togglePassword(false);
        // toggleSignOut(false);
        changeToggle(!isToggle);
        break;
    }
  };

  return (
    <div>
      <div className={isToggle ? "navigation active" : "navigation"}>
        <ul>
          <li
            className={isHome ? "list active" : "list"}
            onClick={() => toggleMenu("isHome")}
          >
            {isMediumSize && (
              <>
                <b></b>
                <b></b>
              </>
            )}

            <a href="#">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="title">Home</span>
            </a>
          </li>
          <li
            className={isProfile ? "list active" : "list"}
            onClick={() => toggleMenu("isProfile")}
          >
            {isMediumSize && (
              <>
                <b></b>
                <b></b>
              </>
            )}
            <a href="#">
              <span className="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span className="title">Profile</span>
            </a>
          </li>
          <li
            className={isMessages ? "list active" : "list"}
            onClick={() => toggleMenu("isMessages")}
          >
            {isMediumSize && (
              <>
                <b></b>
                <b></b>
              </>
            )}
            <a href="#">
              <span className="icon">
                <ion-icon name="chatbubbles-outline"></ion-icon>
              </span>
              <span className="title">Messages</span>
            </a>
          </li>
          <li
            className={isSettings ? "list active" : "list"}
            onClick={() => toggleMenu("isSettings")}
          >
            {isMediumSize && (
              <>
                <b></b>
                <b></b>
              </>
            )}
            <a href="#">
              <span className="icon">
                <ion-icon name="cog-outline"></ion-icon>
              </span>
              <span className="title">Settings</span>
            </a>
          </li>
          <li
            className={isSignOut ? "list active" : "list"}
            onClick={() => toggleMenu("isSignOut")}
          >
            {isMediumSize && (
              <>
                <b></b>
                <b></b>
              </>
            )}
            <a href="#">
              <span className="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span className="title">Sign out</span>
            </a>
          </li>
        </ul>
      </div>
      {isMediumSize && (
        <div
          onClick={() => toggleMenu("isToggle")}
          className={isToggle ? "toggle active" : "toggle"}
        >
          {isToggle ? (
            <ion-icon name="close-outline"></ion-icon>
          ) : (
            <ion-icon name="menu-outline"></ion-icon>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;

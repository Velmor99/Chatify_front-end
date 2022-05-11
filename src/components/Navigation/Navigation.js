import React from "react";
import "./navigation.scss";
import { Link, useLocation } from "react-router-dom";
import groupsIcon from "../../img/svg/for_navigation/groups.svg";
import chatsIcon from "../../img/svg/for_navigation/chats.svg";
import contactIcon from "../../img/svg/for_navigation/contacts.svg";
import groupsActiveIcon from "../../img/svg/for_navigation/groups-active.svg";
import chatsActiveIcon from "../../img/svg/for_navigation/chats-active.svg";
import contactsActiveIcon from "../../img/svg/for_navigation/contacts-active.svg";

const Navigation = () => {
  const location = useLocation();
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <Link className="navigation__link" to={"/"}>
            <div className="navigation__list-content">
              <div className="navigation__image-block">
                {location.pathname === "/" ? (
                  <img src={chatsActiveIcon} alt="chats"></img>
                ) : (
                  <img src={chatsIcon} alt="chats"></img>
                )}
              </div>
              {location.pathname === "/" ? (
                <span className="navigation__text navigation__text-active">
                  Chats
                </span>
              ) : (
                <span className="navigation__text">Chats</span>
              )}
            </div>
          </Link>
        </li>
        <li className="navigation__list-item">
          <Link className="navigation__link" to={"/groups"}>
            <div className="navigation__list-content">
              <div className="navigation__image-block">
                {location.pathname.includes("/groups") ? (
                  <img src={groupsActiveIcon} alt="groups"></img>
                ) : (
                  <img src={groupsIcon} alt="groups"></img>
                )}
              </div>
              {location.pathname.includes("/groups") ? (
                <span className="navigation__text navigation__text-active">
                  Groups
                </span>
              ) : (
                <span className="navigation__text">Groups</span>
              )}
            </div>
          </Link>
        </li>
        <li className="navigation__list-item">
          <Link className="navigation__link" to={"/contacts"}>
            <div className="navigation__list-content">
              <div className="navigation__image-block">
                {location.pathname.includes("/contacts") ? (
                  <img src={contactsActiveIcon} alt="contacts"></img>
                ) : (
                  <img src={contactIcon} alt="contacts"></img>
                )}
              </div>
              {location.pathname.includes("/contacts") ? (
                <span className="navigation__text navigation__text-active">
                  Contacs
                </span>
              ) : (
                <span className="navigation__text">Contacs</span>
              )}
            </div>
          </Link>
        </li>
        <li className="navigation__list-item">
          <Link className="navigation__link" to={"/profile"}>
            <div className="navigation__list-content">
              <div className="navigation__image-block">
                <img
                  className="navigation__profile-image"
                  src="https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
                ></img>
              </div>
              {location.pathname.includes("/profile") ? (
                <span className="navigation__text navigation__text-active">
                  Profile
                </span>
              ) : (
                <span className="navigation__text">Profile</span>
              )}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

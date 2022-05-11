import React from "react";
import "./menu.scss";
//
import moonIcon from "../../img/svg/moon.svg";
import searchIcon from "../../img/svg/search.svg";
import dotsIcon from "../../img/svg/dots-horizontal-triple.svg";

const MobileTopMenu = () => {
  return (
    <header className="header">
      <h1 className="header__title">Chatify</h1>
      <ul className="header__menu-list">
        <li className="header__menu-item">
          <button className="header__button">
            <img src={moonIcon} alt="moon"></img>
          </button>
        </li>
        <li className="header__menu-item">
          <button className="header__button">
            <img src={searchIcon} alt="search"></img>
          </button>
        </li>
        <li className="header__menu-item">
          <button className="header__button">
            <img src={dotsIcon} alt="menu"></img>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default MobileTopMenu;

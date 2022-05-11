import React from "react";
import "./profile.scss";
import Settings from "../Settings/Settings";

const Profile = () => {
  return (
    <div className="profile__card">
      <div className="profile__image-block">
        <img
          className="profile__image"
          src="https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
          alt="profile photo"
        ></img>
      </div>
      <div className="profile__info-block">
        <h1 className="profile__name">Jacob Jones</h1>
        <p className="profile__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="profile__city">Ukraine</p>
        <p className="profile__phone">88005553535</p>
      </div>
    </div>
  );
};

export default Profile;

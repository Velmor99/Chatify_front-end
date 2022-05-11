import React from "react";
import './profile-page.scss'
import Profile from "../../components/Profile/Profile";
import Settings from "../../components/Settings/Settings";

const ProfilePage = () => {
  return (
    <section className="profile-page">
      <Profile />
      <Settings />
    </section>
  );
};

export default ProfilePage;

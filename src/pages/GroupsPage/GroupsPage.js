import React from "react";
import "./groups-page.scss";
import GroupList from "../../components/Groups/Groups";
import VioletButton from "../../components/VioletButton/VioletButton";

const GroupsPage = () => {
  return (
    <>
      <GroupList />
      <VioletButton buttonStatus={"addGroup"} />
    </>
  );
};

export default GroupsPage;

import React from "react";
import "./contacts-page.scss";
import Contacts from "../../components/Contacts/Contacts";
import VioletButton from "../../components/VioletButton/VioletButton";

const ContactsPage = () => {
  return (
    <>
      <Contacts />
      <VioletButton buttonStatus={"addContact"} />
    </>
  );
};

export default ContactsPage;

import React from "react";
import "./contacts.scss";
import ContactsCard from './ContactsCard/ContactsCard';

const contacts = [
  {
    id: 1,
    name: "Tecnogeeks",
    description: "Lorem ipsum dolor asit",
    phone: 12,
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isLive: false,
    city: "Kiev",
  },
  {
    id: 2,
    name: "Tecnogeeks",
    description: "Lorem ipsum dolor asit",
    phone: 12,
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isLive: false,
    city: "Kiev",
  },
  {
    id: 3,
    name: "Tecnogeeks",
    description: "Lorem ipsum dolor asit",
    phone: 12,
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isLive: false,
    city: "Kiev",
  },
  {
    id: 4,
    name: "Tecnogeeks",
    description: "Lorem ipsum dolor asit",
    phone: 12,
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isLive: false,
    city: "Kiev",
  },
  {
    id: 5,
    name: "Tecnogeeks",
    description: "Lorem ipsum dolor asit",
    phone: 12,
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isLive: false,
    city: "Kiev",
  },
  {
    id: 6,
    name: "Tecnogeeks",
    description: "Lorem ipsum dolor asit",
    phone: 12,
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isLive: false,
    city: "Kiev",
  },
];

const Contacts = () => {
  return (
    <section className="contacts">
      <ul className="contacts__list">
        {contacts.map((item) => (
          <li className="contacts__item" key={item.id}>
            <ContactsCard
              title={item.name}
              description={item.description}
              phone={item.phone}
              img={item.img}
              isLive={item.isLive}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contacts;

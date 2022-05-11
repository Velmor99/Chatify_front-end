import React from "react";
import "./groups.scss";
import GroupCard from "./GroupCard/GroupCard";

const groupItems = [
  {
    id: 1,
    name: "Tecnogeeks",
    lastMessage: "Lorem ipsum dolor asit",
    particepants: 12,
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isLive: false,
  },
  {
    id: 2,
    name: "Tecnogeeks",
    lastMessage: "Lorem ipsum dolor asit",
    particepants: 12,
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isLive: false,
  },
  {
    id: 3,
    name: "Tecnogeeks",
    lastMessage: "Lorem ipsum dolor asit",
    particepants: 12,
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isLive: false,
  },
  {
    id: 4,
    name: "Tecnogeeks",
    lastMessage: "Lorem ipsum dolor asit",
    particepants: 12,
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isLive: false,
  },
  {
    id: 5,
    name: "Tecnogeeks",
    lastMessage: "Lorem ipsum dolor asit",
    particepants: 12,
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isLive: false,
  },
  {
    id: 6,
    name: "Tecnogeeks",
    lastMessage: "Lorem ipsum dolor asit",
    particepants: 12,
    img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    isLive: false,
  },
];

const Groups = () => {
  return (
    <section className="group">
      <ul className="group__list">
        {groupItems.map((item) => (
          <li className="group__item" key={item.id}>
            <GroupCard
              title={item.name}
              lastMessage={item.lastMessage}
              particepants={item.particepants}
              img={item.img}
              isLive={item.isLive}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Groups;

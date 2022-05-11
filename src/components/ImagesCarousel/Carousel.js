import React from "react";
import "./carousel.scss";
import ImageItem from "./Item/Item";

const images = [
  {
    id: 1,
    url: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    contentStatus: false,
    isLive: false,
    name: "Lisa"
  },
  {
    id: 2,
    url: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    contentStatus: false,
    isLive: true,
    name: "Vasyl"
  },
  {
    id: 3,
    url: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    contentStatus: true,
    isLive: false,
    name: "Erdogan"
  },
  {
    id: 4,
    url: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    contentStatus: true,
    isLive: true,
    name: "Anjey"
  },
  {
    id: 5,
    url: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    contentStatus: false,
    isLive: false,
    name: "Jonson"
  },
  {
    id: 6,
    url: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    contentStatus: false,
    isLive: false,
    name: "Stoltenbergwqewefqefewf"
  },
];

const ImageCarousel = () => {
  return (
    <ul className="carousel">
      {images.map((item) => (
        <li key={item.id} className="carousel__item">
          <ImageItem
            url={item.url}
            contentStatus={item.contentStatus}
            isLive={item.isLive}
            name={item.name}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageCarousel;

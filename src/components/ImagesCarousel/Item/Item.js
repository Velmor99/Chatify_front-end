import React from "react";
import "./item.scss";

const ImageItem = ({ url, contentStatus, isLive, name }) => {
  return (
    <div className={`item ${contentStatus ? "item__content" : ""}`}>
      <div className={`${contentStatus ? "item__image-block--active" : "item__image-block"}`}>
        <img src={url} alt="profile image" className="item__image"></img>
      </div>
      <span className="item__name">{name}</span>
    </div>
  );
};

export default ImageItem;

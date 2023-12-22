import React from "react";
import "./ProfileCard.css";


function ProfileCard({ name, photo, description }) {
  return (
    <div className="upc">
      <div className="gardiant"></div>
      <div className="down">
        <img src={photo} />
        <div className="title">{name}</div>
        <div className="description">{description}
          
        </div>
        <div className="button">
          <a href="abc@example.com">Contact Me</a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

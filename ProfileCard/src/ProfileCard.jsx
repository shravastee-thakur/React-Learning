import React from "react";
import "./ProfileCard.css";

function ProfileCard({ name, photo, elon }) {
  return (
    <div className="upc">
      <div className="gardiant"></div>
      <div className="down">
        <img src={photo} />
        <div className="title">{name}</div>
        <div className="description">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            autem reiciendis assumenda reprehenderit earum quisquam asperiores
            facilis quos! Beatae, quis aspernatur. Hic, molestias deleniti
            distinctio error labore quis quia dolores?
          </p>
        </div>
        <div className="button">
          <a href="abc@example.com">Contact Me</a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

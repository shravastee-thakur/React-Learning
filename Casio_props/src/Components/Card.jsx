import React from "react";
import "./Card.css";


const Card = ({model, image, brand, price}) => {
  return (
    <div className="card">
      <h2>{model}</h2>
      <div>
        <img src={image} alt="" />
      </div>
      <div className="detail">
        <p>{brand}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Card;

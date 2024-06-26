import React, { useState } from "react";
import "./Products.css";

const Products = () => {
  const data = [
    {
      id: 59,
      title: "Spring and summershoes",
      price: 20,
      quantity: 3,
      total: 60,
      discountPercentage: 8.71,
      discountedPrice: 55,
      thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg",
    },
    {
      id: 88,
      title: "TC Magic Washing Gloves",
      price: 29,
      quantity: 2,
      total: 58,
      discountPercentage: 3.19,
      discountedPrice: 56,
      thumbnail: "https://cdn.dummyjson.com/product-images/88/thumbnail.jpg",
    },
    {
      id: 18,
      title: "Oil Free Moisturizer 100ml",
      price: 40,
      quantity: 2,
      total: 80,
      discountPercentage: 13.1,
      discountedPrice: 70,
      thumbnail: "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
    },
    {
      id: 95,
      title: "Wholesale cargo Belt",
      price: 930,
      quantity: 1,
      total: 930,
      discountPercentage: 17.67,
      discountedPrice: 766,
      thumbnail: "https://cdn.dummyjson.com/product-images/95/thumbnail.jpg",
    },
    {
      id: 39,
      title: "Women Sweaters Wool",
      price: 600,
      quantity: 2,
      total: 1200,
      discountPercentage: 17.2,
      discountedPrice: 994,
      thumbnail: "https://cdn.dummyjson.com/product-images/39/thumbnail.jpg",
    },
    {
      id: 96,
      title: "lighting ceiling kitchen",
      price: 30,
      quantity: 2,
      total: 60,
      discountPercentage: 14.89,
      discountedPrice: 51,
      thumbnail: "https://cdn.dummyjson.com/product-images/96/thumbnail.jpg",
    },
    {
      id: 91,
      title: "Black Motorbike",
      price: 569,
      quantity: 3,
      total: 1707,
      discountPercentage: 13.63,
      discountedPrice: 1474,
      thumbnail: "https://cdn.dummyjson.com/product-images/91/thumbnail.jpg",
    },
    {
      id: 16,
      title: "Hyaluronic Acid Serum",
      price: 19,
      quantity: 1,
      total: 19,
      discountPercentage: 13.31,
      discountedPrice: 16,
      thumbnail: "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
    },
  ];

  const [productItem, setProductItem] = useState(data);

  const sort = () => {
    const filterItem = productItem.filter((item) => {
      return item.price > 30;
    });

    setProductItem(filterItem);
  };

  return (
    <>
      <p className="filter" onClick={sort}>
        Filter by price
      </p>
      <div className="container">
        {productItem.map((e) => {
          return (
            <div className="cart" key={e.id}>
              <div className="image">
                <img src={e.thumbnail} alt="" />
              </div>
              <div className="details">
                <p className="title">{e.title}</p>
                <p className="price">{e.price}</p>
              </div>
              <button>Add</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;

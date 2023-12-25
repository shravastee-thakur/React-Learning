import React from "react";

function HeroSection() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>
          Your feet deserves the best and we are here to help you with your
          shoes
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="./src/assets/amazon.png" />
            <img src="./src/assets/flipkart.png" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="./src/assets/hero-image.png" alt="" />
      </div>
    </main>
  );
}

export default HeroSection;

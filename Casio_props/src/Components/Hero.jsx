import React from 'react';
import './Hero.css'
import Card from './Card';


const Hero = () => {

    let watchData = [
        {
          id: 1,
          img: "../src/assets/1.png",
          brand: "EDIFICE",
          model: "ECB-2000DC-1B",
          price: 19995,
        },
        {
          id: 2,
          img: "../src/assets/2.png",
          brand: "EDIFICE",
          model: "ECB-2000NP-1A",
          price: 23995,
        },
        {
          id: 3,
          img: "../src/assets/3.png",
          brand: "EDIFICE",
          model: "ECB-40NP-1A",
          price: 16995,
        },
        {
          id: 4,
          img: "../src/assets/4.png",
          brand: "EDIFICE",
          model: "ECB-2200HTR-1A",
          price: 39995,
        },
        {
          id: 5,
          img: "../src/assets/5.png",
          brand: "EDIFICE",
          model: "EFR-S108D-2AV",
          price: 12495,
        },
        {
          id: 6,
          img: "../src/assets/6.png",
          brand: "EDIFICE",
          model: "EFR-S108D-2BV",
          price: 12495,
        },
        {
          id: 7,
          img: "../src/assets/7.png",
          brand: "EDIFICE",
          model: "EFR-S108D-3AV",
          price: 12495,
        },
        {
          id: 8,
          img: "../src/assets/8.png",
          brand: "EDIFICE",
          model: "ECB-30DB-1A",
          price: 15495,
        },
        {
          id: 9,
          img: "../src/assets/9.png",
          brand: "EDIFICE",
          model: "ECB-30DC-1B",
          price: 15995,
        },
        {
          id: 10,
          img: "../src/assets/10.png",
          brand: "EDIFICE",
          model: "EFV-C110D-2B",
          price: 9995,
        },
        {
          id: 11,
          img: "../src/assets/11.png",
          brand: "EDIFICE",
          model: "EFV-C110D-5A",
          price: 9995,
        },
        {
          id: 12,
          img: "../src/assets/12.png",
          brand: "EDIFICE",
          model: "EFV-C110DC-1A",
          price: 11995,
        },
        {
          id: 13,
          img: "../src/assets/13.png",
          brand: "EDIFICE",
          model: "EFV-650D-1AV",
          price: 9995,
        },
        {
          id: 14,
          img: "../src/assets/14.png",
          brand: "EDIFICE",
          model: "EFV-650D-2AV",
          price: 9995,
        },
        {
          id: 15,
          img: "../src/assets/15.png",
          brand: "EDIFICE",
          model: "EFV-650D-3AV",
          price: 9995,
        },
        {
          id: 16,
          img: "../src/assets/16.png",
          brand: "EDIFICE",
          model: "EFR-574D-1AV",
          price: 11995,
        },
        {
          id: 17,
          img: "../src/assets/17.png",
          brand: "EDIFICE",
          model: "EFR-574D-2AV",
          price: 11995,
        },
        {
          id: 18,
          img: "../src/assets/18.png",
          brand: "EDIFICE",
          model: "EFR-574DB-3AV",
          price: 12495,
        },
        {
          id: 19,
          img: "../src/assets/19.png",
          brand: "EDIFICE",
          model: "ECB-40MU-1A",
          price: 29995,
        },
        {
          id: 20,
          img: "../src/assets/20.png",
          brand: "EDIFICE",
          model: "ECB-2200DC-1A",
          price: 21995,
        },
        {
          id: 21,
          img: "../src/assets/21.png",
          brand: "EDIFICE",
          model: "ECB-2200DD-1A",
          price: 19995,
        },
      ];

    return (
      <div className="hero">
       { watchData.map((e) => {
            return  (<Card model={e.model} image={e.img} brand={e.brand} price={e.price}/>)
        })}
        
      </div>
       

        

        
    )
}

export default Hero;


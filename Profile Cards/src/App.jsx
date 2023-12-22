import { useState } from "react";
import "./App.css";
import ProfileCard from "./ProfileCard";
import photo1 from "./assets/elon.jpg";
import photo2 from "./assets/Ratan-Tata.jpg";
import photo3 from "./assets/Jeff_Bezos.jpeg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <ProfileCard
        name="Elon Musk"
        photo={photo1}
        description="Elon Reeve Musk born June 28, 1971) is a businessman and investor. He is the founder, chairman, CEO, and chief technology officer of SpaceX; angel investor, CEO, product architect and former chairman of Tesla, Inc.; owner, chairman and CTO of X Corp.; founder of the Boring Company and xAI; co-founder of Neuralink and OpenAI; and president of the Musk Foundation."
      />

      <ProfileCard
        name="Ratan Tata"
        photo={photo2}
        description="Ratan Naval Tata is an Indian industrialist, philanthropist and former chairman of Tata Sons. He was a chairman of the Tata Group from 1990 to 2012, and interim chairman from October 2016 through February 2017. He continues to head its charitable trusts. In 2008, he received the Padma Vibhushan, the second highest civilian honour in India, after receiving the Padma Bhushan, the third highest civilian honour in 2000."
      />

      <ProfileCard
        name="Jeff Bezos"
        photo={photo3}
        description="Jeffrey Preston Bezos is an American entrepreneur, media proprietor and investor. He is the founder, executive chairman, and former president and CEO of Amazon, the world's largest e-commerce and cloud computing company. With a net worth of about US$170 billion as of November 2023, Bezos is the third-wealthiest person in the world and was the wealthiest from 2017 to 2021, according to both the Bloomberg Billionaires Index and Forbes."
      />
    </div>
  );
}

export default App;

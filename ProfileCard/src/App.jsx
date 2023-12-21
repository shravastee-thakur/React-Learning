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
      <ProfileCard name="Elon Musk" photo={photo1} />
      <ProfileCard name="Ratan Tata" photo={photo2} />
      <ProfileCard name="Jeff Bezos" photo={photo3} />
    </div>
  );
}

export default App;

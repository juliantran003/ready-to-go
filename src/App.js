import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Announcement from "./components/Announcement";
import Reset from "./components/Reset";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <div className="main">
      <div className="container1">
        <div className="container2">
          <Button switch={switch1} setSwitch={setSwitch1} />
          <Button switch={switch2} setSwitch={setSwitch2} />
          <Button switch={switch3} setSwitch={setSwitch3} />
        </div>
        <Announcement
          announcementStyle="announcement"
          switch1={switch1}
          switch2={switch2}
          switch3={switch3}
        />
      </div>
      <Reset
        setSwitch1={setSwitch1}
        setSwitch2={setSwitch2}
        setSwitch3={setSwitch3}
      />
    </div>
  );
}

export default App;

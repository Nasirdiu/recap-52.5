import logo from "./logo.svg";
import "./App.css";
import Myline from "./components/Myline/Myline";
import SpaicalChart from "./components/SpaicalChart/SpaicalChart";
import { useSpring, animated } from "react-spring";
import { useState } from "react";

function App() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  });
  return (
    <div className="App">
      <animated.div style={props}>Nasir369</animated.div>
      <Myline></Myline>
      <SpaicalChart></SpaicalChart>
    </div>
  );
}

export default App;





import "./style.css"


import { useState } from "react";


function App() {

  const [minVal, setMinVal] = useState(20);
  const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState(5);
  const giveRandomNumber = () =>
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal))





  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>Random Number: <span>{randomNum}</span></p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min:</p>
            <input
              type="number"
              value={minVal}
              onChange={e => setMinVal(+e.target.value)}
            />
          </div>

          <div>
            <p>Max:</p>
            <input
              type="number"
              value={maxVal}
              onChange={e => setMaxVal(+e.target.value)}
            />
          </div>

        </div>
        <button onClick={giveRandomNumber}>Get Random Number</button>
      </div>
    </div>

  );
}


export default App;


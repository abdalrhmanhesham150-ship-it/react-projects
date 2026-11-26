import { useState } from "react";

function App() {
  let [slider, setSlider] = useState(1);
  let [step, setStep] = useState(0);
  let date = new Date(Date.now());
  date.setDate(date.getDay() + step);
  return (
    <>
      <div>
        {" "}
        <input
          max={10}
          min={1}
          onChange={(e) => {
            setSlider(e.target.value * 1);
          }}
          type="range"
          value={slider}
        ></input>
        <span>{slider}</span>
      </div>
      <div>
        <button
          onClick={() => {
            if (step > 0) {
              setStep(step - slider);
            }
          }}
        >
          -
        </button>
        <input type="search" value={step} />
        <button
          onClick={() => {
            setStep(step + slider);
          }}
        >
          +
        </button>
      </div>
      <p>
        {step == 0
          ? `Today is ${date.toDateString()} `
          : `${step} days from today is ${date.toDateString()}`}
      </p>
      {step !== 0 || slider != 1 ? (
        <button
          onClick={() => {
            setSlider(1);
            setStep(0);
          }}
        >
          Reset
        </button>
      ) : null}
    </>
  );
}

export default App;

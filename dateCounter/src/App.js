import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("2026-11-18");
  date.setDate(date.getDate() + count);
  return (
    <>
      <div>
        <button
          onClick={function () {
            if (step > 1) {
              setStep((step) => step - 1);
            }
          }}
        >
          -
        </button>
        step:{step}
        <button
          onClick={function () {
            setStep((step) => step + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={function () {
            if (count > 0) {
              setCount((count) => count - 1 * step);
            }
          }}
        >
          -
        </button>
        count:{count}
        <button
          onClick={function () {
            setCount((count) => count + 1 * step);
          }}
        >
          +
        </button>
      </div>
      <div>
        {" "}
        {count} days from {date.toDateString()}
      </div>
    </>
  );
}

export default App;

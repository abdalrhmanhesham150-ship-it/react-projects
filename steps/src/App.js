import { useState } from "react";
import "./App.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  let [step, updateStep] = useState(1);
  let [isOpen, updateOpen] = useState(true);
  return (
    <>
      <button
        className="close"
        onClick={function () {
          updateOpen(!isOpen);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              onClick={function () {
                if (step > 1) {
                  updateStep(step - 1);
                }
              }}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>

            <button
              onClick={function () {
                if (step < 3) {
                  updateStep(step + 1);
                }
              }}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

import "./index.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  return (
    <div>
      {/* <DateCounter /> */}
      <DateCounterTwo />
    </div>
  );
}

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);
  const dateOutput = Intl.DateTimeFormat(navigator.language, {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "numeric",
  }).format(date);

  return (
    <main>
      <div className="settings-row">
        <Button variant="outline-secondary" onClick={() => setStep(step - 1)}>
          -
        </Button>
        <p>Step: {step}</p>
        <Button variant="outline-secondary" onClick={() => setStep(step + 1)}>
          +
        </Button>
      </div>
      <div className="settings-row">
        <Button
          variant="outline-secondary"
          onClick={() => setCount(count - step)}
        >
          -
        </Button>
        <p>Count: {count}</p>
        <Button
          variant="outline-secondary"
          onClick={() => setCount(count + step)}
        >
          +
        </Button>
      </div>
      <p>{count} days from today is</p>
      <p>{dateOutput}</p>
    </main>
  );
}

function DateCounterTwo() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);
  const dateOutput = Intl.DateTimeFormat(navigator.language, {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "numeric",
  }).format(date);

  return (
    <main>
      <div className="settings-row">
        <input
          type="range"
          name="steps"
          min="1"
          max="10"
          step="1"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <label for="steps">{step} </label>
      </div>
      <div className="settings-row">
        <Button
          variant="outline-secondary"
          onClick={() => setCount(count - step)}
        >
          -
        </Button>
        <input
          value={count}
          type="number"
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <Button
          variant="outline-secondary"
          onClick={() => setCount(count + step)}
        >
          +
        </Button>
      </div>
      <p>{count * step} days from today is</p>
      <p>{dateOutput}</p>
    </main>
  );
}

export default App;

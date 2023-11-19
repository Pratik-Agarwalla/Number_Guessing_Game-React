import Button from "./Button";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(Math.round(Math.random() * 20 + 1));
  const [status, setStatus] = useState(false);
  const [guess, setGuess] = useState("");
  const [msg, setMsg] = useState("Start guessing...");
  const [score, setScore] = useState(20);
  const [highscore, setHigh] = useState(0);

  function check() {
    if (score === 0) return;
    if (!guess) {
      setMsg("⛔️ No number!");
    } else if (guess <= 0 || guess > 20) {
      setMsg("⛔️ Wrong number!");
    } else if (number === guess) {
      setMsg("🎉 Correct Number!");
      setStatus(true);
      document.body.style.backgroundColor = "#60b347";
      if (score > highscore) setHigh(score);
    } else if (number < guess) {
      setMsg("📈 Too high!");
      if (score > 1) setScore(score - 1);
      else {
        setScore(0);
        setMsg("💥 You lost the game!");
      }
    } else if (number > guess) {
      setMsg("📉 Too low!");
      if (score > 1) setScore(score - 1);
      else {
        setScore(0);
        setMsg("💥 You lost the game!");
      }
    }
  }

  function reset() {
    setStatus(false);
    setScore(20);
    setMsg("Start guessing...");
    setNumber(Math.round(Math.random() * 20 + 1));
    setGuess("");
    document.body.style.backgroundColor = "#222";
  }

  return (
    <>
      <header>
        <div className="header-flex">
          <Button onClick={reset}>Again!</Button>
          <p>(Between 1 and 20)</p>
        </div>
        <h1>Guess My Number !</h1>
        <div className="number">{status ? number : "?"}</div>
      </header>
      <div className="main">
        <div className="left">
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(Number(e.target.value))}
            disabled={status || score === 0}
          />
          <Button onClick={check}>check!</Button>
        </div>
        <div className="right">
          <p className="message">{msg}</p>
          <div>
            <p>💯 Score: {score}</p>
            <p>🥇 Highscore: {highscore}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

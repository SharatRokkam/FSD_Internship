import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [theme, setTheme] = useState("light");

  return (
    <div className={`app ${theme}`}>
      <h1>Personalized Greeting Card Generator</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle {theme === "light" ? "dark" : "light"} Theme
        </button>
      </div>

      {/* //ternary : if conidition is satisfied -> do this : do that  */}

      {name && message ? (
        //have you props here to send the data to the Card component
        <Card name={name} supermessage={message} theme={theme} />
      ) : (
        //false statement
        <p className="instructions">
          Please enter your name and message to see your own card..
        </p>
      )}
    </div>
  );
}

export default App;

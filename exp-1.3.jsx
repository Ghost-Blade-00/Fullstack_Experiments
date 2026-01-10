import { useState } from "react";
import "./exp-3.css";

function Exp3() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "page dark-page" : "page light-page"}>
      <h1>Theme Toggle SPA</h1>

      <p className="theme-text">
        Current Theme: {dark ? "Dark" : "Light"}
      </p>

      <button className="toggle-btn" onClick={() => setDark(!dark)}>
        {dark ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default Exp3;

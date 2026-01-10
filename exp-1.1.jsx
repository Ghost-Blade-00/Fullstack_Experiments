import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Counter SPA</h1>
        <p className="count">Count: {count}</p>

        <div className="btn-group">
          <button className="btn minus" onClick={() => setCount(count - 1)}>
            -
          </button>

          <button className="btn plus" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;

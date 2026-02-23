import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./CounterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#333" }}>
          Redux Counter App
        </h1>

        <div
          style={{
            background: "#e3f2fd",
            padding: "15px",
            borderRadius: "12px",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#1565c0",
            marginBottom: "30px",
          }}
        >
          Count: {count}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <button
            onClick={() => dispatch(increment())}
            style={{
              background: "#1565c0",
              color: "#fff",
              border: "none",
              padding: "15px 20px",
              fontSize: "20px",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            +
          </button>

          <button
            onClick={() => dispatch(decrement())}
            style={{
              background: "#0d47a1",
              color: "#fff",
              border: "none",
              padding: "15px 20px",
              fontSize: "20px",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            −
          </button>
        </div>

        <button
          onClick={() => dispatch(reset())}
          style={{
            marginTop: "25px",
            background: "#90caf9",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

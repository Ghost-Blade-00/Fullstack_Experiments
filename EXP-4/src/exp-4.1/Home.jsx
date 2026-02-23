import { useContext } from "react";
import { GlobalContext } from "../exp-4.1/GlobalContext";

const Home = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        borderRadius: "8px",
      }}
    >
      <h2>Global State Demonstration</h2>
      <p>
        This application illustrates how the React Context API enables
        centralized state management without prop drilling.
      </p>
      <p>
        The selected theme is shared across multiple components efficiently.
      </p>
    </div>
  );
};

export default Home;

import { useState } from "react";
import "./exp-4.css";

function Exp4() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);  

  function handleSubmit(e) {
    e.preventDefault();

    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  }

  return (
    <div className="form-box">
      <h2>Simple Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />   
        <button type="submit">Submit</button>
      </form>

      {data.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data</h3>
          {data.map((item, index) => (
            <p key={index}>
              {item.name} - {item.email}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Exp4;

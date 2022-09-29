import React, { useState } from "react";
import http from "../api/connection";
const NewTask = (data) => {
  http.post("/", data);
};

const App = () => {
  const [Name, setName] = useState("");
  const [status, setStatus] = useState("false");
  const fromValues = { name: Name, completed: status };

  const handleSubmit = (event) => {
    NewTask(fromValues);
  };

  const isValed = Name === "";
  const [touched, setTouched] = useState(false);

  return (
    <div className="ui segment" style={{ marginTop: "20px" }}>
      <form
        className="ui form"
        onSubmit={handleSubmit}
        style={{
          padding: "30px",
        }}
      >
        <div className="field">
          <label>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={Name}
            onBlur={() => {
              if (isValed) {
              } else {
                setTouched(true);
              }
            }}
          />
        </div>
        <div className="inline field">
          <input
            className="ui checkbox"
            id="status"
            name="status"
            type="checkbox"
            value={status}
            onChange={(event) => setStatus(event.target.checked)}
          />
          <label>Completed</label>
        </div>

        <button
          className={`ui basic red ${touched ? "" : "disabled"} button`}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;

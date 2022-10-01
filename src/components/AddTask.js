import React, { useState } from "react";
import http from "../api/connection";
const NewTask = (data) => {
  http.post("/", data);
};

const AddTask = () => {
  const [Name, setName] = useState("");
  const [status, setStatus] = useState(false);
  const [description, setDesc] = useState("");
  const fromValues = {
    name: Name,
    completed: status,
    description: description,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    NewTask(fromValues);
    setName("");
    setStatus("");
    setDesc("");
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
            value={Name}
            onChange={(event) => setName(event.target.value)}
            onBlur={() => {
              if (isValed) {
              } else {
                setTouched(true);
              }
            }}
          />
        </div>
        <div className="field">
          <label>Description</label>
          <input
            id="name"
            name="name"
            type="text"
            value={description}
            onChange={(event) => setDesc(event.target.value)}
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

export default AddTask;

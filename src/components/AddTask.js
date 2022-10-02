import React, { useState } from "react";
import http from "../api/connection";
import EventEmitter from "reactjs-eventemitter";

const NewTask = (data) => {
  http.post("/", data);
};

const AddTask = (props) => {
  const [Name, setName] = useState("");
  const [status, setStatus] = useState(false);
  const [description, setDesc] = useState("");
  const parentID = props.parentID;
  const [showForm, setShowForm] = useState(false);

  const ShowForm = () => {
    setShowForm(!showForm);
  };
  console.log(props.parentID);

  const fromValues = {
    name: Name,
    completed: status,
    description: description,
    parentID: parentID,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    NewTask(fromValues);
    setName("");
    setStatus(false);
    setDesc("");

    EventEmitter.emit("submited");
  };

  const isValed = Name === "";
  const [touched, setTouched] = useState(false);

  return (
    <div>
      <button
        style={{ marginTop: "20px" }}
        className="fluid ui primary button"
        onClick={() => {
          ShowForm();
        }}
      >
        Create Task
      </button>
      {showForm && (
        <div
          className="ui segment"
          style={{ marginTop: "20px" }}
          visible={showForm}
        >
          <div>
            <div class="ui top attached label">Create New Task</div>
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
                  className="ui checked checkbox"
                  id="status"
                  name="status"
                  type="checkbox"
                  checked={status ? "checked" : ""}
                  value={status}
                  onChange={(event) => {
                    setStatus(event.target.checked);
                  }}
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
        </div>
      )}
    </div>
  );
};

export default AddTask;

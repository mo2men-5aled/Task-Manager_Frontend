import React, { useEffect, useState } from "react";
import http from "../api/connection";
// import _ from "lodash";

const TaskUpdate = (props) => {
  const [task, setTask] = useState({});
  const [name, setName] = useState("");
  const [status, setstatus] = useState("");
  const [description, setDescription] = useState("");
  const [parentID, setParentId] = useState(props.parentID);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    //on page load
    http.get(`/${props.parentID}`).then((response) => {
      setTask(response.data.task);
      setName(response.data.task.name);
      setDescription(response.data.task.description);
      setstatus(response.data.task.completed);
      setParentId(props.parentID);
    });
  }, [props.parentID]);

  const handleSubmit = (event) => {
    event.preventDefault();
    http.patch(`/${props.parentID}`, {
      ...task,
      name: name,
      description: description,
      completed: status,
    });
  };

  return (
    <React.Fragment>
      <div className="ui segment" style={{ marginTop: "20px" }}>
        <div
          className="ui top attached label"
          onClick={() => {
            setShowForm(!showForm); //false - true
          }}
        >
          Update Task
        </div>
        {showForm && (
          <form onSubmit={handleSubmit} className="ui form">
            <span className="ui transparent fluid input">
              <strong>
                <label>Name: </label>
              </strong>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="name"
                name="name"
                type="text"
                value={name}
              />
            </span>
            <div className="ui transparent fluid input">
              <strong>
                <label>Descriptions: </label>
              </strong>
              <input
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                id="name"
                name="name"
                type="text"
                value={description}
              />
            </div>
            <div className="inline field">
              <div className="ui checked checkbox">
                <input
                  onChange={(e) => {
                    setstatus(e.target.checked);
                  }}
                  id="status"
                  name="status"
                  type="checkbox"
                  checked={`${status ? "checked" : ""}`}
                ></input>
                <label>Completed</label>
              </div>
            </div>

            <button className={`ui red button`} type="submit">
              Edit
            </button>
          </form>
        )}
      </div>
    </React.Fragment>
  );
};

export default TaskUpdate;

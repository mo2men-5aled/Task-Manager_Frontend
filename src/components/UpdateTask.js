import React, { useEffect, useState } from "react";
import http from "../api/connection";
// import _ from "lodash";

const TaskUpdate = (props) => {
  const [task, setTask] = useState({});
  const [name, setName] = useState("");
  const [status, setstatus] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    //on page load
    http.get(`/${props.parentID}`).then((response) => {
      setTask(response.data.task);
      setName(response.data.task.name);
      setDescription(response.data.task.description);
      setstatus(response.data.task.completed);
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
    props.history.push(`/${task._id}`);
    // EventEmitter.emit("submited");
  };

  return (
    <React.Fragment>
      <div className="ui segment" style={{ marginTop: "20px" }}>
        <div class="ui top attached label">Update Task</div>
        <form
          onSubmit={handleSubmit}
          className="ui form"
          style={{
            padding: "30px",
          }}
        >
          <div className="field">
            <label>Name</label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name"
              name="name"
              type="text"
              value={name}
            />
          </div>
          <div className="field">
            <label>Descriptions</label>
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
      </div>
    </React.Fragment>
  );
};

export default TaskUpdate;

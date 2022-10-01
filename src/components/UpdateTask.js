import React, { useEffect, useState } from "react";
import http from "../api/connection";
import AddTask from "./AddTask";
import GetAll from "./Task-List";

const TaskUpdate = (taskID) => {
  const [task, setTask] = useState("");
  const [name, setName] = useState("");
  const [status, setstatus] = useState("");
  const [description, setDescription] = useState("");

  const [parentID, setParentID] = useState(taskID.match.params.id);

  useEffect(() => {
    http.get(`/${taskID.match.params.id}`).then((response) => {
      setTask(response.data.task);
      setName(task.name);
      setDescription(task.description);
      setstatus(task.completed);
    });
  }, [task.description, task.completed, task.name, taskID.match.params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    http.patch(`/${taskID.match.params.id}`, {
      ...task,
      name: name,
      description: description,
      completed: status,
    });
    setParentID(task._id);
  };

  return (
    <div>
      <AddTask parentID={parentID} />
      <div className="ui segment" style={{ marginTop: "20px" }}>
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
            Submit
          </button>
        </form>
      </div>
      <GetAll parentID={taskID.match.params.id} />
    </div>
  );
};

export default TaskUpdate;

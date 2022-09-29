import React, { useState, useEffect } from "react";
import http from "../api/connection";
import { Link } from "react-router-dom";
import AddTask from "./AddTask";

const deleteTask = (id) => {
  http.delete("/" + id);
};
const mark = (task) => {
  if (task.completed) {
    return <i className="check icon" />;
  }
};

const GetAll = () => {
  const [tasks, setTasks] = useState([""]);
  useEffect(() => {
    http.get().then((response) => {
      setTasks(response.data.tasks);
    });
  }, []);
  return (
    <div>
      <AddTask />
      {tasks.map((task) => {
        if (tasks.length < 1) {
          console.log(tasks.length);
          return <h1 className="ui center aligned header">No Tasks</h1>;
        } else {
          return (
            <div className="ui segment">
              <div className="content">
                <div className="header">
                  <span>{mark(task)}</span>
                  <span>{task.name}</span>
                  <div style={{ textAlign: "end" }}>
                    <Link
                      to={`/`}
                      className="ui basic blue button"
                      onClick={() => {
                        deleteTask(task._id);
                        window.location.reload();
                      }}
                    >
                      Delete
                    </Link>
                    <Link className="ui basic black button" to={"/" + task._id}>
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default GetAll;

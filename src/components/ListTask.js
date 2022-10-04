import React, { useState, useEffect, useRef } from "react";
import http from "../api/connection";
import { Link } from "react-router-dom";
import { Popup } from "semantic-ui-react";
import DeleteTask from "./DeleteTask";

const mark = (task) => {
  if (task.completed) {
    return <i className="check icon" />;
  }
};
const ListTask = (props) => {
  const [tasks, setTasks] = useState([]);
  const taskNameRef = useRef();

  useEffect(() => {
    if (!props.TriggerCreate)
      http.get().then((response) => {
        setTasks(response.data.tasks);
      });
    if (props.setTriggerCreate !== false) props.setTriggerCreate(false);
  }, [props.TriggerCreate]);

  return (
    <div style={{ marginTop: "20px" }}>
      {tasks.map((task) => {
        let popupname = <span>{task.name}</span>;
        taskNameRef.current = task.description ? (
          <Popup
            position="right center"
            content={`${task.description}`}
            trigger={popupname}
          />
        ) : (
          popupname
        );
        if (task.parentID === props.parentID) {
          return (
            <div className="ui segment" key={task._id}>
              <Link
                to={"/" + task._id}
                className="content"
                style={{ zIndex: "1" }}
              >
                <div className="header">
                  <span>{mark(task)}</span>
                  {taskNameRef.current}
                </div>
                <DeleteTask TaskId={task._id} {...props} />
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ListTask;

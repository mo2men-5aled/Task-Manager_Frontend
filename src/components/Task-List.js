import React, { useState, useEffect, useRef } from "react";
import http from "../api/connection";
import { Link } from "react-router-dom";
import AddTask from "./AddTask";
import { Popup } from "semantic-ui-react";
import deleteTask from "./deleteTask";

const mark = (task) => {
  if (task.completed) {
    return <i className="check icon" />;
  }
};

const GetAll = () => {
  const [tasks, setTasks] = useState([]);
  const taskNameRef = useRef();
  useEffect(() => {
    http.get().then((response) => {
      setTasks(response.data.tasks);
    });
  }, [tasks]);

  return (
    <div>
      <AddTask />
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

        return (
          <div className="ui segment">
            <Link to={`/${task._id}`} className="content">
              <div className="header">
                <span>{mark(task)}</span>
                {taskNameRef.current}

                <div style={{ textAlign: "end" }}>
                  <Link
                    to={`/`}
                    className="ui basic blue button"
                    onClick={() => {
                      deleteTask(task._id);
                    }}
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default GetAll;

import React, { useState, useEffect, useRef } from "react";
import http from "../api/connection";
import { Link } from "react-router-dom";
import { Popup } from "semantic-ui-react";
import deleteTask from "./deleteTask";
import EventEmitter from "reactjs-eventemitter";

const getData = async (setTasks) => {
  http.get().then((response) => {
    setTasks(response.data.tasks);
  });
};

const mark = (task) => {
  if (task.completed) {
    return <i className="check icon" />;
  }
};

const GetAll = (props) => {
  const [tasks, setTasks] = useState([]);
  const taskNameRef = useRef();

  useEffect(() => {
    getData(setTasks);
  }, [tasks]);

  EventEmitter.subscribe(["submited"], () => {
    getData(setTasks);
  });

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
            <div className="ui segment">
              <Link
                to={`/${task._id}`}
                className="content"
                style={{ zIndex: "1" }}
              >
                <div className="header">
                  <span>{mark(task)}</span>
                  {taskNameRef.current}

                  <div style={{ textAlign: "end", zIndex: "2" }}>
                    <Link
                      className="ui basic blue button"
                      onClick={() => {
                        deleteTask(task._id);
                        EventEmitter.emit("submited");
                      }}
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default GetAll;

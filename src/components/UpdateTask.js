import React, { useEffect, useState } from "react";
import http from "../api/connection";
// class TaskUpdate extends React.Component {
//   state = { task: "", name: "", formError: "" };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     http.patch(`/${this.props.match.params.id}`, {
//       ...this.state.task,
//       name: this.state.name,
//     });
//   };

//   componentDidMount() {
//     http.get(`/${this.props.match.params.id}`).then((response) =>
//       this.setState({
//         task: response.data.task,
//         name: response.data.task.name,
//       })
//     );
//   }
//   render() {
//     if (!this.state.name) {
//       return <div>Loading</div>;
//     }
//     return (
//       <div className="ui segment" style={{ marginTop: "20px" }}>
//         <form
//           onSubmit={this.handleSubmit}
//           className="ui form"
//           style={{
//             padding: "30px",
//           }}
//         >
//           <div className="field">
//             <label>Name</label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               value={this.state.name}
//               onChange={(e) => {
//                 this.setState({ name: e.target.value });
//               }}
//             />
//           </div>
//           <div className="inline field">
//             <input
//               className="ui checkbox"
//               id="status"
//               name="status"
//               type="checkbox"
//             />
//             <label>Completed</label>
//           </div>

//           <button
//             className={`ui red button`}
//             type="submit"
//             onClick={() => {
//               this.setState({ formError: false });
//             }}
//           >
//             Submit
//           </button>
//           {this.state.formError === false ? <div>submitted</div> : <div></div>}
//         </form>
//       </div>
//     );
//   }
// }

const TaskUpdate = (taskID) => {
  const [task, setTask] = useState("");
  const [name, setName] = useState("");
  const [status, setstatus] = useState("");
  const [description, setDescription] = useState("");
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
    taskID.history.push("/");
  };

  return (
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
  );
};

export default TaskUpdate;

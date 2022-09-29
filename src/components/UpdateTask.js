import React from "react";
import http from "../api/connection";

class TaskUpdate extends React.Component {
  state = { task: "", name: "", formError: "" };

  handleSubmit = (event) => {
    event.preventDefault();
    http.patch(`/${this.props.match.params.id}`, {
      ...this.state.task,
      name: this.state.name,
    });
  };

  componentDidMount() {
    http.get(`/${this.props.match.params.id}`).then((response) =>
      this.setState({
        task: response.data.task,
        name: response.data.task.name,
      })
    );
  }
  render() {
    if (!this.state.name) {
      return <div>Loading</div>;
    }
    return (
      <div className="ui segment" style={{ marginTop: "20px" }}>
        <form
          onSubmit={this.handleSubmit}
          className="ui form"
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
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="inline field">
            <input
              className="ui checkbox"
              id="status"
              name="status"
              type="checkbox"
            />
            <label>Completed</label>
          </div>

          <button
            className={`ui red button`}
            type="submit"
            onClick={() => {
              this.setState({ formError: false });
            }}
          >
            Submit
          </button>
          {this.state.formError === false ? <div>submitted</div> : <div></div>}
        </form>
      </div>
    );
  }
}
//   const [task, setTask] = useState("");
//   useEffect(async () => {
//     const response = await http.get(`/${taskID.match.params.id}`);
//     setTask(response.data.task);
//   }, [taskID.match.params.id]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };

//   console
//   return (
//     <div className="ui segment" style={{ marginTop: "20px" }}>
//       <form
//         onSubmit={handleSubmit}
//         className="ui form"
//         style={{
//           padding: "30px",
//         }}
//       >
//         <div className="field">
//           <label>Name</label>
//           <input
//             onChange={(e) => {
//               console.log(e.target.value);
//             }}
//             id="name"
//             name="name"
//             type="text"
//           />
//         </div>
//         <div className="inline field">
//           <input
//             className="ui checkbox"
//             id="status"
//             name="status"
//             type="checkbox"
//           />
//           <label>Completed</label>
//         </div>

//         <button className={`ui red button`} type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

export default TaskUpdate;

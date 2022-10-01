import http from "../api/connection";
const deleteTask = (id) => {
  http.delete("/" + id);
};

export default deleteTask;

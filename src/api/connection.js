import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5000/api/v1/tasks",
});

export default http;

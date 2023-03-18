import axios from "axios";

const http = axios.create({
  baseURL: "https://task-managerapi-production.up.railway.app/api/v1/tasks",
});

export default http;

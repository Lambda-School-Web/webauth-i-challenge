import axios from "axios";

export const axiosWithHeader = () => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  return axios.create({
    baseURL: "http://localhost:4000/api/",
    headers: {
      username: username,
      password: password
    }
  });
};

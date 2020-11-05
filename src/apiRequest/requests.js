import axios from "axios";
export function register_new_user(userData) {
  console.log("userData", userData);
  const requestBody = {
    ...userData,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  return axios.post(`http://localhost:3001/add_new_user`, requestBody, config);
}

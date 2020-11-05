import axios from "axios";
export function register_user_request(userData) {
  const requestBody = {
    userData,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  console.log(requestBody);
  return axios.post(`/api/register_user_request`, requestBody, config);
}

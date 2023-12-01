import axios from "axios";

export const registerUser = async (values: any) => {
  return axios
    .post("http://localhost:1337/api/auth/local/register", values)
    .then((response) => {
      // Handle success.
      console.log("Well done!");
      console.log("User profile", response.data.user);
      console.log("User token", response.data.jwt);
      return response.data;
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response);
      return error;
    });
};
export const loginUser = async (values: any) => {
  return axios
    .post("http://localhost:1337/api/auth/local", values)
    .then((response) => {
      // Handle success.
      console.log("Well done!");
      console.log("User profile", response.data.user);
      console.log("User token", response.data.jwt);
      return response.data;
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response);
      return error;
    });
};

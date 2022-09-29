import axios from "axios";

export async function fetchRandomUser() {
  return await axios
    .get("https://randomuser.me/api/")
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

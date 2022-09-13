import axios from "axios";

export async function generateDirectLineToken() {
  const token = await axios
    .get("http://localhost:444")
    .then(function (response) {
      // handle success
      return response.data.token;
    });
  return token;
}

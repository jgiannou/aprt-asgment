import axios from "axios";
export default axios.create({
  baseURL: "https://dummyapi.io/data/v1/",
  headers: {
    "app-id": "625e541bb43f1a4329d9ec84"
  },
});
 
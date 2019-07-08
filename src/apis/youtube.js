import axios from "axios";

const KEY = "AIzaSyC9MVweLREQ6hbks4-CttDc9a85WAM-boM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

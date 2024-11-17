import axios from "axios";
import { URL } from "../type";

export const getChatResponse = async (message) => {
  let errorMessage = "";
  try {
    const res = await axios.post(`${URL}`, JSON.stringify({ message }), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error sending message:", error);
  }
  return errorMessage;
};

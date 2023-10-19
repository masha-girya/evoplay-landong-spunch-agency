import axios from "axios";
import { API_REQUEST_ENDPOINT } from "src/constants";
import { IRequestBody, REQ_STATUS } from "../api-types";

export const sendRequest = async (data: IRequestBody) => {
  try {
    await axios.post(`${API_REQUEST_ENDPOINT}`, data);
    return { status: REQ_STATUS.success };
  } catch (error) {
    console.error({ error });
    return { status: REQ_STATUS.failed };
  }
};

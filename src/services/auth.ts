import request from "axios";
import { auth } from "../models/auth";

export const loginServices = async (data: auth) => {
  try {
    const result = await request({
      method: "POST",
      url: `${process.env.REACT_APP_API_INTRANET}/api/Login/Authenticate`,
      data,
      headers: {
        "content-type": "application/json",
      },
    });
    return result?.data;
  } catch (e) {
    throw e;
  }
};

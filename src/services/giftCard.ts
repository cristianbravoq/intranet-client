import request from "axios";

export const GetGiftCard = async (idDoc: string) => {
  try {
    const result = await request({
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_API_INTRANET}/api/MvtoAnticipado/GiftCards`,
      headers: {
        "Content-Type": "application/json",
      },
      data: idDoc,
    });
    console.log(result.data)
    return result?.data;
  } catch (e) {
    throw e;
  }
};

export const InsertGiftCard = async (idDoc: string) => {
  try {
    const result = await request({
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_API_INTRANET}/api/MvtoAnticipado/InsertGiftCards`,
      headers: {
        "Content-Type": "application/json",
      },
      data: idDoc,
    });
    return result?.data;
  } catch (e) {
    throw e;
  }
};

export const ConsultGiftCard = async (idDoc: string) => {
  try {
    const result = await request({
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_API_INTRANET}/api/MvtoAnticipado/ConsultaGiftCards`,
      headers: {
        "Content-Type": "application/json",
      },
      data: idDoc,
    });
    return result?.data;
  } catch (e) {
    return e;
  }
};
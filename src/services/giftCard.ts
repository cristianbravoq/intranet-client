import request from "axios";

export const ServicesGiftCard = async (idDoc: string) => {
  try {
    const result = await request({
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5209/api/MvtoAnticipado/GiftCards",
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
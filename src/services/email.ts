import request from "axios";

export async function sendEmail(info : string){
    try {
        const result = await request({
          method: "post",
          maxBodyLength: Infinity,
          url: `${process.env.REACT_APP_API_INTRANET}/api/Email/SubmitHTML`,
          headers: {
            "Content-Type": "application/json",
          },
          data: info,
        });
        return result?.data;
      } catch (e) {
        throw e;
      }
}
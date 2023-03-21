import request from "axios";

export async function sendEmail(info : string){
    try {
        const result = await request({
          method: "post",
          maxBodyLength: Infinity,
          url: "http://localhost:5209/api/Email/SubmitHTML",
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
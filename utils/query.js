import axios from "axios";
import { configDotenv } from "dotenv";
configDotenv();

const { URL, ORIGIN, REFURL } = process.env;

export async function query(text) {
  const response = await axios.post(
    `${URL}`,
    {
      text: `${text}`,
    },
    {
      headers: {
        Accept: "*/*",
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
        Connection: "keep-alive",
        "Content-Type": "application/json",
        Origin: `${ORIGIN}`,
        Referer: `${REFURL}`,
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36",
        "sec-ch-ua":
          '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": '"Android"',
      },
    }
  );

  if (response) return response.data;
  else return "Error";
}

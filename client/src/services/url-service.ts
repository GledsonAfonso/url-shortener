import { environment } from "../configuration/environment";
import axios from "axios";

type ShortUrlResponse = {
  shortUrl: string;
};

export const getShortUrl = async (url: string): Promise<ShortUrlResponse> => {
  const response = await axios.post(
    `${environment.serverUrl}/v1/url/short`,
    {
      url,
    }
  );

  return response.data;
};

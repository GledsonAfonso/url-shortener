import { environment } from "../../configuration/environment";
import { httpClient } from "../http/http-service";
import { type HttpServiceResponse } from "../http/types";

type ShortUrlRequest = {
  url: string;
}

type ShortUrlResponse = {
  shortUrl: string;
};

export const getShortUrl = async (url: string): Promise<HttpServiceResponse<ShortUrlResponse>> => {
  const response = await httpClient.post<ShortUrlRequest, ShortUrlResponse>({
    url: `${environment.serverUrl}/v1/url/short`,
    data: {
      url,
    }
  });

  return response;
};

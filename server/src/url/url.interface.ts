import { IsEmail, IsUrl } from "@nestjs/class-validator";

export class ShortUrlRequest {
  @IsUrl()
  url: string;
}

export class ShortUrlResponse {
  newUrl: string;
}

export interface Url {
  shortUrl: string,
  url: string,
}
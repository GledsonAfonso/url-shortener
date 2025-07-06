import { IsUrl } from "@nestjs/class-validator";
import type { Url as PrismaUrlModel } from "generated/prisma";

export class ShortUrlRequest {
  @IsUrl()
  url: string;
}

export class ShortUrlResponse {
  shortUrl: string;
}

export type Url = PrismaUrlModel;

export type UrlInfo = Pick<
  PrismaUrlModel,
  | "shortUrl"
  | "originalUrl"
>;

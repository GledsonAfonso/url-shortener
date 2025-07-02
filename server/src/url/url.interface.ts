import { IsUrl } from "@nestjs/class-validator";
import type { Url as PrismaUrlModel } from "generated/prisma";

export class ShortUrlRequest {
  @IsUrl()
  url: string;
}

export class ShortUrlResponse {
  newUrl: string;
}

export type Url = Pick<
  PrismaUrlModel,
  | "shortUrl"
  | "originalUrl"
>;

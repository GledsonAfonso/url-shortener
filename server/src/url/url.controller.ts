import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { ShortUrlRequest, ShortUrlResponse } from 'src/url/url.interface';
import { UrlService } from 'src/url/url.service';

@Controller({
  version: '1',
  path: 'url',
})
export class UrlController {
  constructor(
    private service: UrlService,
  ) {}

  @Post('short')
  async shortUrl(
    @Body() request: ShortUrlRequest,
  ): Promise<ShortUrlResponse> {
    const newUrl = await this.service.getShortenedUrl(request.url);

    return {
      newUrl,
    }
  }
}

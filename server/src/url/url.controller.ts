import { Body, Controller, Post, Req } from '@nestjs/common';
import { ShortUrlRequest, ShortUrlResponse } from 'src/url/url.interface';
import { UrlService } from 'src/url/url.service';
import { UrlUtils } from 'src/url/url.utils';

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
    @Req() request: Request,
    @Body() body: ShortUrlRequest,
  ): Promise<ShortUrlResponse> {
    const result = await this.service.getShortenedUrl(body.url);

    return {
      shortUrl: UrlUtils.getFormattedUrl(request, result),
    }
  }
}

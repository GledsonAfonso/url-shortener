import { Controller, Get, NotFoundException, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { UrlRepository } from 'src/url/url.repository';

@Controller()
export class RedirectionController {
  constructor(
    private urlRepository: UrlRepository,
  ) {}

  @Get(':shortUrl')
  async redirect(
    @Param('shortUrl') shortUrl: string,
    @Res() response: Response,
  ) {
    // need to search the db for the url
    const result = await this.urlRepository.findByShortUrl(shortUrl);

    if (!result) {
      throw new NotFoundException();
    }
    
    return response.redirect(result.originalUrl);
  }
}

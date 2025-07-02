import { Injectable } from '@nestjs/common';
import { Url } from 'src/url/url.interface';

@Injectable()
export class UrlRepository {
  constructor() {}

  async save(url: Url): Promise<Url> {
    return {
      shortUrl: 'test',
      url: 'test',
    };
  }

  async findByUrl(url: string): Promise<Url | null> {
    return {
      shortUrl: 'test',
      url: 'test',
    };
  }

  async findByShortUrl(url: string): Promise<Url | null> {
    return {
      shortUrl: 'test',
      url: 'test',
    };
  }
}

import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { UrlRepository } from 'src/url/url.repository';

@Injectable()
export class UrlService {
  URL_BASE_SIZE = 5;

  constructor(
    private repository: UrlRepository,
  ) {}

  async getShortenedUrl(url: string): Promise<string> {
    // lookup in db to see if there's an active record for this url, return short url if there is one
    const urlLookup = await this.repository.findByUrl(url);

    // early return if there's already a short url stored
    if (urlLookup) {
      return urlLookup.shortUrl;
    }

    let result: string | null = null;
    // up to 4 tries to get a unique hash to prevent the URL from being too big
    for (let tries = 0; tries <= 3; tries++) {
      const urlSize = this.URL_BASE_SIZE + tries;
      const hash = this.getHash(urlSize);
  
      // search the DB for the resulting hash
      const hashLookup = await this.repository.findByShortUrl(hash);

      // if something is found, jump to the next loop to try a bigger hash
      if (hashLookup) {
        continue;
      }

      // if nothing is found, hold the hash and break the loop
      result = hash;
      break;
    }

    if (!result) {
      throw new Error(`Not able to generate a short url for: ${url}`);
    }

    // if there's a hash in hold, save it in the db
    await this.repository.save({
      url,
      shortUrl: result,
    });

    return result;
  }

  private getHash(size: number) {
    return nanoid(size);
  }
}

import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/configuration/database.service';
import { Url, UrlInfo } from 'src/url/url.interface';

@Injectable()
export class UrlRepository {
  constructor(
    private db: DatabaseService,
  ) {}

  async save(url: UrlInfo): Promise<Url> {
    const result = await this.db.url.create({
      data: {
        shortUrl: url.shortUrl,
        originalUrl: url.originalUrl,
      }
    });

    return result;
  }

  async findByUrl(url: string): Promise<Url | null> {
    return this.db.url.findFirst({
      where: {
        originalUrl: url,
        active: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByShortUrl(url: string): Promise<Url | null> {
    return this.db.url.findFirst({
      where: {
        shortUrl: url,
        active: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async updateVisitCounter(id: number): Promise<void> {
    await this.db.url.updateMany({
      where: {
        id,
      },
      data: {
        visits: {
          increment: 1,
        }
      }
    });
  }
}

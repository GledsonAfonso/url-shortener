import { Module } from '@nestjs/common';
import { UrlController } from 'src/url/url.controller';
import { UrlService } from './url.service';
import { UrlRepository } from 'src/url/url.repository';

const controllers = [
  UrlController,
];

const services = [
  UrlService,
];

const repositories = [
  UrlRepository,
];

@Module({
  controllers: controllers,
  providers: [
    ...repositories,
    ...services,
  ],
})
export class UrlModule {}

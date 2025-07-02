import { Module } from '@nestjs/common';
import { DatabaseService } from 'src/configuration/database.service';
import { RedirectionController } from 'src/redirection/redirection.controller';
import { UrlRepository } from 'src/url/url.repository';

const repositories = [
  UrlRepository,
];

const services = [
  DatabaseService,
];

@Module({
  controllers: [RedirectionController],
  providers: [
    ...services,
    ...repositories,
  ],
})
export class RedirectionModule {}

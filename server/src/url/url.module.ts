import { Module } from '@nestjs/common';
import { UrlController } from 'src/url/url.controller';
import { UrlService } from './url.service';
import { UrlRepository } from 'src/url/url.repository';
import { ConfigurationModule } from 'src/configuration/configuration.module';

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
  imports: [
    ConfigurationModule,
  ],
  controllers: controllers,
  providers: [
    ...repositories,
    ...services,
  ],
})
export class UrlModule {}

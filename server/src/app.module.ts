import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigurationModule } from 'src/configuration/configuration.module';
import { RedirectionModule } from 'src/redirection/redirection.module';
import { UrlModule } from 'src/url/url.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ConfigurationModule,
    UrlModule,
    RedirectionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

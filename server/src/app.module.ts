import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UrlModule } from 'src/url/url.module';
import { UtilService } from './util/util.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UrlModule,
  ],
  controllers: [],
  providers: [UtilService],
})
export class AppModule {}

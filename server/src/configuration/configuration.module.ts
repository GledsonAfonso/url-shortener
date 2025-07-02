import { Module } from '@nestjs/common';
import { DatabaseService } from 'src/configuration/database.service';

const services = [
  DatabaseService,
];

@Module({
  providers: services,
  exports: services,
})
export class ConfigurationModule {}

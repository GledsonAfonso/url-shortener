import { Module } from '@nestjs/common';
import { DatabaseService } from 'src/configuration/database.service';

const services = [
  DatabaseService,
];

@Module({
  providers: services,
})
export class ConfigurationModule {}

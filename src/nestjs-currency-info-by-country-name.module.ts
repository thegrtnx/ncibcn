import { Module } from '@nestjs/common';
import { NestjsCurrencyInfoByCountryNameService } from './nestjs-currency-info-by-country-name.service';

@Module({
  providers: [NestjsCurrencyInfoByCountryNameService],
  exports: [NestjsCurrencyInfoByCountryNameService],
})
export class NestjsCurrencyInfoByCountryNameModule {}

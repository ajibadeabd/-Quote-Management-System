import { Module } from '@nestjs/common';
import { QuoteController } from './quote.controller';
import { QuoteService } from './quote.services';

@Module({
  imports: [],
  controllers: [QuoteController],
  providers: [QuoteService],
})
export class QuoteModule {}

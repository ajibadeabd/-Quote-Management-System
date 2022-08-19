import { Controller, Get, Post, Req, Put, Delete } from '@nestjs/common';
import { QuoteService } from './quote.services';
import { Request } from 'express';

@Controller()
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get('/test')
  getHello(): string {
    return this.quoteService.getHello();
  }

  @Get('/quotes')
  getQuotes(): string {
    return this.quoteService.getQuotes();
  }
  @Get('/quote/:id')
  getQuote(@Req() request: Request): string {
    return this.quoteService.getQuote(request.params.id);
  }
  @Post('/create-quote')
  createQuote(@Req() request: Request): string {
    return this.quoteService.createQuote(request.body);
  }

  @Post('/login')
  login(@Req() request: Request): string {
    return this.quoteService.login(request.body);
  }

  @Put('/update-quote/:id')
  updateQuote(@Req() request: Request): string {
    return this.quoteService.updateQuote(request.params.id, request.body);
  }
  @Delete('/delete-quote/:id')
  deleteQuote(@Req() request: Request): string {
    return this.quoteService.deleteQuote(request.params.id);
  }
}

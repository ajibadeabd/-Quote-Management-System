import { HttpException, Injectable } from '@nestjs/common';

let quotes = [];
const users = [];

@Injectable()
export class QuoteService {
  getHello(): string {
    return 'Hello test!';
  }
  getQuotes(): any {
    return quotes;
  }

  validateUsers(user, password): any {
    const authenticated = users.find(
      (user) => user?.username == user,
      user?.password == password,
    );

    if (!authenticated) throw new HttpException('un authorized', 404);
  }

  getQuote(id: string): any {
    const response = quotes.filter((quote) => quote.id == id)[0];
    if (!response) return 'quote does not exist';
    return response;
  }

  login(body): any {
    const { user, password } = body;
    users.push({ user, password });
  }


  createQuote(body): any {
    // this.validateUsers(body?.user, body?.password);

    const { author, quote } = body;
    let id;
    if (quotes.length == 0) {
      id = 1;
    } else {
      id = quotes[quotes.length - 1].id + 1;
    }
    const newData = { quote, author, id, createdAt: new Date() };
    quotes.push(newData);

    return newData;
  }
  updateQuote(id, body): any {
    // this.validateUsers(body?.user, body?.password);

    const { author, quote } = body;
    const updatedData = quotes.filter((quote) => quote.id == id)[0];
    if (!updatedData) return 'you cannot update a quote that does not exist';

    updatedData.author = author || updatedData.author;
    updatedData.quote = quote || updatedData.quote;
    const remainingData = quotes.filter((quote) => quote.id != id);
    remainingData.push(updatedData);
    return 'data updated';
  }

  deleteQuote(id): any {
    const deletedData = quotes.filter((quote) => quote.id == id)[0];
    if (!deletedData) return 'you cannot delete a quote that does not exist';
    quotes = quotes.filter((quote) => quote.id != id);
    return 'data delete';
  }
}

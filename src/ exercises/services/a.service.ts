import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { booksData } from '../data/books.data';
import { Book } from '../models/book.model';

@Injectable()
export class AService {
  private data: Observable<Book[]> = of(booksData as Array<Book>);

  getBooks(): Observable<Book[]> {
    return this.data;
  }

  checkOut(book: Book): Observable<Book> {
    book.status = 'out';
    return of(book);
  }
}

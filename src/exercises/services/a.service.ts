import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { booksData } from '../data/books.data';
import { Book } from '../models/book.model';

@Injectable()
export class AService {
  private data: Observable<Book[]>;

  getBooks(): Observable<Book[]> {
    this.data = of(booksData.map(item => new Book(item.title, item.author, item.status)));
    return this.data;
  }

  checkOut(book: Book): Observable<Book> {
    book.setStatus('out');
    return of(book);
  }
}

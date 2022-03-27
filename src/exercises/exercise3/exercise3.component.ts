import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { AService } from '../services/a.service';

@Component({
  selector: 'app-exercise3',
  template: `<div>
  <div><app-book [book]="book"></app-book></div>
</div>`,
})
export class Exercise3Component {

  book: Book;

  constructor(private service: AService) { }

  ngOnInit(): void {
    this.service.getBooks()
    .subscribe((bookList: Book[]) => {
      this.book = bookList[1];
    });
  }
}

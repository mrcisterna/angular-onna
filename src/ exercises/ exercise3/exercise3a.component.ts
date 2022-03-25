import { Component, Input, OnChanges } from '@angular/core';
import { Book } from '../models/book.model';
import { AService } from '../services/a.service';

@Component({
  selector: 'app-book-a',
  template: `<div *ngIf="!!book"> 
      <h1>{{ book.title }}</h1> 
      <p>Status: {{ status }}</p> 
      <button *ngIf="status === 'available'" (click)="checkOut()">Check out</button> 
  </div>`,
})
export class BookAComponent implements OnChanges {
  @Input() book?: Book;
  status = 'out';

  constructor(private service: AService) {}

  ngOnChanges() {
    if (!!this.book) {
      this.status = this.book.getStatus();
    }
  }

  checkOut() {
    this.service
      .checkOut(this.book)
      .subscribe((book) => (this.status = book.getStatus()));
  }
}

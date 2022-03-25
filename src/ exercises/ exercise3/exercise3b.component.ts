import { Component, Input } from '@angular/core';
import { Book } from '../models/book.model';
import { AService } from '../services/a.service';

@Component({
  selector: 'app-book-b',
  template: `<div *ngIf="!!book"> 
      <h1>{{ book.title }}</h1> 
      <p>Status: {{ book.getStatus() }}</p> 
      <button *ngIf="book.getStatus() === 'available'" (click)="checkOut()">Check 
out</button> 
  </div>`,
})
export class BookBComponent {
  @Input() book?: Book;

  constructor(private service: AService) {}

  checkOut() {
    this.service.checkOut(this.book).subscribe();
  }
}
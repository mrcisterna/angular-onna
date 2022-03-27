import { Component, Input } from "@angular/core";
import { Book } from "../models/book.model";
import { AService } from "../services/a.service";

@Component({
  selector: 'app-book',
  template: `<div *ngIf="!!book">
  <h1>{{ book.title }}</h1>
  <p>Status: {{ book.getStatus() }}</p>
  <button *ngIf="book.getStatus() === 'available'" (click)="checkOut()">Check
 out</button>
  </div>`
})
export class BookComponent {
  @Input() book?: Book;
  constructor(private service: AService) { }
  checkOut() {
    this.service.checkOut(this.book as Book).subscribe();
  }
}
// I choose this implementation for 2 main reasons.
// 1. It meets the Single Responsibility principle: All logic related to get the status of the book is in the Book class
// 2. book.getStatus() will react to any other call from any other living component within the view bacause it is referenced
// by the change detection cycle. For example the user can clean the basket and status of the book/s will be updated.

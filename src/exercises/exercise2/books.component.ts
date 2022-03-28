import { Component, OnInit } from "@angular/core";
import { Book } from "../models/book.model";
import { AService } from "../services/a.service";

@Component({
  selector: 'app-books',
  template: `<ul>
  <li *ngFor="let book of books">{{ book.title }}, by {{ book.author }}</li>
  </ul>`
})
export class BooksComponent implements OnInit {
  books: { title: string, author: string }[] = [];
  constructor(private service: AService) { }
  ngOnInit() {
    this.service.getBooks().subscribe((bookList: Book[]) => {
      this.books = bookList.map(book => ({
        title: book.getTitle(), author:
          book.getAuthor()
      }));
    })
  }
}
// For these reasons, enumerated below, I choose this implementation:
// 1. From my point of view map is the most clean and accurate solution to get a new array 
// 2. Array.map is 4 times faster than Array.forEach -> push approach.
// 3. map can be chained with other Array methods
// 4. RxJs Observable supports map, so this code can be refactored in that way 

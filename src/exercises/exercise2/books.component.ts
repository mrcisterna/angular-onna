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

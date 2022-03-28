import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
  path: string = 'scr/exercises';
  exercises: { name: string, folder: string, file: string }[] = [];

  ngOnInit(): void {
    this.exercises = [
      { 
        name: 'Exercise 1',
        folder: 'exercise1',
        file: 'exercise1.component.ts'
      },
      { 
        name: 'Exercise 2',
        folder: 'exercise2',
        file: 'books.component.ts'
      },
      { 
        name: 'Exercise 3',
        folder: 'exercise3',
        file: 'book.component.ts'
      }
    ]
  }
}

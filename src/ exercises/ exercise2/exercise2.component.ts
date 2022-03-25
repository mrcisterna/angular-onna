import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  template: `<mat-grid-list cols="2" rowHeight="2:1">
  <mat-grid-tile><app-books-a></app-books-a></mat-grid-tile>
  <mat-grid-tile><app-books-b></app-books-b></mat-grid-tile>  
</mat-grid-list>`,
})
export class Exercise2Component {}

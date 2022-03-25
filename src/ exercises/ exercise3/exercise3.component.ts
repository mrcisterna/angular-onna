import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise3',
  template: `<mat-grid-list cols="2" rowHeight="2:1">
  <mat-grid-tile><app-book-a></app-book-a></mat-grid-tile>
  <mat-grid-tile><app-book-b></app-book-b></mat-grid-tile>  
</mat-grid-list>`,
})
export class Exercise3Component {}

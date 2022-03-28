import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Exercise1Component } from './exercise1/exercise1.component';
import { BooksComponent } from './exercise2/books.component';
import { Exercise3Component } from './exercise3/exercise3.component';

const routes: Routes = [
  { path: 'exercise1', component: Exercise1Component },
  { path: 'exercise2', component: BooksComponent },
  { path: 'exercise3', component: Exercise3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ExercisesRoutingModule { }

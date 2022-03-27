import { NgModule } from '@angular/core';
import { AService } from './services/a.service';
import { BookComponent } from './exercise3/book.component';
import { Exercise3Component } from './exercise3/exercise3.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { ExercisesRoutingModule } from './exercises.routing.module';
import { CommonModule } from '@angular/common';
import { MaterialExampleModule } from '../material.module';
import { BooksComponent } from './exercise2/books.component';

@NgModule({
  imports: [CommonModule, MaterialExampleModule, ExercisesRoutingModule],
  declarations: [
    Exercise1Component,
    Exercise3Component,
    BooksComponent,
    BookComponent
  ],
  providers: [AService],
})
export class ExercisesModule { }

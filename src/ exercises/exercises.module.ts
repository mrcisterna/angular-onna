import { NgModule } from '@angular/core';
import { AService } from './services/a.service';
import { BookAComponent } from './ exercise3/exercise3a.component';
import { BookBComponent } from './ exercise3/exercise3b.component';
import { BooksBComponent } from './ exercise2/exercise2b.component';
import { BooksAComponent } from './ exercise2/exercise2a.component';
import { Exercise2Component } from './ exercise2/exercise2.component';
import { Exercise3Component } from './ exercise3/exercise3.component';
import { Exercise1Component } from './ exercise1/exercise1.component';
import { ExercisesRoutingModule } from './exercises.routing.module';
import { CommonModule } from '@angular/common';
import { MaterialExampleModule } from '../material.module';

@NgModule({
  imports: [CommonModule, MaterialExampleModule, ExercisesRoutingModule],
  declarations: [
    Exercise1Component,
    Exercise2Component,
    Exercise3Component,
    BooksAComponent,
    BooksBComponent,
    BookAComponent,
    BookBComponent,
  ],
  providers: [AService],
})
export class ExercisesModule {}

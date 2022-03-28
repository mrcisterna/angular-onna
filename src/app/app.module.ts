import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExercisesModule } from '../exercises/exercises.module';
import { MaterialExampleModule } from '../material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '../home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    RouterModule,
    ExercisesModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

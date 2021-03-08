import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToDoListComponent} from './Todolist/ToDoList.component';
import { FormsModule } from '@angular/forms';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ListTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

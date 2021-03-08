
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { ListTasksComponent } from '../list-tasks/list-tasks.component';
import { Tasks } from '../tasks';

     @Component({
      selector: 'app-ToDoList',
      templateUrl: './todolist.component.html',
      styleUrls: ['./todolist.component.css']
     })
     export class ToDoListComponent {
        // @ViewChildren(ListTasksComponent)
        // ToDoList: QueryList<ListTasksComponent>;

       @Input()
        taskName: string;
        taskDescription: string;
        task: Tasks;
        tasks: Tasks[]=[];
        
        i!: number;
        

    
      constructor() {
          this.tasks = [];
      }

     addTask(){
         let dd: Tasks = {
             id: 1,
             name: this.taskName,
             description: this.taskDescription
         }

         //console.log(dd);
         this.tasks.push(dd);
         console.log(this.tasks);
     } 
     deleteTask(index: number, component:ListTasksComponent){
        this.tasks.splice(index);
        console.log('from deleteTask');
        //   this.tasks = this.tasks.splice(index, 1);
        // this.tasks = this.tasks.filter(item => item !== index );
    //  }
} 
    
}
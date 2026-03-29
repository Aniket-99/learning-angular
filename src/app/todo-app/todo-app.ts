import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo-app',
  imports: [FormsModule],
  templateUrl: './todo-app.html',
  styleUrl: './todo-app.css'
})
export class TodoApp {
  task="";
  tasksList:{id:number, task:string}[]=[];


  addTask(){
    this.tasksList.push({id:this.tasksList.length+1,task:this.task});
    this.task = "";
  }

  deleteTask(taskId:number){
    this.tasksList = this.tasksList.filter((item) => item.id!=taskId);
  }
}

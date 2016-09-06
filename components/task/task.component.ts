import { Component, EventEmitter } from '@angular/core';

export class Task {
    name: string;
    difficulty: string;
    status: boolean;
    deleted: boolean;

   constructor(name: string, difficulty: string, status?: boolean, deleted?:boolean) {
    this.name = name;
    this.difficulty = difficulty;
    this.status = false;
    this.deleted = false;
   }
 taskDone(): void {
   this.status = true;
 } 
 taskDeleted(): void {
   this.deleted = true;
   console.log("button works");
 }
   
}


@Component({
 selector: 'mh-task',
 inputs: ['task'],
 template: `
    <div class="panel panel-default">
      <div> <span id="taskname"> {{ task.name }} </span>
     <span id="taskdifficulty"> {{ task.difficulty }} </span> 
              <button type="button" (click)="taskDone()">
              Done
            </button>
              <button type="button" (click)="taskDeleted()">
              Delete
            </button>

    </div>
    </div>
 `
})
export class TaskComponent {
 task: Task;

  taskDone(): boolean {
    this.task.taskDone();
    return false;
  }
  taskDeleted(): boolean {
    this.task.taskDeleted();
    return false;
  }

}


    //  <span *ngIf="task.status === true"> done </span> 
    //  <span *ngIf="task.status === false"> undone </span> 



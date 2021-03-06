import {Component, EventEmitter} from '@angular/core';
import { TaskComponent, Task } from './task/task.component';


@Component({
    selector: 'planner',
    template: `
    <div class="jumbotron">
        <div class="container">
          <h1>To Do List</h1>
          <p>By Ming with the help of Gerald, Weiyang, Barny and Prima.</p>
              <form class="ui large form segment">
                  <h3 class="ui header">Report Mission</h3>

                  <div class="field">
                  <label for="name">Mission:</label>
                  <input placeholder="Enter Mission" #newname>
                  </div>
                  <div class="field">
                  <label for="difficulty">Difficulty:</label>
                  
               <select name="Difficulty" #newdifficulty>
                <option value="Easy Peasy">Easy Peasy</option>
                <option value="Moderate">Normal</option>
                <option value="Difficult">Difficult</option>
                <option value="Impossible">Impossible</option>
               </select>
                
                  </div>

                <button type="button" (click)="addTask(newname, newdifficulty)"
                      class="ui positive right floated button">
                Submit task
                </button>
              </form>
          <div class="clear"></div>
              <div class="col-sm-6" id="todo">
              <h2>Tasks To Do</h2>
                <mh-task *ngFor="let task of undoneTasks()" [task]="task"></mh-task>
              </div>
              <div class="col-sm-6" id="done">
              <h2>Tasks Done</h2>
              <mh-task *ngFor="let task of doneTasks()" [task]="task"></mh-task>
            </div>
           </div>
  `
}) 



export class PlannerComponent {

tasks: Task[];

constructor() {
  this.tasks = [
    new Task("Cook an antelope", "Easy Peasy", false),
    new Task("Learn coding from Gerald", "Moderate", false),
    new Task("Ground coffee beans", "Difficult", false),
    new Task("Eat a rainbow", "Easy Peasy", false),
    new Task("Pet an elephant", "Difficult", false),
    new Task("Wave at a panda", "Moderate", false),
    new Task("Slurp a slurpee", "Impossible", false)
  ];
}
  addTask(name: HTMLInputElement, difficulty: HTMLInputElement): void {
    console.log(`Adding task name: ${name.value} and link: ${difficulty.value}`);
    this.tasks.push(new Task(name.value, difficulty.value, 0));
    name.value = '';
    difficulty.value = '';
  }

  doneTasks(): Task[] {
   return this.tasks.filter(this.checkDone);
   }

   checkDone(task) : any {
   return task.status === true && task.deleted === false; 
   }
  undoneTasks(): Task[] {
   return this.tasks.filter(this.checkUndone);
   }

   checkUndone(task) : any {
   return task.status === false && task.deleted === false; 
   }
   
}



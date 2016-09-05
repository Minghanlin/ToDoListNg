import {Component} from '@angular/core';


@Component({
  selector: 'taskform',
  template: `
          <form class="ui large form segment">
          <h3 class="ui header">Add Task</h3>

          <div class="field">
         <label for="name">Name: </label>
          <input name="name" #newname>
          </div>
           <div class="field">
           <label for="status">Status:</label>
          <input name="status" #newstatus>
          </div>

         <button (click)="addTask(newname, newstatus)"
              class="ui positive right floated button">
        Submit task
         </button>
        </form>
  `
})

export class FormComponent {}


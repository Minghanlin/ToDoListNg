

import {
  Component,
  EventEmitter
} from '@angular/core';

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// import { FormComponent } from "./components/form.component";


@Component({
  selector: 'my-app',
  // declarations: [FormComponent],
  template: `
<div class="jumbotron">
  <div class="container">
    <h1>To Do List</h1>
    <p>Do do do do do</p>
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
    <div class="clear"></div>
        <div class="col-sm-6" id="todo"></div>
        <div class="col-sm-6" id="notdone"></div>
</div>
</div>
  `
})
class InventoryApp { }

@NgModule({
  declarations: [InventoryApp],
  imports: [ BrowserModule ],
  bootstrap: [ InventoryApp ]
})
class InventoryAppModule {}

platformBrowserDynamic().bootstrapModule(InventoryAppModule);
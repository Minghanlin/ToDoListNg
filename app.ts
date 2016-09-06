import {
  Component,
  EventEmitter
} from '@angular/core';

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { PlannerComponent } from "./components/planner.component";
import { TaskComponent, Task } from "./components/task/task.component";



@Component({
  selector: 'my-app',
  // directives: [PlannerComponent, TaskComponent, Task],
  template: `
    <planner></planner>
  `
})
class AppComponent { }

@NgModule({
  // declarations: [AppComponent, PlannerComponent, TaskComponent],
  declarations: [AppComponent, PlannerComponent, TaskComponent],
  imports: [ BrowserModule ],
  bootstrap: [ AppComponent ]
})
class AppComponentModule {}

platformBrowserDynamic().bootstrapModule(AppComponentModule);
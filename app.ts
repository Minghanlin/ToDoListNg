

import {
  Component,
  EventEmitter
} from '@angular/core';

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";


@Component({
  selector: 'my-app',
  template: `
<div class="jumbotron">
  <div class="container">
    <h1>To Do List</h1>
    <p>Do do do do do</p>
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
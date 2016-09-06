System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Task, TaskComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Task = (function () {
                function Task(name, difficulty, status, deleted) {
                    this.name = name;
                    this.difficulty = difficulty;
                    this.status = false;
                    this.deleted = false;
                }
                Task.prototype.taskDone = function () {
                    this.status = true;
                };
                Task.prototype.taskDeleted = function () {
                    this.deleted = true;
                    console.log("button works");
                };
                return Task;
            }());
            exports_1("Task", Task);
            TaskComponent = (function () {
                function TaskComponent() {
                }
                TaskComponent.prototype.taskDone = function () {
                    this.task.taskDone();
                    return false;
                };
                TaskComponent.prototype.taskDeleted = function () {
                    this.task.taskDeleted();
                    return false;
                };
                TaskComponent = __decorate([
                    core_1.Component({
                        selector: 'mh-task',
                        inputs: ['task'],
                        template: "\n    <div class=\"panel panel-default\">\n      <div> <span id=\"taskname\"> {{ task.name }} </span>\n     <span id=\"taskdifficulty\"> {{ task.difficulty }} </span> \n              <button type=\"button\" (click)=\"taskDone()\">\n              Done\n            </button>\n              <button type=\"button\" (click)=\"taskDeleted()\">\n              Delete\n            </button>\n\n    </div>\n    </div>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TaskComponent);
                return TaskComponent;
            }());
            exports_1("TaskComponent", TaskComponent);
        }
    }
});
//  <span *ngIf="task.status === true"> done </span> 
//  <span *ngIf="task.status === false"> undone </span> 
//# sourceMappingURL=task.component.js.map
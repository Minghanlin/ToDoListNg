System.register(['@angular/core', './task/task.component'], function(exports_1, context_1) {
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
    var core_1, task_component_1;
    var PlannerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_component_1_1) {
                task_component_1 = task_component_1_1;
            }],
        execute: function() {
            PlannerComponent = (function () {
                function PlannerComponent() {
                    this.tasks = [
                        new task_component_1.Task("Cook an antelope", "Easy Peasy", false),
                        new task_component_1.Task("Learn coding from Gerald", "Moderate", false),
                        new task_component_1.Task("Ground coffee beans", "Diffiult", false),
                        new task_component_1.Task("Eat a rainbow", "Easy Peasy", false),
                        new task_component_1.Task("Pet an elephant", "Difficult", false),
                        new task_component_1.Task("Wave at a panda", "Moderate", false),
                        new task_component_1.Task("Slurp a slurpee", "Impossible", false)
                    ];
                }
                PlannerComponent.prototype.addTask = function (name, difficulty) {
                    console.log("Adding task name: " + name.value + " and link: " + difficulty.value);
                    this.tasks.push(new task_component_1.Task(name.value, difficulty.value, 0));
                    name.value = '';
                    difficulty.value = '';
                };
                PlannerComponent.prototype.doneTasks = function () {
                    return this.tasks.filter(this.checkDone);
                };
                PlannerComponent.prototype.checkDone = function (task) {
                    return task.status === true && task.deleted === false;
                };
                PlannerComponent.prototype.undoneTasks = function () {
                    return this.tasks.filter(this.checkUndone);
                };
                PlannerComponent.prototype.checkUndone = function (task) {
                    return task.status === false && task.deleted === false;
                };
                PlannerComponent = __decorate([
                    core_1.Component({
                        selector: 'planner',
                        template: "\n    <div class=\"jumbotron\">\n        <div class=\"container\">\n          <h1>To Do List</h1>\n          <p>By Ming with the help of Gerald, Weiyang, Barny and Prima.</p>\n              <form class=\"ui large form segment\">\n                  <h3 class=\"ui header\">Report Mission</h3>\n\n                  <div class=\"field\">\n                  <label for=\"name\">Missions:</label>\n                  <input placeholder=\"Enter Mission\" #newname>\n                  </div>\n                  <div class=\"field\">\n                  <label for=\"difficulty\">Difficulty:</label>\n                  \n               <select name=\"Difficulty\" #newdifficulty>\n                <option value=\"easy\">Easy Peasy</option>\n                <option value=\"moderate\">Normal</option>\n                <option value=\"difficult\">Difficult</option>\n                <option value=\"difficult\">Impossible</option>\n               </select>\n                \n                  </div>\n\n                <button type=\"button\" (click)=\"addTask(newname, newdifficulty)\"\n                      class=\"ui positive right floated button\">\n                Submit task\n                </button>\n              </form>\n          <div class=\"clear\"></div>\n              <div class=\"col-sm-6\" id=\"todo\">\n              <h2>Tasks To Do</h2>\n                <mh-task *ngFor=\"let task of undoneTasks()\" [task]=\"task\"></mh-task>\n              </div>\n              <div class=\"col-sm-6\" id=\"done\">\n              <h2>Tasks Done</h2>\n              <mh-task *ngFor=\"let task of doneTasks()\" [task]=\"task\"></mh-task>\n            </div>\n           </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlannerComponent);
                return PlannerComponent;
            }());
            exports_1("PlannerComponent", PlannerComponent);
        }
    }
});
//# sourceMappingURL=planner.component.js.map
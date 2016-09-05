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
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FormComponent = (function () {
                function FormComponent() {
                }
                FormComponent = __decorate([
                    core_1.Component({
                        selector: 'taskform',
                        template: "\n          <form class=\"ui large form segment\">\n          <h3 class=\"ui header\">Add Task</h3>\n\n          <div class=\"field\">\n         <label for=\"name\">Name: </label>\n          <input name=\"name\" #newname>\n          </div>\n           <div class=\"field\">\n           <label for=\"status\">Status:</label>\n          <input name=\"status\" #newstatus>\n          </div>\n\n         <button (click)=\"addTask(newname, newstatus)\"\n              class=\"ui positive right floated button\">\n        Submit task\n         </button>\n        </form>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormComponent);
                return FormComponent;
            }());
            exports_1("FormComponent", FormComponent);
        }
    }
});
//# sourceMappingURL=form.component.js.map
System.register(['angular2/core'], function(exports_1, context_1) {
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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    /* Lista  temas*/
                    this.tarefas = [
                        'Engenharia de software',
                        'Redes',
                        'Ux Design',
                        'Empreendedorismo'
                    ];
                }
                /* Metodo que adiciona o tema na lista de temas*/
                AppComponent.prototype.adicionar = function () {
                    if (this.txtTarefa != '') {
                        this.tarefas.push(this.txtTarefa);
                        this.txtTarefa = '';
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        /* metadatas*/
                        selector: 'meu-app',
                        template: "\n\t    <h1>Code Girl - exemplo</h1>\n\t    <h2>TEMAS</h2>\n\t    <ul>\n\t    \t<li *ngFor=\"#tarefa of tarefas\">\n\t    \t\t{{tarefa}}\n\t    \t</li>\n\t    </ul>\t\n\t    <input type=\"text\" name=\"tarefa\" placeholder=\"digite a tarefa ...\"\n\t    \t[(ngModel)]=\"txtTarefa\"\n\t    >\n\t    <button (click)=\"adicionar()\">Adicionar</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app-component.js.map
System.register(['angular2/core', 'angular2/router', '../service/service-hero', './dashboard/component-dashboard', './hero/component-heroes', './hero/component-hero-detail'], function(exports_1, context_1) {
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
    var core_1, router_1, service_hero_1, component_dashboard_1, component_heroes_1, component_hero_detail_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (service_hero_1_1) {
                service_hero_1 = service_hero_1_1;
            },
            function (component_dashboard_1_1) {
                component_dashboard_1 = component_dashboard_1_1;
            },
            function (component_heroes_1_1) {
                component_heroes_1 = component_heroes_1_1;
            },
            function (component_hero_detail_1_1) {
                component_hero_detail_1 = component_hero_detail_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<h1>{{title}}</h1>\n\t\t<nav>\n\t\t\t<a [routerLink]=\"['Dashboard']\">Dashboard</a>\n\t\t\t<a [routerLink]=\"['Heroes']\">Heroes</a>\n\t\t</nav>\n\t\t<router-outlet>\n\t",
                        styleUrls: ['app/style/css/app.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            service_hero_1.HeroService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: component_dashboard_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/heroes',
                            name: 'Heroes',
                            component: component_heroes_1.HeroesComponent
                        },
                        {
                            path: '/detail/:id',
                            name: 'HeroDetail',
                            component: component_hero_detail_1.HeroDetailComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=component-app.js.map
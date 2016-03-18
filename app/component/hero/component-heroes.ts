import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from '../../model/hero';
import { HeroService } from '../../service/service-hero';
import { HeroDetailComponent } from './component-hero-detail';

@Component({
	selector: 'my-heroes',
	templateUrl: 'app/view/heroes.html',
	styleUrls: ['app/style/css/heroes.css'],
	directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero;

	constructor(
		private _router: Router,
		private _heroService: HeroService
	) {
	}

	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}

	gotoDetail() {
		this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	}
}

import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Hero } from '../../model/hero';
import { HeroService } from '../../service/service-hero';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/view/hero-detail.html',
	styleUrls: ['app/style/css/hero-detail.css'],
	inputs: ['hero']
})
export class HeroDetailComponent {
	hero: Hero;

	constructor(
		private _heroService: HeroService,
		private _routeParams: RouteParams
	) {
	}

	ngOnInit() {
		let id = Number(this._routeParams.get('id'));
		this._heroService.getHero(id).then(hero => this.hero = hero);
	}

	goBack() {
		window.history.back();
	}
}

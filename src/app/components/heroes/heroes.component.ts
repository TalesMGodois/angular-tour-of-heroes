import { Component, OnInit } from '@angular/core';
import { Hero } from '../../data/hero';
import { HeroService } from '../../service/hero.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];

    constructor(
        private heroService:HeroService 
    ) { }

    public initHeroes():void {
        this.heroService
            .getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.initHeroes();
    }
}

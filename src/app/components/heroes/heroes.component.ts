import { HeroService } from '../service/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../data/hero';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];

    selectedHero:Hero;

    hero:Hero = {
        id:1,
        name:'Windstorm'
    };

    constructor(private heroService:HeroService) { }

    public onSelect(hero:Hero):void{
        this.selectedHero = hero;
    }

    public initHeroes():void {
        this.heroService
            .getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.initHeroes();
    }
}

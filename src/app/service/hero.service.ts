import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Hero } from '../data/hero';
import { HEROES } from '../data/mock-heroes';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor(private messageService:MessageService) { }

    getHeroes():Observable<Hero[]>{
        this.messageService.add('hero service: fetched heroes');
        return of(HEROES);
    }
}

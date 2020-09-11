import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  heroes_ob$: Observable<Hero[]>
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes_ob$ = this.heroService.getHeroes()
    this.getHeroes();
  }
  // 아래와 같이 했을때 장점 코드 줄이 길어지나, 누구나 observable 객체임을 확실하게 인지할 수 있음.
  // 원래는 this.heroService.getHeroes().subscribe 로 적을 수 있음.
  getHeroes(): void { //hero 명단을 받아와서 heroes.component.html 에서 *ngFor 로 돌림
    this.heroes_ob$.subscribe(heroes => this.heroes = heroes,  // 책보고 이렇게 작성해봤는데 더 좋은 코드인지?
               error => console.error(error), 
               () => console.log('complete')
               );
  }
}

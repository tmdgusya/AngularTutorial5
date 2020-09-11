import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContextMenuComponent } from 'ngx-contextmenu'

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, AfterViewInit {
  heroes: Hero[];
  heroes_ob$: Observable<Hero[]>
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;
  test:any;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroes_ob$ = this.heroService.getHeroes()
    this.getHeroes();
  }

  ngAfterViewInit(){
    this.test = this.basicMenu
  }



  // 아래와 같이 했을때 장점 코드 줄이 길어지나, 누구나 observable 객체임을 확실하게 인지할 수 있음.
  // 원래는 this.heroService.getHeroes().subscribe 로 적을 수 있음.
  getHeroes(): void { //hero 명단을 받아와서 heroes.component.html 에서 *ngFor 로 돌림
    this.heroes_ob$.subscribe(heroes => {this.heroes = heroes;
    console.log(heroes)},  // 책보고 이렇게 작성해봤는데 더 좋은 코드인지?
               error => console.error(error), 
               () => console.log('complete')
               );
  }

  addhero(event: any):void {
    console.log(event)
  }

  deletehero(even: any): void{
    console.log(event)
  }
}

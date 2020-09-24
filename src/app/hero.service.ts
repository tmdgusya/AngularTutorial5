import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { IMenuData } from './contextmenu/contextmenu.component'
import { ActivatedRoute } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(
    private route: ActivatedRoute
    ) { }
  setHeroname(id, rename : string) {
    HEROES.find(hero => hero.id === id).name = rename;
  }
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero => hero.id === id));
  }

  makeContext(){ // 메뉴 생성하는 곳
    const menu: IMenuData[] = [
      {title: "영웅 관리", disable: true, action: () => {console.log("영웅 관리")}, 
              menu: [{title: "영웅 추가", disable: true, action: () => {console.log("영웅 추가")}},
                      {title:"영웅 수정", disable: true, action: () => {console.log("영웅 수정")}}]},
      {title: "영웅 보기", disable: false, action: () => {}},
      {title: "영웅 삭제", disable: true, separator: true, action: () => {console.log("영웅 삭제")}}
    ]
    return menu;
  }
  
}

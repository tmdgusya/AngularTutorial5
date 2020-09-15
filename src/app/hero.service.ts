import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { ContextmenuComponent, IMenuData } from './contextmenu/contextmenu.component'

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(
    private messageService: MessageService 
    ) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: 이 메시지는 서버에서 히어로 정보를 가져온 _후에_ 보내야 합니다.
    this.messageService.add('HeroService: fetched heroes'); // heroes 배열을 추가
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: 이 메시지는 서버에서 히어로 정보를 가져온 _후에_ 보내야 합니다.
    // 만약 Error 를 보내고 싶으면 어떻게 해야되는가?
    this.messageService.add(`HeroService: fetched hero id=${id}`); // id 기반으로 찾아주는 함수
    return of(HEROES.find(hero => hero.id === id));
  }

  makeContext(){ // 메뉴 생성하는 곳
    const menu: IMenuData[] = [
      {title: "영웅 관리", disable: true, action: () => {console.log("영웅 관리")}, 
              menu: [{title: "영웅 추가", disable: true, action: () => {console.log("영웅 추가")}},
                      {title:"영웅 수정", disable: true, action: () => {console.log("영웅 수정")}}]},
      {title: "영웅 보기", disable: false, action: () => {console.log("영웅 보기")}},

      {title: "영웅 삭제", disable: true, action: () => {console.log("영웅 삭제")}}
    ]
    return menu;
  }
  
}

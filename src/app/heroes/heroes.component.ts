import { Component, OnInit, ViewChild, AfterViewInit, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ContextMenuComponent ,ContextMenuService } from 'ngx-contextmenu'

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ContextmenuComponent, IMenuData } from '../contextmenu/contextmenu.component'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, AfterViewInit {
  heroes: Hero[];
  treeMenu : IMenuData[] = this.heroService.makeContext(); // 넣은값을 저장하는거
  @ViewChild(ContextmenuComponent) rightclick: ContextmenuComponent;
  @ViewChild('basicMenu') context : ContextMenuComponent
  // @Input() contextMenu: ContextMenuComponent

  constructor(private heroService: HeroService, private contextMenuService: ContextMenuService) {}

  ngOnInit() {
    this.getHeroes();
  }

  ngAfterViewInit(){
    this.context = this.rightclick.contextMenu
  }
  public onContextMenu($event: MouseEvent, item: any): void {
    this.contextMenuService.show.next({
      contextMenu: this.context,
      event: $event,
      item: item
    });
    $event.preventDefault();
    $event.stopPropagation();
  }
  // 아래와 같이 했을때 장점 코드 줄이 길어지나, 누구나 observable 객체임을 확실하게 인지할 수 있음.
  // 원래는 this.heroService.getHeroes().subscribe 로 적을 수 있음.
  getHeroes(): void { //hero 명단을 받아와서 heroes.component.html 에서 *ngFor 로 돌림
    this.heroService.getHeroes().subscribe(heroes => {this.heroes = heroes;
               console.log(heroes)}, 
               error => console.error(error), 
               () => console.log('complete')
               );
  }

}

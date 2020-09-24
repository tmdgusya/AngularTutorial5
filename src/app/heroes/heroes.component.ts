import { Component, OnInit, ViewChild, AfterViewInit, Input, ViewEncapsulation, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs';
import { ContextMenuComponent ,ContextMenuService } from 'ngx-contextmenu'

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { ContextmenuComponent, IMenuData } from '../contextmenu/contextmenu.component'
import { ActivatedRoute } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, AfterViewInit, AfterViewChecked {
  heroes: Hero[];
  treeMenu : IMenuData[];
  id = +this.route.snapshot.paramMap.get('id')
  list : Hero[] = HEROES;
  @ViewChild(ContextmenuComponent) rightclick: ContextmenuComponent;
  // @Input() contextMenu: ContextMenuComponent
  
  constructor(private route: ActivatedRoute,private heroService: HeroService, private contextMenuService: ContextMenuService) {}

  ngOnInit() {
    this.getHeroes();
    this.treeMenu = this.heroService.makeContext();
  }

  ngAfterViewInit(){ 

  }

  ngAfterViewChecked(){
    
  }
  public onContextMenu($event: MouseEvent): void {
    this.contextMenuService.show.next({
      // anchorElement: $event.taget,
      contextMenu: this.rightclick.contextMenu,
      event: $event,
      item: this.id
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

  get_id(){
    this.id;
    return this.id;
  }

  // 지금 heroes 에 붙어있는데 이걸 따로 component 로 옮겨야겠음
  addHero(){ 
    console.log(this.list)
    let id = parseInt((<HTMLInputElement>document.getElementById('id')).value);
    let name = (<HTMLInputElement>document.getElementById('name')).value;
    HEROES.push({id, name}) 
    console.log(id, name);
  }
}

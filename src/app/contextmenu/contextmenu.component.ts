import { Component, OnInit, Input, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ContextMenuComponent} from 'ngx-contextmenu'; 
import { HeroService } from '../hero.service'

@Component({
  selector: 'wins-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContextmenuComponent implements OnInit, AfterViewInit {
  @ViewChild('basicMenu') contextMenu: ContextMenuComponent;
  treeMenu : IMenuData[] = this.heroService.makeContext(); // 넣은값을 저장하는 부분

  constructor(private heroService: HeroService) { }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(){ 
  }

  
}
export interface IMenuData {
  title: string;
  disable?: boolean;
  menu?: IMenuData[];
  command?: string;
  iconSrc?: string;
  action?: (nodeId: string) => void;
}

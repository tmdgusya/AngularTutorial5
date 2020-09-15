import { Component, OnInit, Input, ViewChild, ViewEncapsulation, AfterViewInit, ElementRef, Output} from '@angular/core';
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
  @Input('menus') treeMenu : IMenuData[]; // 해당 Component로 부터 값을 받아오는 부분

  constructor() { }
  
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

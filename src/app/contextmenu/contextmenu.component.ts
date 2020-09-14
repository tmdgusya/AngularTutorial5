import { Component, OnInit, Input, Output, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ContextMenuModule, ContextMenuComponent, ContextMenuService} from 'ngx-contextmenu'; 

@Component({
  selector: 'wins-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContextmenuComponent implements OnInit, AfterViewInit {
  @Input() treeMenu: IMenuData[]; // menu 객체 하나
  @ViewChild('basicMenu') contextMenu: ContextMenuComponent;
  
  // context menu 변수
  title : string;
  disable? : boolean;
  menu?: IMenuData[];
  command?: string;
  iconSrc?: string;
  action?: (nodeId: string) => void;
  // end
  private imenuData: IMenuData;

  constructor(private contextMenuService: ContextMenuService) { }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(){ 
  }

  public onContextMenu($event: MouseEvent, item?: any): void {
    this.contextMenuService.show.next({
      contextMenu: this.contextMenu,
      event: $event,
      item: item
    });
    $event.preventDefault();
    $event.stopPropagation();
  }
  
}
export interface IMenuData {
  title: string;
  disable?: boolean;
  // menu?: IMenuData[];
  command?: string;
  iconSrc?: string;
  action?: (nodeId: string) => void;
}

import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'wins-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.css']
})
export class ContextmenuComponent implements OnInit {
  @Input() treeMenu: IMenuData[]; // menu 객체 하나

  constructor() { }

  ngOnInit(): void {
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
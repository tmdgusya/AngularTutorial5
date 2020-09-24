import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ContextMenuModule} from 'ngx-contextmenu'; 


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

import { AppRoutingModule } from './app-routing.module';
import { ContextmenuComponent } from './contextmenu/contextmenu.component';
import { HeroManageComponent } from './hero-manage/hero-manage.component';

@NgModule({
  imports: [ // 기능 모듈
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ContextMenuModule.forRoot({
      autoFocus: true
    })
  ],
  declarations: [ // 컴포넌트 , 디렉트, 파이프
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    ContextmenuComponent,
    HeroManageComponent
  ],
  bootstrap: [ AppComponent ] // Entry Point 선언 즉, root component로 지정하면됨.
})
export class AppModule { }

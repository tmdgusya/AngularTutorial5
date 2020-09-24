import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ContextmenuComponent } from './contextmenu/contextmenu.component'
import { global_routes } from './routes/global_routers'
import { hero_routers } from './routes/hero_routers'
//사용자의 방문 이력 관리를 위해 angular 는 site Navigation 방식으로 router 를 제공한다.
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //default 싸이트켰을때 접속값 설정
  { path: global_routes.dashboard , component: DashboardComponent },
  { path: hero_routers.heroDetail , component: HeroDetailComponent },
  { path: hero_routers.hero , component: HeroesComponent },
  { path: 'test', component : ContextmenuComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

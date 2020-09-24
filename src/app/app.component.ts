import { Component } from '@angular/core';
import {global_routes} from './routes/global_routers'
import {hero_routers} from './routes/hero_routers'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Welcome to Heroes"
  home = global_routes.dashboard;
  hero = hero_routers.hero;
}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input('do') name : string;
  hero: Hero;
  hello : string = 'hello';
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // +는 숫자형태로 변환
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero, 
                error => console.error(error), 
                () => console.log('completion'));
  }

  goBack(): void {
    this.location.back();
  }

  whevent(a : string){
    console.log(a);
  }

  setName(event){
    let hero_name : string = "";
    
    if(event)
    { 
      if(hero_name.length < 10){
        hero_name.concat(event.data);
        console.log(hero_name);
      }
      else{
        console.log("error");
      }
    }
    console.log(event.data);

  }
}

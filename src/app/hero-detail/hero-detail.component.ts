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
  hero: Hero;
  hero_name = new Array();
  error : string;
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

  reName(){
    const id = +this.route.snapshot.paramMap.get('id'); // +는 숫자형태로 변환
    this.heroService.setHeroname(id, (<HTMLInputElement>document.getElementById('name')).value);
  }
  setName(event){ // 10개로 제한하는 함수 --> 다만 지금 10개 이상 입력은 
    if(event)
    {   
        var x = (<HTMLInputElement>document.getElementById('name')).value; // string
        if(x.length > 10){
          var s = x.substring(0,10);
          (<HTMLInputElement>document.getElementById('name')).value = s;
          console.log(s)
        }
    }
  }

  getName(){
    console.log(this.hero_name);
  }
}

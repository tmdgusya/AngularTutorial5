import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes'
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


  deleteHero() {
    let id = +this.route.snapshot.paramMap.get('id');
    const idx = HEROES.indexOf(HEROES.find(hero => hero.id == id));
    if(idx > -1){
      HEROES.splice(idx, 1);
    }
    if(HEROES.indexOf(HEROES.find(hero => hero.id == id))){
      alert("영웅이 삭제되지 않았습니다.");
    }
    else{
      alert("영웅이 삭제되었습니다.");
      this.location.back();
    }
  }

  setName(event){ // 10개로 제한하는 함수 --> 다만 지금 10개 이상 입력은 
    if(event)
    {   
        let x = (<HTMLInputElement>document.getElementById('name')).value; // string
        if(x.length > 10){
          let s = x.substring(0,10);
          (<HTMLInputElement>document.getElementById('name')).value = s;
        }
    }
  }

  getName(){
    console.log(this.hero_name);
  }
}

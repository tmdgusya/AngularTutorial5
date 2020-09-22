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

  setName(event){
    if(event)
    { 
      if(this.hero_name.length < 10){
        this.hero_name.push(event.data);
        console.log(this.hero_name);
      }
      else{
        this.error = "error";
        console.log("error");
      }
    }
    console.log(event.data);
  }

  getName(){
    console.log(this.hero_name);
  }
}

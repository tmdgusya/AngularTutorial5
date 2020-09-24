import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-manage',
  templateUrl: './hero-manage.component.html',
  styleUrls: ['./hero-manage.component.scss']
})
export class HeroManageComponent implements OnInit {
  list : Hero[] = HEROES;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  addHero(){ 
    console.log(this.list)
    let id = parseInt((<HTMLInputElement>document.getElementById('id')).value);
    let name = (<HTMLInputElement>document.getElementById('name')).value;
    if(HEROES.find(hero => hero.id == id)){
      alert("id값이 유효하지 않습니다.")
      return;
    }
    else{
      HEROES.push({id, name}); 
      console.log(id, name);
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
}

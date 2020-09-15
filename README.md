ngx-contextmenu library Description
====================================

# Ref Document

<https://github.com/isaacplmann/ngx-contextmenu>

# install 

<pre>
    npm install --save typescript
    npm install --save typescript@next
    npm install --save @angular/cli
    npm install --save @angular/core
    npm install --save tslib
    npm install --save ngx-contextmenu
    npm install --save @angular-devkit/build-angular
    npm install --save angular2-contextmenu
</pre>

# import AppModule
<pre>
    import { ContextMenuModule} from 'ngx-contextmenu'; 
</pre>

# import component
<pre>
    import { ContextMenuComponent } from 'ngx-contextmenu'
</pre>

# template selector
<pre>
    <ng-template contextMenuItem (excute) = "addHero('영웅을 추가합니다')">영웅 추가</ng-template>
</pre>

# subMenu
* *후에 component 라이브러리 어댑터에서 for문을 통해서도 구현 가능하도록 해야함*
* basicMenu 는 ts 에서 정의한 context의 basicMenu 를 뜻함 다른 메뉴를 또만들고싶으면 otherMenu 객체 생성후 똑같이 하면됨

* ~~[subMenu] = "Sub Menu name" 으로 설정한뒤 Submenu 의 context menu 묶음에 #Sub Menu name 으로 선언하여 해당 템플릿의 서브메뉴임을 알려준다.~~
* IMenuData 내의 menu 에 : IMenuData[] 로 정의해주면 된다. 자동으로 구현됨



# Design pre
* *아래 조건들을 반드시 ts에 적어줘야지만* css에 적은 파일들이 적용됨
<pre>
    import { ViewEncapsulation } from '@angular/core';

    @Component({
    encapsulation: ViewEncapsulation.None
    )}   
</pre>

# CSS

/*context-menu css*/
<pre>
.ngx-contextmenu .dropdown-menu {
  border: solid 1px blue; /*테두리 색*/
  background-color: white; /*배경 색*/
  padding: 0;
}
.ngx-contextmenu li {
  display: block;
  border-top: solid 1px blue; /*구분선 색*/
  text-transform: uppercase;
  text-align: center;
}
.ngx-contextmenu li:first-child {
  border-top:none;
}
.ngx-contextmenu a {
  color: black; /*글자색*/
  display: block;
  padding: 0.5em 1em;
}
.ngx-contextmenu a:hover { /*마우스가 올라갔을때*/
  color:rgb; 
  background-color:rgb(221,221,221);
}
</pre>

# contextMenu Property

* title = menu의 이름을 나타낸다
* menu = IMenuData 클래스를 넣어주며 submenu로서 작동할 수 있도록 한다 *(아마 depth 가 2 여서 submenu title 정도로 따로 구현해 보는것이 좋을듯?)* 
* visible = true : false 값에 따라 보이고 안보이고를 정하는 속성
* enabled = true : false 기능이 작동하도록 / 안하도록 설정
* action = 해당 메뉴 클릭시 작동할 함수 설정
* icornSrc = 해당 icon을 지정할 path를 값으로 주어야함 *(해당 기능은 ngx-contextmenu 에서 확인하지 못한 사항)*

<pre>
  contextMenuItem [visible]="true" [enabled] = "menu.disable"
</pre>

# 오류 고친 목록

* 09/11 Event 함수로 누를때마다 context-menu 를 작업시켜 list가 완벽하게 로드되고 사용될수 있도록 함.
* 09/12 [disabled] 버그 수정완료
* 09/13 CSS 파일 추가 및 SubMenu 구현
* 09/14 Contextmenu 컴포넌트를 통하여 IMenuData 클래스 형식에 맞춰 값을 넣은 뒤 대입하면 작동함
* 09/14 SubMenu 메뉴 배열 넣으면 자동 구현하도록 변환함

# 개선할점

* ~~후에 context-menu를 따로 ng generate component contextmenu 로 해서 옮겨 보는 작업해보면 좋을듯~~
* 아직 기본지식이 부족해서 옮기는 과정은 js나 html을 조금 더 사용해봐야할듯 함
* enable = false 일시 배경화면을 회색으로 하거나 사용자가 편히 볼 수 있도록 하는 것을 추가하면 좋을거 같음
* ~~context-menu 의 템플릿을 쓰고도 가능하도록 구현하여야 함.~~
* 대부분의 메뉴가 depth 가 2정도 이므로 submenu를 간단하게라도 구현할 방법을 찾아볼 것.
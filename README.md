ngx-contextmenu Module Description
====================================
# Ref Document

<https://github.com/isaacplmann/ngx-contextmenu>

# install
<pre>
    sudo npm install --save ngx-contextmenu
    sudo npm intsall --save @angular/cdk
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
<pre>
<div class = "ngx-contextmenu">
  <context-menu #adding class = "dropdown-menu">
    <ng-template  contextMenuItem  (excute) = "addHero('영웅을 추가합니다')">영웅 추가</ng-template>
    <context-menu >
      <ng-template [subMenu]="adding" contextMenuItem>영웅 관리</ng-template>
      <ng-template contextMenuItem>메인메뉴 2</ng-template>
      <ng-template contextMenuItem>메인메뉴 3</ng-template>
    </context-menu>
    <ng-template contextMenuItem (excute) = "deleteHero('영웅을 삭제합니다.')">영웅 삭제</ng-template>
  </context-menu>
</div>
</pre>



# 오류 고친 목록

* 09/11 Event 함수로 누를때마다 context-menu 를 작업시켜 list가 완벽하게 로드되고 사용될수 있도록 함.

# 개선할점

* 후에 context-menu를 따로 ng generate component contextmenu 로 해서 옮겨 보는 작업해보면 좋을듯
* 아직 기본지식이 부족해서 옮기는 과정은 js나 html을 조금 더 사용해봐야할듯 함

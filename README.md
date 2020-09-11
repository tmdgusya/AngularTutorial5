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

# 오류 고친 목록

* 09/11 Event 함수로 누를때마다 context-menu 를 작업시켜 list가 완벽하게 로드되고 사용될수 있도록 함.

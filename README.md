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



<div id="llibres-app" ng-controller="llibresController">
  <div class="llibre" ng-repeat="llibre in llibres">
    <h2>{{llibre.node.title}}</h2>  
  </div>
</div>
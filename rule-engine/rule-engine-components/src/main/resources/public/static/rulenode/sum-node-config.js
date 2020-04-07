angular.module('thingsboard.ruleChain.config.enrichment', [])
.directive('tbEnrichmentNodeGetTelemetryAndSum', function() {
  return {
    restrict: 'E',
    require: "^ngModel",
    template: 
    "<section layout=column> <md-input-container style=padding-bottom:15px><input ng-model=configuration.outputKey ng-required=true aria-label={{tb.rulenode.testInput}}><label translate>{{tb.rulenode.testInput}}</label></md-input-container></section>"
  };
});
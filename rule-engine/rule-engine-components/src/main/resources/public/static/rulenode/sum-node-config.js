angular.module('thingsboard.ruleChain.config.enrichment', [])
.controller('Controller', ['$scope', function($scope) {
  $scope.configuration = {
    outputKey: 'ConsumptionSum'
  };
  $scope.tb = {
    rulenode: {
      "test-input": "Test input"
  }
  }
}])
.directive('tbEnrichmentNodeGetTelemetryAndSum', function() {
  console.log("123");
  return {
    restrict: 'E',
    template: 
    '<section layout=column> <md-input-container style=padding-bottom:15px>' +
    '<input ng-model=configuration.outputKey placeholder="{{\'tb.rulenode.test-input\'}}" ng-required=true>' +
    '</md-input-container>' +
    '</section>'
  };
});
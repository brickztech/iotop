/*
 * Copyright © 2016-2020 The Thingsboard Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable import/no-unresolved, import/default */

import iframeWidgetTemplate from './iframe-widget.tpl.html';

/* eslint-enable import/no-unresolved, import/default */

export default angular.module('thingsboard.widgets.iframeWidget', [])
    .directive('tbIframeWidget', IFrameWidget)
    .name;

/*@ngInject*/
function IFrameWidget() {
    return {
        restrict: "E",
        scope: true,
        bindToController: {
            frameId: '=',
            ctx: '='
        },
        controller: IFrameWidgetController,
        controllerAs: 'vm',
        templateUrl: iframeWidgetTemplate
    };
}

/*@ngInject*/
function IFrameWidgetController($scope, $sce) {
    var vm = this;
    vm.frameSrc = "";

    $scope.$watch('vm.ctx', function() {
        if (vm.ctx) {
            vm.frameSrc = $sce.trustAsResourceUrl(vm.ctx.settings.frameSrc);
        }
    });

}

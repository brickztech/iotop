! function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var a = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "/static/", t(0)
}(function(e) {
    for (var t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) switch (typeof e[t]) {
            case "function":
                break;
            case "object":
                e[t] = function(t) {
                    var n = t.slice(1),
                        i = e[t[0]];
                    return function(e, t, a) {
                        i.apply(this, [e, t, a].concat(n))
                    }
                }(e[t]);
                break;
            default:
                e[t] = e[e[t]]
        }
    return e
}([function(e, t, n) {
    e.exports = n(101)
}, function(e, t) {}, 1, 1, 1, 1, function(e, t) {
    e.exports = " <section ng-form name=assignCustomerConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.customer-name-pattern</label> <input ng-required=true name=customerNamePattern ng-model=configuration.customerNamePattern> <div ng-messages=assignCustomerConfigForm.customerNamePattern.$error> <div ng-message=required translate>tb.rulenode.customer-name-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.customer-name-pattern-hint</div> </md-input-container> <md-checkbox aria-label=\"{{ 'tb.rulenode.create-group-if-not-exists' | translate }}\" ng-model=configuration.createCustomerIfNotExists>{{ 'tb.rulenode.create-customer-if-not-exists' | translate }} </md-checkbox> <md-input-container class=md-block> <label translate>tb.rulenode.customer-cache-expiration</label> <input type=number step=1 min=0 ng-required=true name=customerCacheExpiration ng-model=configuration.customerCacheExpiration> <div ng-messages=assignCustomerConfigForm.customerCacheExpiration.$error> <div translate ng-message=required>tb.rulenode.customer-cache-expiration-required</div> <div translate ng-message=min>tb.rulenode.customer-cache-expiration-range</div> </div> <div class=tb-hint translate>tb.rulenode.customer-cache-expiration-hint</div> </md-input-container> </section> "
}, function(e, t) {
    e.exports = ' <section ng-form name=attributesConfigForm layout=column> <md-input-container class=md-block> <label translate>attribute.attributes-scope</label> <md-select ng-model=configuration.scope ng-disabled=$root.loading> <md-option ng-repeat="scope in types.attributesScope" ng-value=scope.value> {{scope.name | translate}} </md-option> </md-select> </md-input-container> </section> '
}, function(e, t) {
    e.exports = " <section class=tb-alarm-config ng-form name=alarmConfigForm layout=column> <label translate class=\"tb-title no-padding\">tb.rulenode.alarm-details-builder</label> <tb-js-func ng-model=configuration.alarmDetailsBuildJs function-name=Details function-args=\"{{ ['msg', 'metadata', 'msgType'] }}\" no-validate=true> </tb-js-func> <div layout=row style=padding-bottom:15px> <md-button ng-click=testDetailsBuildJs($event) class=\"md-primary md-raised\"> {{ 'tb.rulenode.test-details-function' | translate }} </md-button> </div> <md-input-container class=md-block> <label translate>tb.rulenode.alarm-type</label> <input ng-required=true name=alarmType ng-model=configuration.alarmType> <div ng-messages=alarmConfigForm.alarmType.$error> <div ng-message=required translate>tb.rulenode.alarm-type-required</div> </div> <div class=tb-hint translate>tb.rulenode.entity-type-pattern-hint</div> </md-input-container> </section> "
}, function(e, t) {
    e.exports = " <section class=tb-alarm-config ng-form name=alarmConfigForm layout=column> <label translate class=\"tb-title no-padding\">tb.rulenode.alarm-details-builder</label> <tb-js-func ng-model=configuration.alarmDetailsBuildJs function-name=Details function-args=\"{{ ['msg', 'metadata', 'msgType'] }}\" no-validate=true> </tb-js-func> <div layout=row style=padding-bottom:15px> <md-button ng-click=testDetailsBuildJs($event) class=\"md-primary md-raised\"> {{ 'tb.rulenode.test-details-function' | translate }} </md-button> </div> <md-checkbox aria-label=\"{{ 'tb.rulenode.use-metadata-interval-patterns' | translate }}\" ng-model=configuration.useMessageAlarmData>{{ 'tb.rulenode.use-message-alarm-data' | translate }} </md-checkbox> <section layout=column layout-gt-sm=row ng-if=!configuration.useMessageAlarmData> <md-input-container flex class=md-block> <label translate>tb.rulenode.alarm-type</label> <input ng-required=true name=alarmType ng-model=configuration.alarmType> <div ng-messages=alarmConfigForm.alarmType.$error> <div ng-message=required translate>tb.rulenode.alarm-type-required</div> </div> <div class=tb-hint translate>tb.rulenode.entity-type-pattern-hint</div> </md-input-container> <md-input-container flex class=md-block> <label translate>tb.rulenode.alarm-severity</label> <md-select required name=severity ng-model=configuration.severity> <md-option ng-repeat=\"(severityKey, severity) in types.alarmSeverity\" ng-value=severityKey> {{ severity.name | translate}} </md-option> </md-select> <div ng-messages=alarmConfigForm.severity.$error> <div ng-message=required translate>tb.rulenode.alarm-severity-required</div> </div> </md-input-container> </section> <section layout=column ng-if=!configuration.useMessageAlarmData> <md-checkbox aria-label=\"{{ 'tb.rulenode.propagate' | translate }}\" ng-model=configuration.propagate>{{ 'tb.rulenode.propagate' | translate }} </md-checkbox> <div ng-if=configuration.propagate> <label translate class=\"tb-title no-padding\">tb.rulenode.relation-types-list</label> <md-chips ng-required=false readonly=readonly ng-model=configuration.relationTypes placeholder=\"{{'tb.rulenode.relation-types-list' | translate}}\" md-separator-keys=separatorKeys> </md-chips> </div> <div class=tb-hint style=padding-top:2px ng-if=configuration.propagate translate>tb.rulenode.relation-types-list-hint</div> </section> </section> "
}, function(e, t) {
    e.exports = " <section ng-form name=createRelationConfigForm layout=column style=min-width:650px> <md-input-container class=md-block style=min-width:100px> <label translate>relation.direction</label> <md-select required ng-model=configuration.direction> <md-option ng-repeat=\"direction in types.entitySearchDirection\" ng-value=direction> {{ ('relation.search-direction.' + direction) | translate}} </md-option> </md-select> </md-input-container> <div layout=row class=tb-entity-select> <md-input-container class=md-block> <tb-entity-type-select style=min-width:100px the-form=createRelationConfigForm tb-required=true ng-model=configuration.entityType> </tb-entity-type-select> </md-input-container> <md-input-container class=md-block flex ng-if=configuration.entityType style=margin-top:38px> <label translate>tb.rulenode.entity-name-pattern</label> <input ng-required=true name=entityNamePattern ng-model=configuration.entityNamePattern> <div ng-messages=createRelationConfigForm.entityNamePattern.$error> <div ng-message=required translate>tb.rulenode.entity-name-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.entity-name-pattern-hint</div> </md-input-container> <md-input-container class=md-block flex ng-if=\"configuration.entityType  == 'DEVICE' || configuration.entityType  == 'ASSET'\" style=margin-top:38px> <label translate>tb.rulenode.entity-type-pattern</label> <input ng-required=true name=entityTypePattern ng-model=configuration.entityTypePattern> <div ng-messages=createRelationConfigForm.entityTypePattern.$error> <div ng-message=required translate>tb.rulenode.entity-type-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.entity-type-pattern-hint</div> </md-input-container> </div> <md-input-container class=md-block flex style=margin-top:0> <label translate>tb.rulenode.relation-type-pattern</label> <input ng-required=true name=relationType ng-model=configuration.relationType> <div ng-messages=createRelationConfigForm.relationType.$error> <div ng-message=required translate>tb.rulenode.relation-type-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.relation-type-pattern-hint</div> </md-input-container> <md-checkbox flex ng-if=\"configuration.entityType  == 'CUSTOMER' || configuration.entityType  == 'ASSET' || configuration.entityType  == 'DEVICE'\" aria-label=\"{{ 'tb.rulenode.create-entity-if-not-exists' | translate }}\" ng-model=configuration.createEntityIfNotExists>{{ 'tb.rulenode.create-entity-if-not-exists' | translate }} </md-checkbox> <div class=tb-hint ng-if=\"configuration.entityType  == 'CUSTOMER' || configuration.entityType  == 'ASSET' || configuration.entityType  == 'DEVICE'\" translate>tb.rulenode.create-entity-if-not-exists-hint</div> <md-checkbox flex aria-label=\"{{ 'tb.rulenode.remove-current-relations' | translate }}\" ng-model=configuration.removeCurrentRelations>{{ 'tb.rulenode.remove-current-relations' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.remove-current-relations-hint</div> <md-checkbox flex aria-label=\"{{ 'tb.rulenode.change-originator-to-related-entity' | translate }}\" ng-model=configuration.changeOriginatorToRelatedEntity>{{ 'tb.rulenode.change-originator-to-related-entity' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.change-originator-to-related-entity-hint</div> <md-input-container class=md-block> <label translate>tb.rulenode.entity-cache-expiration</label> <input type=number step=1 min=0 ng-required=true name=entityCacheExpiration ng-model=configuration.entityCacheExpiration> <div ng-messages=createRelationConfigForm.entityCacheExpiration.$error> <div translate ng-message=required>tb.rulenode.entity-cache-expiration-required</div> <div translate ng-message=min>tb.rulenode.entity-cache-expiration-range</div> </div> <div class=tb-hint translate>tb.rulenode.entity-cache-expiration-hint</div> </md-input-container> </section> "
}, function(e, t) {
    e.exports = " <section ng-form name=deleteRelationConfigForm layout=column> <md-checkbox aria-label=\"{{ 'tb.rulenode.delete-relation-to-specific-entity' | translate }}\" ng-model=configuration.deleteForSingleEntity> {{ 'tb.rulenode.delete-relation-to-specific-entity' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.delete-relation-hint</div> <md-input-container class=md-block style=min-width:100px;margin-bottom:38px> <label translate>relation.direction</label> <md-select required ng-model=configuration.direction> <md-option ng-repeat=\"direction in types.entitySearchDirection\" ng-value=direction> {{ ('relation.search-direction.' + direction) | translate}} </md-option> </md-select> </md-input-container> <div layout=row class=tb-entity-select ng-if=configuration.deleteForSingleEntity> <md-input-container class=md-block> <tb-entity-type-select style=min-width:100px the-form=deleteRelationConfigForm tb-required=true ng-model=configuration.entityType> </tb-entity-type-select> </md-input-container> <md-input-container class=md-block flex ng-if=configuration.entityType style=margin-top:38px> <label translate>tb.rulenode.entity-name-pattern</label> <input ng-required=true name=entityNamePattern ng-model=configuration.entityNamePattern> <div ng-messages=deleteRelationConfigForm.entityNamePattern.$error> <div ng-message=required translate>tb.rulenode.entity-name-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.entity-name-pattern-hint</div> </md-input-container> </div> <md-input-container class=md-block flex> <label translate>tb.rulenode.relation-type-pattern</label> <input ng-required=true name=relationType ng-model=configuration.relationType> <div ng-messages=createRelationConfigForm.relationType.$error> <div ng-message=required translate>tb.rulenode.relation-type-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.relation-type-pattern-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.entity-cache-expiration</label> <input type=number step=1 min=0 ng-required=true name=entityCacheExpiration ng-model=configuration.entityCacheExpiration> <div ng-messages=deleteRelationConfigForm.entityCacheExpiration.$error> <div translate ng-message=required>tb.rulenode.entity-cache-expiration-required</div> <div translate ng-message=min>tb.rulenode.entity-cache-expiration-range</div> </div> <div class=tb-hint translate>tb.rulenode.entity-cache-expiration-hint</div> </md-input-container> </section> "
}, function(e, t) {
    e.exports = " <section class=tb-generator-config ng-form name=generatorConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.message-count</label> <input ng-required=true type=number step=1 name=messageCount ng-model=configuration.msgCount min=0> <div ng-messages=generatorConfigForm.messageCount.$error multiple=multiple md-auto-hide=false> <div ng-message=required translate>tb.rulenode.message-count-required</div> <div ng-message=min translate>tb.rulenode.min-message-count-message</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.period-seconds</label> <input ng-required=true type=number step=1 name=periodInSeconds ng-model=configuration.periodInSeconds min=1> <div ng-messages=generatorConfigForm.periodInSeconds.$error multiple=multiple md-auto-hide=false> <div ng-message=required translate>tb.rulenode.period-seconds-required</div> <div ng-message=min translate>tb.rulenode.min-period-seconds-message</div> </div> </md-input-container> <div layout=column> <label class=tb-small>{{ 'tb.rulenode.originator' | translate }}</label> <tb-entity-select the-form=generatorConfigForm tb-required=false ng-model=originator> </tb-entity-select> </div> <label translate class=\"tb-title no-padding\">tb.rulenode.generate</label> <tb-js-func ng-model=configuration.jsScript function-name=Generate function-args=\"{{ ['prevMsg', 'prevMetadata', 'prevMsgType'] }}\" no-validate=true> </tb-js-func> <div layout=row> <md-button ng-click=testScript($event) class=\"md-primary md-raised\"> {{ 'tb.rulenode.test-generator-function' | translate }} </md-button> </div> </section> "
}, function(e, t) {
    e.exports = ' <section ng-form name=geoActionConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.latitude-key-name</label> <input ng-required=true name=latitudeKeyName ng-model=configuration.latitudeKeyName> <div ng-messages=geoActionConfigForm.latitudeKeyName.$error> <div ng-message=required translate>tb.rulenode.latitude-key-name-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.longitude-key-name</label> <input ng-required=true name=longitudeKeyName ng-model=configuration.longitudeKeyName> <div ng-messages=geoActionConfigForm.longitudeKeyName.$error> <div ng-message=required translate>tb.rulenode.longitude-key-name-required</div> </div> </md-input-container> <md-checkbox flex aria-label="{{ \'tb.rulenode.fetch-perimeter-info-from-message-metadata\' | translate }}" ng-model=configuration.fetchPerimeterInfoFromMessageMetadata>{{ \'tb.rulenode.fetch-perimeter-info-from-message-metadata\' | translate }} </md-checkbox> <div layout=row class=tb-entity-select ng-if="configuration.fetchPerimeterInfoFromMessageMetadata === false"> <md-input-container class=md-block flex=100> <label translate>tb.rulenode.perimeter-type</label> <md-select required ng-model=configuration.perimeterType flex> <md-option ng-repeat="type in ruleNodeTypes.perimeterType" ng-value=type.value> {{ type.name | translate}} </md-option> </md-select> </md-input-container> </div> <div layout=row layout-wrap ng-if="configuration.perimeterType===ruleNodeTypes.perimeterType.CIRCLE.value && configuration.fetchPerimeterInfoFromMessageMetadata === false"> <div layout=column flex=50> <md-input-container class=md-block flex layout=column style=margin-top:44px> <label translate>tb.rulenode.circle-center-latitude</label> <input type=number min=-90 max=90 step=0.1 ng-required=true name=centerLatitude ng-model=configuration.centerLatitude> <div ng-messages=geoActionConfigForm.centerLatitude.$error> <div ng-message=required translate>tb.rulenode.circle-center-latitude-required</div> </div> </md-input-container> </div> <div layout=column flex=50> <md-input-container class=md-block flex style=margin-top:44px> <label translate>tb.rulenode.circle-center-longitude</label> <input type=number min=-180 max=180 step=0.1 ng-required=true name=centerLongitude ng-model=configuration.centerLongitude> <div ng-messages=geoActionConfigForm.centerLongitude.$error> <div ng-message=required translate>tb.rulenode.circle-center-longitude-required</div> </div> </md-input-container> </div> <div layout=column flex=50> <md-input-container class=md-block style=margin-top:28px> <label translate>tb.rulenode.range</label> <input type=number min=0 step=0.1 ng-required=true name=range ng-model=configuration.range> <div ng-messages=geoActionConfigForm.range.$error> <div ng-message=required translate>tb.rulenode.range-required</div> </div> </md-input-container> </div> <div layout=column flex=50> <md-input-container class=md-block style=margin-top:28px> <label translate>tb.rulenode.range-units</label> <md-select required ng-model=configuration.rangeUnit> <md-option ng-repeat="type in ruleNodeTypes.rangeUnit" ng-value=type.value> {{ type.name | translate}} </md-option> </md-select> </md-input-container> </div> </div> <div layout=row layout-wrap ng-if="configuration.perimeterType===ruleNodeTypes.perimeterType.POLYGON.value && configuration.fetchPerimeterInfoFromMessageMetadata === false"> <div layout=column flex=100> <md-input-container class=md-block style=margin-top:44px> <label translate>tb.rulenode.polygon-definition</label> <input ng-required=true name=polygonsDefinition ng-model=configuration.polygonsDefinition> <div ng-messages=geoActionConfigForm.polygonsDefinition.$error> <div ng-message=required translate>tb.rulenode.polygon-definition-required</div> </div> <div class=tb-hint style=margin-top:5px translate>tb.rulenode.polygon-definition-hint</div> </md-input-container> </div> </div> <div layout=column layout-gt-sm=row> <md-input-container flex class="md-block tb-time-value" flex> <label translate class="tb-title no-padding">tb.rulenode.min-inside-duration</label> <input required type=number step=1 min=1 max=2147483647 name=minInsideDuration ng-model=configuration.minInsideDuration> <div ng-messages=geoActionConfigForm.minInsideDuration.$error> <div translate ng-message=required>tb.rulenode.min-inside-duration-value-required</div> <div ng-message=min translate>tb.rulenode.time-value-range</div> <div ng-message=max translate>tb.rulenode.time-value-range</div> </div> </md-input-container> <md-input-container flex class="md-block tb-time-unit" flex> <label translate class="tb-title no-padding">tb.rulenode.min-inside-duration-time-unit</label> <md-select required name=minInsideDurationTimeUnit aria-label="{{ \'tb.rulenode.min-inside-duration-time-unit\' | translate }}" ng-model=configuration.minInsideDurationTimeUnit> <md-option ng-repeat="timeUnit in ruleNodeTypes.timeUnit" ng-value=timeUnit.value> {{timeUnit.name | translate}} </md-option> </md-select> </md-input-container> </div> <div layout=column layout-gt-sm=row> <md-input-container flex class="md-block tb-time-value" flex> <label translate class="tb-title no-padding">tb.rulenode.min-outside-duration</label> <input required type=number step=1 min=1 max=2147483647 name=minOutsideDuration ng-model=configuration.minOutsideDuration> <div ng-messages=geoActionConfigForm.minOutsideDuration.$error> <div translate ng-message=required>tb.rulenode.min-outside-duration-value-required</div> <div ng-message=min translate>tb.rulenode.time-value-range</div> <div ng-message=max translate>tb.rulenode.time-value-range</div> </div> </md-input-container> <md-input-container flex class="md-block tb-time-unit" flex> <label translate class="tb-title no-padding">tb.rulenode.min-outside-duration-time-unit</label> <md-select required name=minOutsideDurationTimeUnit aria-label="{{ \'tb.rulenode.min-outside-duration-time-unit\' | translate }}" ng-model=configuration.minOutsideDurationTimeUnit> <md-option ng-repeat="timeUnit in ruleNodeTypes.timeUnit" ng-value=timeUnit.value> {{timeUnit.name | translate}} </md-option> </md-select> </md-input-container> </div> </section> '
}, function(e, t) {
    e.exports = ' <section ng-form name=kafkaConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.topic-pattern</label> <input ng-required=true name=topicPattern ng-model=configuration.topicPattern> <div ng-messages=kafkaConfigForm.topicPattern.$error> <div ng-message=required translate>tb.rulenode.topic-pattern-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.bootstrap-servers</label> <input ng-required=true name=bootstrapServers ng-model=configuration.bootstrapServers> <div ng-messages=kafkaConfigForm.bootstrapServers.$error> <div ng-message=required translate>tb.rulenode.bootstrap-servers-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.retries</label> <input type=number step=1 name=retries ng-model=configuration.retries min=0> <div ng-messages=kafkaConfigForm.retries.$error> <div ng-message=min translate>tb.rulenode.min-retries-message</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.batch-size-bytes</label> <input type=number step=1 name=batchSize ng-model=configuration.batchSize min=0> <div ng-messages=kafkaConfigForm.batchSize.$error> <div ng-message=min translate>tb.rulenode.min-batch-size-bytes-message</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.linger-ms</label> <input type=number step=1 name=linger ng-model=configuration.linger min=0> <div ng-messages=kafkaConfigForm.linger.$error> <div ng-message=min translate>tb.rulenode.min-linger-ms-message</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.buffer-memory-bytes</label> <input type=number step=1 name=bufferMemory ng-model=configuration.bufferMemory min=0> <div ng-messages=kafkaConfigForm.bufferMemory.$error> <div ng-message=min translate>tb.rulenode.min-buffer-memory-bytes-message</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.acks</label> <md-select ng-model=configuration.acks ng-disabled=$root.loading> <md-option ng-repeat="ackValue in ackValues" ng-value=ackValue> {{ ackValue }} </md-option> </md-select> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.key-serializer</label> <input ng-required=true name=keySerializer ng-model=configuration.keySerializer> <div ng-messages=kafkaConfigForm.keySerializer.$error> <div ng-message=required translate>tb.rulenode.key-serializer-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.value-serializer</label> <input ng-required=true name=valueSerializer ng-model=configuration.valueSerializer> <div ng-messages=kafkaConfigForm.valueSerializer.$error> <div ng-message=required translate>tb.rulenode.value-serializer-required</div> </div> </md-input-container> <label translate class=tb-title>tb.rulenode.other-properties</label> <tb-kv-map-config ng-model=configuration.otherProperties ng-required=false key-text="\'tb.rulenode.key\'" key-required-text="\'tb.rulenode.key-required\'" val-text="\'tb.rulenode.value\'" val-required-text="\'tb.rulenode.value-required\'"> </tb-kv-map-config> </section> '
}, function(e, t) {
    e.exports = " <section layout=column> <label translate class=\"tb-title no-padding\">tb.rulenode.to-string</label> <tb-js-func ng-model=configuration.jsScript function-name=ToString function-args=\"{{ ['msg', 'metadata', 'msgType'] }}\" no-validate=true> </tb-js-func> <div layout=row> <md-button ng-click=testScript($event) class=\"md-primary md-raised\"> {{ 'tb.rulenode.test-to-string-function' | translate }} </md-button> </div> </section> "
}, function(e, t) {
    e.exports = ' <section class=tb-mqtt-config ng-form name=mqttConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.topic-pattern</label> <input ng-required=true name=topicPattern ng-model=configuration.topicPattern> <div ng-messages=mqttConfigForm.topicPattern.$error> <div translate ng-message=required>tb.rulenode.topic-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.mqtt-topic-pattern-hint</div> </md-input-container> <div flex layout=column layout-gt-sm=row> <md-input-container flex=60 class=md-block> <label translate>tb.rulenode.host</label> <input ng-required=true name=host ng-model=configuration.host> <div ng-messages=mqttConfigForm.host.$error> <div translate ng-message=required>tb.rulenode.host-required</div> </div> </md-input-container> <md-input-container flex=40 class=md-block> <label translate>tb.rulenode.port</label> <input type=number step=1 min=1 max=65535 ng-required=true name=port ng-model=configuration.port> <div ng-messages=mqttConfigForm.port.$error> <div translate ng-message=required>tb.rulenode.port-required</div> <div translate ng-message=min>tb.rulenode.port-range</div> <div translate ng-message=max>tb.rulenode.port-range</div> </div> </md-input-container> <md-input-container flex=40 class=md-block> <label translate>tb.rulenode.connect-timeout</label> <input type=number step=1 min=1 max=200 ng-required=true name=connectTimeoutSec ng-model=configuration.connectTimeoutSec> <div ng-messages=mqttConfigForm.connectTimeoutSec.$error> <div translate ng-message=required>tb.rulenode.connect-timeout-required</div> <div translate ng-message=min>tb.rulenode.connect-timeout-range</div> <div translate ng-message=max>tb.rulenode.connect-timeout-range</div> </div> </md-input-container> </div> <md-input-container class=md-block> <label translate>tb.rulenode.client-id</label> <input name=clientId ng-model=configuration.clientId> </md-input-container> <md-checkbox ng-disabled="$root.loading || readonly" aria-label="{{ \'tb.rulenode.clean-session\' | translate }}" ng-model=configuration.cleanSession> {{ \'tb.rulenode.clean-session\' | translate }} </md-checkbox> <md-checkbox ng-disabled="$root.loading || readonly" aria-label="{{ \'tb.rulenode.enable-ssl\' | translate }}" ng-model=configuration.ssl> {{ \'tb.rulenode.enable-ssl\' | translate }} </md-checkbox> <md-expansion-panel-group class=tb-credentials-panel-group ng-class="{\'disabled\': $root.loading || readonly}" md-component-id=credentialsPanelGroup> <md-expansion-panel md-component-id=credentialsPanel> <md-expansion-panel-collapsed> <div class=tb-panel-title>{{ \'tb.rulenode.credentials\' | translate }}</div> <div class=tb-panel-prompt>{{ ruleNodeTypes.mqttCredentialTypes[configuration.credentials.type].name | translate }}</div> <span flex></span> <md-expansion-panel-icon></md-expansion-panel-icon> </md-expansion-panel-collapsed> <md-expansion-panel-expanded> <md-expansion-panel-header ng-click="$mdExpansionPanel(\'credentialsPanel\').collapse()"> <div class=tb-panel-title>{{ \'tb.rulenode.credentials\' | translate }}</div> <div class=tb-panel-prompt>{{ ruleNodeTypes.mqttCredentialTypes[configuration.credentials.type].name | translate }}</div> <span flex></span> <md-expansion-panel-icon></md-expansion-panel-icon> </md-expansion-panel-header> <md-expansion-panel-content> <div layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.credentials-type</label> <md-select ng-required=true name=credentialsType ng-model=configuration.credentials.type ng-disabled="$root.loading || readonly" ng-change=credentialsTypeChanged()> <md-option ng-repeat="(credentialsType, credentialsValue) in ruleNodeTypes.mqttCredentialTypes" ng-value=credentialsValue.value> {{credentialsValue.name | translate}} </md-option> </md-select> <div ng-messages=mqttConfigForm.credentialsType.$error> <div translate ng-message=required>tb.rulenode.credentials-type-required</div> </div> </md-input-container> <section flex layout=column ng-if="configuration.credentials.type == ruleNodeTypes.mqttCredentialTypes.basic.value"> <md-input-container class=md-block> <label translate>tb.rulenode.username</label> <input ng-required=true name=mqttUsername ng-model=configuration.credentials.username> <div ng-messages=mqttConfigForm.mqttUsername.$error> <div translate ng-message=required>tb.rulenode.username-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.password</label> <input type=password ng-required=true name=mqttPassword ng-model=configuration.credentials.password> <div ng-messages=mqttConfigForm.mqttPassword.$error> <div translate ng-message=required>tb.rulenode.password-required</div> </div> </md-input-container> </section> <section flex layout=column ng-if="configuration.credentials.type == ruleNodeTypes.mqttCredentialTypes[\'cert.PEM\'].value" class=dropdown-section> <div class=tb-container ng-class="configuration.credentials.caCertFileName ? \'ng-valid\' : \'ng-invalid\'"> <label class=tb-label translate>tb.rulenode.ca-cert</label> <div flow-init={singleFile:true} flow-file-added="certFileAdded($file, \'caCert\')" class=tb-file-select-container> <div class=tb-file-clear-container> <md-button ng-click="clearCertFile(\'caCert\')" class="tb-file-clear-btn md-icon-button md-primary" aria-label="{{ \'action.remove\' | translate }}"> <md-tooltip md-direction=top> {{ \'action.remove\' | translate }} </md-tooltip> <md-icon aria-label="{{ \'action.remove\' | translate }}" class=material-icons>close</md-icon> </md-button> </div> <div class="alert tb-flow-drop" flow-drop> <label for=caCertSelect translate>tb.rulenode.drop-file</label> <input class=file-input flow-btn id=caCertSelect> </div> </div> </div> <div class=dropdown-messages> <div ng-if=!configuration.credentials.caCertFileName class=tb-error-message translate>tb.rulenode.no-file</div> <div ng-if=configuration.credentials.caCertFileName>{{configuration.credentials.caCertFileName}}</div> </div> <div class=tb-container ng-class="configuration.credentials.certFileName ? \'ng-valid\' : \'ng-invalid\'"> <label class=tb-label translate>tb.rulenode.cert</label> <div flow-init={singleFile:true} flow-file-added="certFileAdded($file, \'Cert\')" class=tb-file-select-container> <div class=tb-file-clear-container> <md-button ng-click="clearCertFile(\'Cert\')" class="tb-file-clear-btn md-icon-button md-primary" aria-label="{{ \'action.remove\' | translate }}"> <md-tooltip md-direction=top> {{ \'action.remove\' | translate }} </md-tooltip> <md-icon aria-label="{{ \'action.remove\' | translate }}" class=material-icons>close</md-icon> </md-button> </div> <div class="alert tb-flow-drop" flow-drop> <label for=CertSelect translate>tb.rulenode.drop-file</label> <input class=file-input flow-btn id=CertSelect> </div> </div> </div> <div class=dropdown-messages> <div ng-if=!configuration.credentials.certFileName class=tb-error-message translate>tb.rulenode.no-file</div> <div ng-if=configuration.credentials.certFileName>{{configuration.credentials.certFileName}}</div> </div> <div class=tb-container ng-class="configuration.credentials.privateKeyFileName ? \'ng-valid\' : \'ng-invalid\'"> <label class=tb-label translate>tb.rulenode.private-key</label> <div flow-init={singleFile:true} flow-file-added="certFileAdded($file, \'privateKey\')" class=tb-file-select-container> <div class=tb-file-clear-container> <md-button ng-click="clearCertFile(\'privateKey\')" class="tb-file-clear-btn md-icon-button md-primary" aria-label="{{ \'action.remove\' | translate }}"> <md-tooltip md-direction=top> {{ \'action.remove\' | translate }} </md-tooltip> <md-icon aria-label="{{ \'action.remove\' | translate }}" class=material-icons>close</md-icon> </md-button> </div> <div class="alert tb-flow-drop" flow-drop> <label for=privateKeySelect translate>tb.rulenode.drop-file</label> <input class=file-input flow-btn id=privateKeySelect> </div> </div> </div> <div class=dropdown-messages> <div ng-if=!configuration.credentials.privateKeyFileName class=tb-error-message translate>tb.rulenode.no-file</div> <div ng-if=configuration.credentials.privateKeyFileName>{{configuration.credentials.privateKeyFileName}}</div> </div> <md-input-container class=md-block> <label translate>tb.rulenode.private-key-password</label> <input type=password name=privateKeyPassword ng-model=configuration.credentials.password> </md-input-container> </section> </div> </md-expansion-panel-content> </md-expansion-panel-expanded> </md-expansion-panel> </md-expansion-panel-group> </section>';
}, function(e, t) {
    e.exports = " <section ng-form name=msgCountConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.interval-seconds</label> <input ng-required=true type=number step=1 name=interval ng-model=configuration.interval min=1> <div ng-messages=msgCountConfigForm.interval.$error multiple=multiple md-auto-hide=false> <div ng-message=required translate>tb.rulenode.interval-seconds-required</div> <div ng-message=min translate>tb.rulenode.min-interval-seconds-message</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.output-timeseries-key-prefix</label> <input ng-required=true name=telemetryPrefix ng-model=configuration.telemetryPrefix> <div ng-messages=msgCountConfigForm.telemetryPrefix.$error> <div translate ng-message=required>tb.rulenode.output-timeseries-key-prefix-required</div> </div> </md-input-container> </section> "
}, function(e, t) {
    e.exports = ' <section ng-form name=msgDelayConfigForm layout=column> <md-checkbox aria-label="{{ \'tb.rulenode.use-metadata-period-in-seconds-patterns\' | translate }}" ng-model=configuration.useMetadataPeriodInSecondsPatterns>{{ \'tb.rulenode.use-metadata-period-in-seconds-patterns\' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.use-metadata-period-in-seconds-patterns-hint</div> <md-input-container class=md-block ng-if="configuration.useMetadataPeriodInSecondsPatterns === undefined || configuration.useMetadataPeriodInSecondsPatterns == false"> <label translate>tb.rulenode.period-seconds</label> <input ng-required=true type=number step=1 name=periodInSeconds ng-model=configuration.periodInSeconds min=0> <div ng-messages=msgDelayConfigForm.periodInSeconds.$error multiple=multiple md-auto-hide=false> <div ng-message=required translate>tb.rulenode.period-seconds-required</div> <div ng-message=min translate>tb.rulenode.min-period-0-seconds-message</div> </div> </md-input-container> <md-input-container class=md-block flex ng-if="configuration.useMetadataPeriodInSecondsPatterns === true"> <label translate>tb.rulenode.period-in-seconds-pattern</label> <input ng-required=true name=periodInSecondsPattern ng-model=configuration.periodInSecondsPattern> <div ng-messages=msgDelayConfigForm.periodInSecondsPattern.$error> <div ng-message=required translate>tb.rulenode.period-in-seconds-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.period-in-seconds-pattern-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.max-pending-messages</label> <input ng-required=true type=number step=1 name=maxPendingMsgs ng-model=configuration.maxPendingMsgs min=1 max=100000> <div ng-messages=msgDelayConfigForm.maxPendingMsgs.$error multiple=multiple md-auto-hide=false> <div ng-message=required translate>tb.rulenode.max-pending-messages-required</div> <div ng-message=min translate>tb.rulenode.max-pending-messages-range</div> <div ng-message=max translate>tb.rulenode.max-pending-messages-range</div> </div> </md-input-container> </section> '
}, function(e, t) {
    e.exports = " <section ng-form name=pubsubConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.gcp-project-id</label> <input ng-required=true name=projectId ng-model=configuration.projectId> <div ng-messages=pubsubConfigForm.projectId.$error> <div ng-message=required translate>tb.rulenode.gcp-project-id-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.pubsub-topic-name</label> <input ng-required=true name=topicName ng-model=configuration.topicName> <div ng-messages=pubsubConfigForm.topicName.$error> <div ng-message=required translate>tb.rulenode.pubsub-topic-name-required</div> </div> </md-input-container> <div class=tb-container ng-class=\"configuration.serviceAccountKeyFileName ? 'ng-valid' : 'ng-invalid'\"> <label class=tb-label translate>tb.rulenode.gcp-service-account-key</label> <div flow-init={singleFile:true} flow-file-added=serviceAccountFileAdded($file) class=tb-file-select-container> <div class=tb-file-clear-container> <md-button ng-click=clearServiceAccountFile() class=\"tb-file-clear-btn md-icon-button md-primary\" aria-label=\"{{ 'action.remove' | translate }}\"> <md-tooltip md-direction=top> {{ 'action.remove' | translate }} </md-tooltip> <md-icon aria-label=\"{{ 'action.remove' | translate }}\" class=material-icons>close</md-icon> </md-button> </div> <div class=\"alert tb-flow-drop\" flow-drop> <label for=serviceAccountKeySelect translate>tb.rulenode.drop-file</label> <input class=file-input flow-btn id=serviceAccountKeySelect> </div> </div> </div> <div class=dropdown-messages> <div ng-if=!configuration.serviceAccountKeyFileName class=tb-error-message translate>tb.rulenode.no-file</div> <div ng-if=configuration.serviceAccountKeyFileName>{{configuration.serviceAccountKeyFileName}}</div> </div> <label translate class=tb-title>tb.rulenode.message-attributes</label> <div class=tb-hint translate>tb.rulenode.message-attributes-hint</div> <tb-kv-map-config ng-model=configuration.messageAttributes ng-required=false key-text=\"'tb.rulenode.name'\" key-required-text=\"'tb.rulenode.name-required'\" val-text=\"'tb.rulenode.value'\" val-required-text=\"'tb.rulenode.value-required'\"> </tb-kv-map-config> </section> "
}, function(e, t) {
    e.exports = ' <section ng-form name=rabbitMqConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.exchange-name-pattern</label> <input name=exchangeNamePattern ng-model=configuration.exchangeNamePattern> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.routing-key-pattern</label> <input name=routingKeyPattern ng-model=configuration.routingKeyPattern> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.message-properties</label> <md-select ng-model=configuration.messageProperties ng-disabled="$root.loading || readonly"> <md-option ng-repeat="property in messageProperties" ng-value=property> {{ property }} </md-option> </md-select> </md-input-container> <div layout-gt-sm=row> <md-input-container class=md-block flex=100 flex-gt-sm=60> <label translate>tb.rulenode.host</label> <input ng-required=true name=host ng-model=configuration.host> <div ng-messages=rabbitMqConfigForm.host.$error> <div ng-message=required translate>tb.rulenode.host-required</div> </div> </md-input-container> <md-input-container class=md-block flex=100 flex-gt-sm=40> <label translate>tb.rulenode.port</label> <input ng-required=true type=number step=1 name=port ng-model=configuration.port min=0 max=65535> <div ng-messages=rabbitMqConfigForm.port.$error> <div ng-message=required translate>tb.rulenode.port-required</div> <div ng-message=min translate>tb.rulenode.port-range</div> <div ng-message=max translate>tb.rulenode.port-range</div> </div> </md-input-container> </div> <md-input-container class=md-block> <label translate>tb.rulenode.virtual-host</label> <input name=virtualHost ng-model=configuration.virtualHost> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.username</label> <input name=virtualHost ng-model=configuration.username> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.password</label> <input name=virtualHost type=password ng-model=configuration.password> </md-input-container> <md-input-container class=md-block> <md-checkbox ng-disabled="$root.loading || readonly" aria-label="{{ \'tb.rulenode.automatic-recovery\' | translate }}" ng-model=ruleNode.automaticRecoveryEnabled>{{ \'tb.rulenode.automatic-recovery\' | translate }} </md-checkbox> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.connection-timeout-ms</label> <input type=number step=1 name=connectionTimeout ng-model=configuration.connectionTimeout min=0> <div ng-messages=rabbitMqConfigForm.connectionTimeout.$error> <div ng-message=min translate>tb.rulenode.min-connection-timeout-ms-message</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.handshake-timeout-ms</label> <input type=number step=1 name=handshakeTimeout ng-model=configuration.handshakeTimeout min=0> <div ng-messages=rabbitMqConfigForm.handshakeTimeout.$error> <div ng-message=min translate>tb.rulenode.min-handshake-timeout-ms-message</div> </div> </md-input-container> <label translate class=tb-title>tb.rulenode.client-properties</label> <tb-kv-map-config ng-model=configuration.clientProperties ng-required=false key-text="\'tb.rulenode.key\'" key-required-text="\'tb.rulenode.key-required\'" val-text="\'tb.rulenode.value\'" val-required-text="\'tb.rulenode.value-required\'"> </tb-kv-map-config> </section> '
}, function(e, t) {
    e.exports = ' <section ng-form name=restApiCallConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.endpoint-url-pattern</label> <input ng-required=true name=endpointUrlPattern ng-model=configuration.restEndpointUrlPattern> <div ng-messages=restApiCallConfigForm.endpointUrlPattern.$error> <div ng-message=required translate>tb.rulenode.endpoint-url-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.endpoint-url-pattern-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.request-method</label> <md-select ng-model=configuration.requestMethod ng-disabled=$root.loading> <md-option ng-repeat="type in ruleNodeTypes.httpRequestType" ng-value=type> {{ type }} </md-option> </md-select> </md-input-container> <md-checkbox ng-disabled="$root.loading || readonly" aria-label="{{ \'tb.rulenode.use-simple-client-http-factory\' | translate }}" ng-model=configuration.useSimpleClientHttpFactory> {{ \'tb.rulenode.use-simple-client-http-factory\' | translate }} </md-checkbox> <md-input-container flex ng-if=!configuration.useSimpleClientHttpFactory> <label translate>tb.rulenode.read-timeout</label> <input type=number step=1 ng-model=configuration.readTimeoutMs min=0> <div class=tb-hint translate>tb.rulenode.read-timeout-hint</div> </md-input-container> <md-input-container> <label translate>tb.rulenode.max-parallel-requests-count</label> <input type=number step=1 ng-model=configuration.maxParallelRequestsCount min=0> <div class=tb-hint translate>tb.rulenode.max-parallel-requests-count-hint</div> </md-input-container> <label translate class=tb-title>tb.rulenode.headers</label> <div class=tb-hint translate>tb.rulenode.headers-hint</div> <tb-kv-map-config ng-model=configuration.headers ng-required=false key-text="\'tb.rulenode.header\'" key-required-text="\'tb.rulenode.header-required\'" val-text="\'tb.rulenode.value\'" val-required-text="\'tb.rulenode.value-required\'"> </tb-kv-map-config> <md-checkbox style=line-height:50px ng-disabled="$root.loading || readonly" aria-label="{{ \'tb.rulenode.use-redis-queue\' | translate }}" ng-model=configuration.useRedisQueueForMsgPersistence> {{ \'tb.rulenode.use-redis-queue\' | translate }} </md-checkbox> <div layout=column ng-if=configuration.useRedisQueueForMsgPersistence> <md-checkbox ng-disabled="$root.loading || readonly" aria-label="{{ \'tb.rulenode.trim-redis-queue\' | translate }}" ng-model=configuration.trimQueue> {{ \'tb.rulenode.trim-redis-queue\' | translate }} </md-checkbox> <md-input-container class=md-block> <label translate>tb.rulenode.redis-queue-max-size</label> <input type=number step=1 name=redisQueueMaxSize ng-model=configuration.maxQueueSize min=0> </md-input-container> </div> </section> '
}, function(e, t) {
    e.exports = " <section ng-form name=rpcReplyConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.request-id-metadata-attribute</label> <input name=requestIdMetaDataAttribute ng-model=configuration.requestIdMetaDataAttribute> </md-input-container> </section> "
}, function(e, t) {
    e.exports = " <section ng-form name=rpcRequestConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.timeout-sec</label> <input ng-required=true type=number step=1 name=timeoutInSeconds ng-model=configuration.timeoutInSeconds min=0> <div ng-messages=rpcRequestConfigForm.timeoutInSeconds.$error multiple=multiple md-auto-hide=false> <div ng-message=required translate>tb.rulenode.timeout-required</div> <div ng-message=min translate>tb.rulenode.min-timeout-message</div> </div> </md-input-container> </section> "
}, function(e, t) {
    e.exports = ' <section layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.custom-table-name</label> <input ng-required=true name=tableName ng-model=configuration.tableName> <div ng-messages=saveToCustomTableConfigForm.tableName.$error> <div ng-message=required translate>tb.rulenode.custom-table-name-required</div> </div> <div class=tb-hint style=margin-top:5px translate>tb.rulenode.custom-table-hint</div> </md-input-container> <label translate class="tb-title tb-required">tb.rulenode.fields-mapping</label> <tb-kv-map-config ng-model=configuration.fieldsMapping ng-required=true required-text="\'tb.rulenode.fields-mapping-required\'" key-text="\'tb.rulenode.message-field\'" key-required-text="\'tb.rulenode.message-field-required\'" val-text="\'tb.rulenode.table-col\'" val-required-text="\'tb.rulenode.table-col-required\'"> </tb-kv-map-config> </section> '
}, function(e, t) {
    e.exports = ' <section ng-form name=sendEmailConfigForm layout=column> <md-checkbox ng-disabled="$root.loading || readonly" aria-label="{{ \'tb.rulenode.use-system-smtp-settings\' | translate }}" ng-model=configuration.useSystemSmtpSettings> {{ \'tb.rulenode.use-system-smtp-settings\' | translate }} </md-checkbox> <section layout=column ng-if=!configuration.useSystemSmtpSettings> <md-input-container class=md-block> <label translate>tb.rulenode.smtp-protocol</label> <md-select ng-disabled="$root.loading || readonly" ng-model=configuration.smtpProtocol> <md-option ng-repeat="smtpProtocol in smtpProtocols" value={{smtpProtocol}}> {{smtpProtocol.toUpperCase()}} </md-option> </md-select> </md-input-container> <div layout-gt-sm=row> <md-input-container class=md-block flex=100 flex-gt-sm=60> <label translate>tb.rulenode.smtp-host</label> <input ng-required=true name=smtpHost ng-model=configuration.smtpHost> <div ng-messages=sendEmailConfigForm.smtpHost.$error> <div translate ng-message=required>tb.rulenode.smtp-host-required</div> </div> </md-input-container> <md-input-container class=md-block flex=100 flex-gt-sm=40> <label translate>tb.rulenode.smtp-port</label> <input type=number step=1 min=1 max=65535 ng-required=true name=port ng-model=configuration.smtpPort> <div ng-messages=sendEmailConfigForm.port.$error> <div translate ng-message=required>tb.rulenode.smtp-port-required</div> <div translate ng-message=min>tb.rulenode.smtp-port-range</div> <div translate ng-message=max>tb.rulenode.smtp-port-range</div> </div> </md-input-container> </div> <md-input-container class=md-block> <label translate>tb.rulenode.timeout-msec</label> <input type=number step=1 min=0 ng-required=true name=timeout ng-model=configuration.timeout> <div ng-messages=sendEmailConfigForm.timeout.$error> <div translate ng-message=required>tb.rulenode.timeout-required</div> <div translate ng-message=min>tb.rulenode.min-timeout-msec-message</div> </div> </md-input-container> <md-checkbox ng-disabled="$root.loading || readonly" aria-label="{{ \'tb.rulenode.enable-tls\' | translate }}" ng-model=configuration.enableTls>{{ \'tb.rulenode.enable-tls\' | translate }}</md-checkbox> <md-input-container class=md-block> <label translate>tb.rulenode.username</label> <input name=username placeholder="{{ \'tb.rulenode.enter-username\' | translate }}" ng-model=configuration.username> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.password</label> <input name=password placeholder="{{ \'tb.rulenode.enter-password\' | translate }}" type=password ng-model=configuration.password> </md-input-container> </section> </section> '
}, function(e, t) {
    e.exports = " <section ng-form name=snsConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.topic-arn-pattern</label> <input ng-required=true name=topicArnPattern ng-model=configuration.topicArnPattern> <div ng-messages=snsConfigForm.topicArnPattern.$error> <div ng-message=required translate>tb.rulenode.topic-arn-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.topic-arn-pattern-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.aws-access-key-id</label> <input ng-required=true name=accessKeyId ng-model=configuration.accessKeyId> <div ng-messages=snsConfigForm.accessKeyId.$error> <div ng-message=required translate>tb.rulenode.aws-access-key-id-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.aws-secret-access-key</label> <input ng-required=true name=secretAccessKey ng-model=configuration.secretAccessKey> <div ng-messages=snsConfigForm.secretAccessKey.$error> <div ng-message=required translate>tb.rulenode.aws-secret-access-key-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.aws-region</label> <input ng-required=true name=region ng-model=configuration.region> <div ng-messages=snsConfigForm.region.$error> <div ng-message=required translate>tb.rulenode.aws-region-required</div> </div> </md-input-container> </section> "
}, function(e, t) {
    e.exports = ' <section ng-form name=sqsConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.queue-type</label> <md-select ng-model=configuration.queueType ng-disabled="$root.loading || readonly"> <md-option ng-repeat="type in ruleNodeTypes.sqsQueueType" ng-value=type.value> {{ type.name | translate }} </md-option> </md-select> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.queue-url-pattern</label> <input ng-required=true name=queueUrlPattern ng-model=configuration.queueUrlPattern> <div ng-messages=sqsConfigForm.queueUrlPattern.$error> <div ng-message=required translate>tb.rulenode.queue-url-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.queue-url-pattern-hint</div> </md-input-container> <md-input-container class=md-block ng-if="configuration.queueType == ruleNodeTypes.sqsQueueType.STANDARD.value"> <label translate>tb.rulenode.delay-seconds</label> <input type=number step=1 name=delaySeconds ng-model=configuration.delaySeconds min=0 max=900> <div ng-messages=sqsConfigForm.delaySeconds.$error> <div ng-message=min translate>tb.rulenode.min-delay-seconds-message</div> <div ng-message=max translate>tb.rulenode.max-delay-seconds-message</div> </div> </md-input-container> <label translate class=tb-title>tb.rulenode.message-attributes</label> <div class=tb-hint translate>tb.rulenode.message-attributes-hint</div> <tb-kv-map-config ng-model=configuration.messageAttributes ng-required=false key-text="\'tb.rulenode.name\'" key-required-text="\'tb.rulenode.name-required\'" val-text="\'tb.rulenode.value\'" val-required-text="\'tb.rulenode.value-required\'"> </tb-kv-map-config> <md-input-container class=md-block> <label translate>tb.rulenode.aws-access-key-id</label> <input ng-required=true name=accessKeyId ng-model=configuration.accessKeyId> <div ng-messages=snsConfigForm.accessKeyId.$error> <div ng-message=required translate>tb.rulenode.aws-access-key-id-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.aws-secret-access-key</label> <input ng-required=true name=secretAccessKey ng-model=configuration.secretAccessKey> <div ng-messages=snsConfigForm.secretAccessKey.$error> <div ng-message=required translate>tb.rulenode.aws-secret-access-key-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.aws-region</label> <input ng-required=true name=region ng-model=configuration.region> <div ng-messages=snsConfigForm.region.$error> <div ng-message=required translate>tb.rulenode.aws-region-required</div> </div> </md-input-container> </section> '
}, function(e, t) {
    e.exports = " <section ng-form name=timeseriesConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.default-ttl</label> <input ng-required=true type=number step=1 name=defaultTTL ng-model=configuration.defaultTTL min=0> <div ng-messages=timeseriesConfigForm.defaultTTL.$error multiple=multiple md-auto-hide=false> <div ng-message=required translate>tb.rulenode.default-ttl-required</div> <div ng-message=min translate>tb.rulenode.min-default-ttl-message</div> </div> </md-input-container> </section> "
}, function(e, t) {
    e.exports = " <section ng-form name=unAssignCustomerConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.customer-name-pattern</label> <input ng-required=true name=customerNamePattern ng-model=configuration.customerNamePattern> <div ng-messages=unAssignCustomerConfigForm.customerNamePattern.$error> <div ng-message=required translate>tb.rulenode.customer-name-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.customer-name-pattern-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.customer-cache-expiration</label> <input type=number step=1 min=0 ng-required=true name=customerCacheExpiration ng-model=configuration.customerCacheExpiration> <div ng-messages=unAssignCustomerConfigForm.customerCacheExpiration.$error> <div translate ng-message=required>tb.rulenode.customer-cache-expiration-required</div> <div translate ng-message=min>tb.rulenode.customer-cache-expiration-range</div> </div> <div class=tb-hint translate>tb.rulenode.customer-cache-expiration-hint</div> </md-input-container> </section> "
}, function(e, t) {
    e.exports = ' <section layout=column> <div layout=row> <md-input-container class=md-block style=min-width:100px> <label translate>relation.direction</label> <md-select required ng-model=query.direction> <md-option ng-repeat="direction in types.entitySearchDirection" ng-value=direction> {{ (\'relation.search-direction.\' + direction) | translate}} </md-option> </md-select> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.max-relation-level</label> <input name=maxRelationLevel type=number min=1 step=1 placeholder="{{ \'tb.rulenode.unlimited-level\' | translate }}" ng-model=query.maxLevel aria-label="{{ \'tb.rulenode.max-relation-level\' | translate }}"> </md-input-container> </div> <div class=md-caption style=color:rgba(0,0,0,.57) translate>relation.relation-type</div> <tb-relation-type-autocomplete flex hide-label ng-model=query.relationType tb-required=false> </tb-relation-type-autocomplete> <div class="md-caption tb-required" style=color:rgba(0,0,0,.57) translate>device.device-types</div> <tb-entity-subtype-list tb-required=true entity-type=types.entityType.device ng-model=query.deviceTypes> </tb-entity-subtype-list> </section> '
}, function(e, t) {
    e.exports = " <section layout=column> <label translate class=\"tb-title tb-required\">tb.rulenode.attr-mapping</label> <md-checkbox aria-label=\"{{ 'tb.rulenode.latest-telemetry' | translate }}\" ng-model=configuration.telemetry>{{ 'tb.rulenode.latest-telemetry' | translate }} </md-checkbox> <tb-kv-map-config ng-model=configuration.attrMapping ng-required=true required-text=\"'tb.rulenode.attr-mapping-required'\" key-text=\"configuration.telemetry ? 'tb.rulenode.source-telemetry' : 'tb.rulenode.source-attribute'\" key-required-text=\"configuration.telemetry ? 'tb.rulenode.source-telemetry-required' : 'tb.rulenode.source-attribute-required'\" val-text=\"'tb.rulenode.target-attribute'\" val-required-text=\"'tb.rulenode.target-attribute-required'\"> </tb-kv-map-config> </section> "
}, function(e, t) {
    e.exports = ' <section layout=column> <label translate class="tb-title tb-required">tb.rulenode.device-relations-query</label> <tb-device-relations-query-config style=padding-bottom:15px ng-model=configuration.deviceRelationsQuery> </tb-device-relations-query-config> <md-checkbox aria-label="{{ \'tb.rulenode.tell-failure-if-absent\' | translate }}" ng-model=configuration.tellFailureIfAbsent> {{ \'tb.rulenode.tell-failure-if-absent\' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.tell-failure-if-absent-hint</div> <label translate class="tb-title no-padding">tb.rulenode.client-attributes</label> <md-chips style=padding-bottom:15px ng-required=false readonly=readonly ng-model=configuration.clientAttributeNames placeholder="{{\'tb.rulenode.client-attributes\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> <label translate class="tb-title no-padding">tb.rulenode.shared-attributes</label> <md-chips style=padding-bottom:15px ng-required=false readonly=readonly ng-model=configuration.sharedAttributeNames placeholder="{{\'tb.rulenode.shared-attributes\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> <label translate class="tb-title no-padding">tb.rulenode.server-attributes</label> <md-chips style=padding-bottom:15px ng-required=false readonly=readonly ng-model=configuration.serverAttributeNames placeholder="{{\'tb.rulenode.server-attributes\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> <label translate class="tb-title no-padding">tb.rulenode.latest-timeseries</label> <md-chips ng-required=false readonly=readonly ng-model=configuration.latestTsKeyNames placeholder="{{\'tb.rulenode.latest-timeseries\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> <div style=margin-top:20px> <md-checkbox aria-label="{{ \'tb.rulenode.get-latest-value-with-ts\' | translate }}" ng-model=configuration.getLatestValueWithTs> {{ \'tb.rulenode.get-latest-value-with-ts\' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.get-latest-value-with-ts-hint</div> </div> </section> '
}, function(e, t) {
    e.exports = ' <section layout=column> <label translate class="tb-title no-padding" class=required>tb.rulenode.entity-details</label> <md-chips readonly=disabled style=margin-bottom:28px id=entityDetailsListChips ng-required=tbRequired ng-model=configuration.detailsList placeholder={{placeholder}} secondary-placeholder={{secondaryPlaceholder}} md-autocomplete-snap md-require-match=true> <md-autocomplete md-no-cache=true id=entityDetails md-selected-item=selectedEntityDetail md-selected-item-change=selectedItemChange(item) md-search-text=entityDetailsSearchText md-items="item in entityDetailsList" md-item-text=item md-min-length=0 placeholder="{{ (!ruleNodeTypes.entityDetails || !ruleNodeTypes.entityDetails.length) ? placeholder : secondaryPlaceholder }}"> <md-item-template> <span md-highlight-text=entityDetailsSearchText md-highlight-flags=^i> {{\'tb.rulenode.entity-details-\'+item.toLowerCase() | translate}} </span> </md-item-template> <md-not-found> <span translate translate-values="{ entityDetails: entityDetailsSearchText }">tb.rulenode.no-entity-details-matching</span> </md-not-found> </md-autocomplete> <md-chip-template> <span> <strong>{{\'tb.rulenode.entity-details-\'+$chip.toLowerCase() | translate}}</strong> </span> </md-chip-template> </md-chips> <div class=tb-error-messages ng-messages=ngModelCtrl.$error ng-if="inputTouched && tbRequired" role=alert> <div translate ng-message=configuration.detailsList class=tb-error-message>tb.rulenode.entity-details-list-empty</div> </div> <md-checkbox aria-label="{{ \'tb.rulenode.add-to-metadata\' | translate }}" ng-model=configuration.addToMetadata> {{ \'tb.rulenode.add-to-metadata\' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.add-to-metadata-hint</div> </section> '
}, function(e, t) {
    e.exports = ' <section class=tb-telemetry-from-database-config ng-form name=getTelemetryConfigForm layout=column> <label translate class="tb-title no-padding">tb.rulenode.latest-timeseries</label> <md-chips ng-required=false readonly=readonly ng-model=configuration.latestTsKeyNames placeholder="{{\'tb.rulenode.latest-timeseries\' | translate}}" md-separator-keys=separatorKeys> </md-chips> <md-input-container style=margin-bottom:18px;margin-top:58px> <label translate class="tb-title no-padding">tb.rulenode.fetch-mode</label> <md-select required ng-model=configuration.fetchMode> <md-option ng-repeat="type in ruleNodeTypes.fetchModeType" ng-value=type> {{ type }} </md-option> </md-select> </md-input-container> <div class=tb-hint translate>tb.rulenode.fetch-mode-hint</div> <md-input-container flex ng-if="configuration.fetchMode === \'ALL\' "> <label translate class="tb-title no-padding">tb.rulenode.order-by</label> <md-select required ng-model=configuration.orderBy> <md-option ng-repeat="type in ruleNodeTypes.samplingOrder" ng-value=type> {{ type }} </md-option> </md-select> </md-input-container> <div class=tb-hint translate flex ng-if="configuration.fetchMode === \'ALL\' ">tb.rulenode.order-by-hint</div> <md-input-container style=margin-bottom:0 flex ng-if="configuration.fetchMode === \'ALL\' "> <label translate class="tb-title no-padding">tb.rulenode.limit</label> <input required type=number step=1 ng-model=configuration.limit min=2 max=1000> </md-input-container> <div class=tb-hint translate flex ng-if="configuration.fetchMode === \'ALL\' ">tb.rulenode.limit-hint</div> <md-checkbox aria-label="{{ \'tb.rulenode.use-metadata-interval-patterns\' | translate }}" ng-model=configuration.useMetadataIntervalPatterns>{{ \'tb.rulenode.use-metadata-interval-patterns\' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.use-metadata-interval-patterns-hint</div> <div layout=column layout-gt-sm=row> <md-input-container flex class="md-block tb-time-value" flex ng-if="configuration.useMetadataIntervalPatterns == false"> <label translate class="tb-title no-padding">tb.rulenode.start-interval</label> <input required type=number step=1 min=1 max=2147483647 name=startInterval ng-model=configuration.startInterval> <div ng-messages=getTelemetryConfigForm.startInterval.$error> <div translate ng-message=required>tb.rulenode.start-interval-value-required</div> <div ng-message=min translate>tb.rulenode.time-value-range</div> <div ng-message=max translate>tb.rulenode.time-value-range</div> </div> </md-input-container> <md-input-container flex class="md-block tb-time-unit" flex ng-if="configuration.useMetadataIntervalPatterns == false "> <label translate class="tb-title no-padding">tb.rulenode.start-interval-time-unit</label> <md-select required name=startIntervalTimeUnit aria-label="{{ \'tb.rulenode.start-interval-time-unit\' | translate }}" ng-model=configuration.startIntervalTimeUnit> <md-option ng-repeat="timeUnit in ruleNodeTypes.timeUnit" ng-value=timeUnit.value> {{timeUnit.name | translate}} </md-option> </md-select> </md-input-container> </div> <div layout=column layout-gt-sm=row> <md-input-container flex class="md-block tb-time-value" flex ng-if="configuration.useMetadataIntervalPatterns == false"> <label translate class="tb-title no-padding">tb.rulenode.end-interval</label> <input required type=number step=1 min=1 max=2147483647 name=endInterval ng-model=configuration.endInterval> <div ng-messages=getTelemetryConfigForm.endInterval.$error> <div translate ng-message=required>tb.rulenode.end-interval-value-required</div> <div ng-message=min translate>tb.rulenode.time-value-range</div> <div ng-message=max translate>tb.rulenode.time-value-range</div> </div> </md-input-container> <md-input-container flex class="md-block tb-time-unit" flex ng-if="configuration.useMetadataIntervalPatterns === false"> <label translate class="tb-title no-padding">tb.rulenode.end-interval-time-unit</label> <md-select required name=endIntervalTimeUnit aria-label="{{ \'tb.rulenode.end-interval-time-unit\' | translate }}" ng-model=configuration.endIntervalTimeUnit> <md-option ng-repeat="timeUnit in ruleNodeTypes.timeUnit" ng-value=timeUnit.value> {{timeUnit.name | translate}} </md-option> </md-select> </md-input-container> </div> <md-input-container class=md-block flex ng-if="configuration.useMetadataIntervalPatterns === true" style=margin-top:38px> <label translate>tb.rulenode.start-interval-pattern</label> <input ng-required=true name=startIntervalPattern ng-model=configuration.startIntervalPattern> <div ng-messages=getTelemetryConfigForm.startIntervalPattern.$error> <div ng-message=required translate>tb.rulenode.start-interval-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.start-interval-pattern-hint</div> </md-input-container> <md-input-container class=md-block flex ng-if="configuration.useMetadataIntervalPatterns === true"> <label translate>tb.rulenode.end-interval-pattern</label> <input ng-required=true name=endIntervalPattern ng-model=configuration.endIntervalPattern> <div ng-messages=getTelemetryConfigForm.endIntervalPattern.$error> <div ng-message=required translate>tb.rulenode.end-interval-pattern-required</div> </div> <div class=tb-hint translate>tb.rulenode.end-interval-pattern-hint</div> </md-input-container> </section>';
}, function(e, t) {
    e.exports = ' <section layout=column> <md-checkbox aria-label="{{ \'tb.rulenode.tell-failure-if-absent\' | translate }}" ng-model=configuration.tellFailureIfAbsent> {{ \'tb.rulenode.tell-failure-if-absent\' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.tell-failure-if-absent-hint</div> <label translate class="tb-title no-padding">tb.rulenode.client-attributes</label> <md-chips style=padding-bottom:15px ng-required=false readonly=readonly ng-model=configuration.clientAttributeNames placeholder="{{\'tb.rulenode.client-attributes\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> <label translate class="tb-title no-padding">tb.rulenode.shared-attributes</label> <md-chips style=padding-bottom:15px ng-required=false readonly=readonly ng-model=configuration.sharedAttributeNames placeholder="{{\'tb.rulenode.shared-attributes\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> <label translate class="tb-title no-padding">tb.rulenode.server-attributes</label> <md-chips style=padding-bottom:15px ng-required=false readonly=readonly ng-model=configuration.serverAttributeNames placeholder="{{\'tb.rulenode.server-attributes\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> <label translate class="tb-title no-padding">tb.rulenode.latest-timeseries</label> <md-chips ng-required=false readonly=readonly ng-model=configuration.latestTsKeyNames placeholder="{{\'tb.rulenode.latest-timeseries\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> <div style=margin-top:20px> <md-checkbox aria-label="{{ \'tb.rulenode.get-latest-value-with-ts\' | translate }}" ng-model=configuration.getLatestValueWithTs> {{ \'tb.rulenode.get-latest-value-with-ts\' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.get-latest-value-with-ts-hint</div> </div> </section> '
}, function(e, t) {
    e.exports = ' <section layout=column> <label translate class="tb-title tb-required">tb.rulenode.fields-mapping</label> <tb-kv-map-config ng-model=configuration.fieldsMapping ng-required=true required-text="\'tb.rulenode.fields-mapping-required\'" key-text="\'tb.rulenode.source-field\'" key-required-text="\'tb.rulenode.source-field-required\'" val-text="\'tb.rulenode.target-attribute\'" val-required-text="\'tb.rulenode.target-attribute-required\'"> </tb-kv-map-config> </section> '
}, function(e, t) {
    e.exports = " <section layout=column> <label translate class=\"tb-title tb-required\">tb.rulenode.relations-query</label> <tb-relations-query-config style=padding-bottom:15px ng-model=configuration.relationsQuery> </tb-relations-query-config> <label translate class=\"tb-title tb-required\">tb.rulenode.attr-mapping</label> <md-checkbox aria-label=\"{{ 'tb.rulenode.latest-telemetry' | translate }}\" ng-model=configuration.telemetry>{{ 'tb.rulenode.latest-telemetry' | translate }} </md-checkbox> <tb-kv-map-config ng-model=configuration.attrMapping ng-required=true required-text=\"'tb.rulenode.attr-mapping-required'\" key-text=\"configuration.telemetry ? 'tb.rulenode.source-telemetry' : 'tb.rulenode.source-attribute'\" key-required-text=\"configuration.telemetry ? 'tb.rulenode.source-telemetry-required' : 'tb.rulenode.source-attribute-required'\" val-text=\"'tb.rulenode.target-attribute'\" val-required-text=\"'tb.rulenode.target-attribute-required'\"> </tb-kv-map-config> </section> "
}, 31, function(e, t) {
    e.exports = ' <section layout=column> <label translate class="tb-title no-padding tb-required">tb.rulenode.data-keys</label> <md-chips style=padding-bottom:15px ng-required=!(configuration.metadataNames).length readonly=readonly ng-model=configuration.messageNames placeholder="{{\'tb.rulenode.data-keys\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> <div class=tb-hint translate>tb.rulenode.separator-hint</div> <label translate class="tb-title no-padding tb-required">tb.rulenode.metadata-keys</label> <md-chips style=padding-bottom:15px ng-required=!(configuration.messageNames).length readonly=readonly ng-model=configuration.metadataNames placeholder="{{\'tb.rulenode.metadata-keys\' | translate}}" md-separator-keys=separatorKeys md-add-on-blur=true> </md-chips> <div class=tb-hint translate>tb.rulenode.separator-hint</div> <md-checkbox aria-label="{{ \'tb.rulenode.check-all-keys\' | translate }}" ng-model=configuration.checkAllKeys>{{ \'tb.rulenode.check-all-keys\' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.check-all-keys-hint</div> </section> '
}, function(e, t) {
    e.exports = " <section ng-form name=checkRelationConfigForm> <md-checkbox aria-label=\"{{ 'tb.rulenode.check-relation-to-specific-entity' | translate }}\" ng-model=configuration.checkForSingleEntity> {{ 'tb.rulenode.check-relation-to-specific-entity' | translate }} </md-checkbox> <div class=tb-hint translate>tb.rulenode.check-relation-hint</div> <md-input-container class=md-block style=min-width:100px> <label translate>relation.direction</label> <md-select required ng-model=configuration.direction> <md-option ng-repeat=\"direction in types.entitySearchDirection\" ng-value=direction> {{ ('relation.search-direction.' + direction) | translate}} </md-option> </md-select> </md-input-container> <div layout=row class=tb-entity-select ng-if=configuration.checkForSingleEntity style=padding-top:20px> <tb-entity-type-select style=min-width:100px;padding-bottom:20px the-form=checkRelationConfigForm tb-required=true ng-model=configuration.entityType> </tb-entity-type-select> <tb-entity-autocomplete flex ng-if=configuration.entityType the-form=checkRelationConfigForm tb-required=true entity-type=configuration.entityType ng-model=configuration.entityId> </tb-entity-autocomplete> </div> <tb-relation-type-autocomplete hide-label ng-model=configuration.relationType tb-required=true> </tb-relation-type-autocomplete> </section> "
}, function(e, t) {
    e.exports = ' <section ng-form name=geoFilterConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.latitude-key-name</label> <input ng-required=true name=latitudeKeyName ng-model=configuration.latitudeKeyName> <div ng-messages=geoFilterConfigForm.latitudeKeyName.$error> <div ng-message=required translate>tb.rulenode.latitude-key-name-required</div> </div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.longitude-key-name</label> <input ng-required=true name=longitudeKeyName ng-model=configuration.longitudeKeyName> <div ng-messages=geoFilterConfigForm.longitudeKeyName.$error> <div ng-message=required translate>tb.rulenode.longitude-key-name-required</div> </div> </md-input-container> <md-checkbox flex aria-label="{{ \'tb.rulenode.fetch-perimeter-info-from-message-metadata\' | translate }}" ng-model=configuration.fetchPerimeterInfoFromMessageMetadata>{{ \'tb.rulenode.fetch-perimeter-info-from-message-metadata\' | translate }} </md-checkbox> <div layout=row class=tb-entity-select ng-if="configuration.fetchPerimeterInfoFromMessageMetadata === false"> <md-input-container class=md-block flex=100> <label translate>tb.rulenode.perimeter-type</label> <md-select required ng-model=configuration.perimeterType flex> <md-option ng-repeat="type in ruleNodeTypes.perimeterType" ng-value=type.value> {{ type.name | translate}} </md-option> </md-select> </md-input-container> </div> <div layout=row layout-wrap ng-if="configuration.perimeterType === ruleNodeTypes.perimeterType.CIRCLE.value && configuration.fetchPerimeterInfoFromMessageMetadata === false"> <div layout=column flex=50> <md-input-container class=md-block flex layout=column style=margin-top:44px> <label translate>tb.rulenode.circle-center-latitude</label> <input type=number min=0 step=0.1 ng-required=true name=centerLatitude ng-model=configuration.centerLatitude> <div ng-messages=geoFilterConfigForm.centerLatitude.$error> <div ng-message=required translate>tb.rulenode.circle-center-latitude-required</div> </div> </md-input-container> </div> <div layout=column flex=50> <md-input-container class=md-block flex style=margin-top:44px> <label translate>tb.rulenode.circle-center-longitude</label> <input type=number min=0 step=0.1 ng-required=true name=centerLongitude ng-model=configuration.centerLongitude> <div ng-messages=geoFilterConfigForm.centerLongitude.$error> <div ng-message=required translate>tb.rulenode.circle-center-longitude-required</div> </div> </md-input-container> </div> <div layout=column flex=50> <md-input-container class=md-block style=margin-top:28px> <label translate>tb.rulenode.range</label> <input type=number min=0 step=0.1 ng-required=true name=range ng-model=configuration.range> <div ng-messages=geoFilterConfigForm.range.$error> <div ng-message=required translate>tb.rulenode.range-required</div> </div> </md-input-container> </div> <div layout=column flex=50> <md-input-container class=md-block style=margin-top:28px> <label translate>tb.rulenode.range-units</label> <md-select required ng-model=configuration.rangeUnit> <md-option ng-repeat="type in ruleNodeTypes.rangeUnit" ng-value=type.value> {{ type.name | translate}} </md-option> </md-select> </md-input-container> </div> </div> <div layout=row layout-wrap ng-if="configuration.perimeterType === ruleNodeTypes.perimeterType.POLYGON.value && configuration.fetchPerimeterInfoFromMessageMetadata === false"> <div layout=column flex=100> <md-input-container class=md-block style=margin-top:44px> <label translate>tb.rulenode.polygon-definition</label> <input ng-required=true name=polygonsDefinition ng-model=configuration.polygonsDefinition> <div ng-messages=geoFilterConfigForm.polygonsDefinition.$error> <div ng-message=required translate>tb.rulenode.polygon-definition-required</div> </div> <div class=tb-hint style=margin-top:5px translate>tb.rulenode.polygon-definition-hint</div> </md-input-container> </div> </div> </section> '
}, function(e, t) {
    e.exports = ' <section layout=column> <label translate class="tb-title no-padding" ng-class="{\'tb-required\': required}">tb.rulenode.message-types-filter</label> <md-chips id=message_type_chips ng-required=required readonly=readonly ng-model=messageTypes md-autocomplete-snap md-transform-chip=transformMessageTypeChip($chip) md-require-match=false> <md-autocomplete id=message_type md-no-cache=true md-selected-item=selectedMessageType md-search-text=messageTypeSearchText md-items="item in messageTypesSearch(messageTypeSearchText)" md-item-text=item.name md-min-length=0 placeholder="{{\'tb.rulenode.message-type\' | translate }}" md-menu-class=tb-message-type-autocomplete> <span md-highlight-text=messageTypeSearchText md-highlight-flags=^i>{{item}}</span> <md-not-found> <div class=tb-not-found> <div class=tb-no-entries ng-if="!messageTypeSearchText || !messageTypeSearchText.length"> <span translate>tb.rulenode.no-message-types-found</span> </div> <div ng-if="messageTypeSearchText && messageTypeSearchText.length"> <span translate translate-values=\'{ messageType: "{{messageTypeSearchText | truncate:true:6:&apos;...&apos;}}" }\'>tb.rulenode.no-message-type-matching</span> <span> <a translate ng-click="createMessageType($event, \'#message_type_chips\')">tb.rulenode.create-new-message-type</a> </span> </div> </div> </md-not-found> </md-autocomplete> <md-chip-template> <span>{{$chip.name}}</span> </md-chip-template> </md-chips> <div class=tb-error-messages ng-messages=ngModelCtrl.$error role=alert> <div translate ng-message=messageTypes class=tb-error-message>tb.rulenode.message-types-required</div> </div> </section>'
}, function(e, t) {
    e.exports = ' <section layout=column> <label translate class="tb-title no-padding" class=required>tb.rulenode.originator-types-filter</label> <tb-entity-type-list flex ng-model=configuration.originatorTypes allowed-entity-types=allowedEntityTypes ignore-authority-filter=true tb-required=true> </tb-entity-type-list> </section> '
}, function(e, t) {
    e.exports = " <section layout=column> <label translate class=\"tb-title no-padding\">tb.rulenode.filter</label> <tb-js-func ng-model=configuration.jsScript function-name=Filter function-args=\"{{ ['msg', 'metadata', 'msgType'] }}\" no-validate=true> </tb-js-func> <div layout=row> <md-button ng-click=testScript($event) class=\"md-primary md-raised\"> {{ 'tb.rulenode.test-filter-function' | translate }} </md-button> </div> </section> "
}, function(e, t) {
    e.exports = " <section layout=column> <label translate class=\"tb-title no-padding\">tb.rulenode.switch</label> <tb-js-func ng-model=configuration.jsScript function-name=Switch function-args=\"{{ ['msg', 'metadata', 'msgType'] }}\" no-validate=true> </tb-js-func> <div layout=row> <md-button ng-click=testScript($event) class=\"md-primary md-raised\"> {{ 'tb.rulenode.test-switch-function' | translate }} </md-button> </div> </section> "
}, function(e, t) {
    e.exports = ' <section class=tb-kv-map-config layout=column> <div class=header flex layout=row> <span class=cell flex translate>{{ keyText }}</span> <span class=cell flex translate>{{ valText }}</span> <span ng-show=!disabled style=width:52px>&nbsp</span> </div> <div class=body> <div class=row ng-form name=kvForm flex layout=row layout-align="start center" ng-repeat="keyVal in kvList track by $index"> <md-input-container class="cell md-block" flex md-no-float> <input placeholder="{{ keyText | translate }}" ng-required=true name=key ng-model=keyVal.key> <div ng-messages=kvForm.key.$error> <div translate ng-message=required>{{keyRequiredText}}</div> </div> </md-input-container> <md-input-container class="cell md-block" flex md-no-float> <input placeholder="{{ valText | translate }}" ng-required=true name=value ng-model=keyVal.value> <div ng-messages=kvForm.value.$error> <div translate ng-message=required>{{valRequiredText}}</div> </div> </md-input-container> <md-button ng-show=!disabled ng-disabled=loading class="md-icon-button md-primary" ng-click=removeKeyVal($index) aria-label="{{ \'action.remove\' | translate }}"> <md-tooltip md-direction=top> {{ \'tb.key-val.remove-entry\' | translate }} </md-tooltip> <md-icon aria-label="{{ \'action.delete\' | translate }}" class=material-icons> close </md-icon> </md-button> </div> </div> <div class=tb-error-messages ng-messages=ngModelCtrl.$error role=alert> <div translate ng-message=kvMap class=tb-error-message>{{requiredText}}</div> </div> <div> <md-button ng-show=!disabled ng-disabled=loading class="md-primary md-raised" ng-click=addKeyVal() aria-label="{{ \'action.add\' | translate }}"> <md-tooltip md-direction=top> {{ \'tb.key-val.add-entry\' | translate }} </md-tooltip> <md-icon aria-label="{{ \'action.add\' | translate }}" class=material-icons> add </md-icon> {{ \'action.add\' | translate }} </md-button> </div> </section> '
}, function(e, t) {
    e.exports = " <section layout=column> <div layout=row> <md-input-container class=md-block style=min-width:100px> <label translate>relation.direction</label> <md-select required ng-model=query.direction> <md-option ng-repeat=\"direction in types.entitySearchDirection\" ng-value=direction> {{ ('relation.search-direction.' + direction) | translate}} </md-option> </md-select> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.max-relation-level</label> <input name=maxRelationLevel type=number min=1 step=1 placeholder=\"{{ 'tb.rulenode.unlimited-level' | translate }}\" ng-model=query.maxLevel aria-label=\"{{ 'tb.rulenode.max-relation-level' | translate }}\"> </md-input-container> </div> <div class=md-caption style=padding-bottom:10px;color:rgba(0,0,0,.57) translate>relation.relation-filters</div> <tb-relation-filters ng-model=query.filters> </tb-relation-filters> </section> "
}, function(e, t) {
    e.exports = ' <section layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.originator-source</label> <md-select required ng-model=configuration.originatorSource> <md-option ng-repeat="source in ruleNodeTypes.originatorSource" ng-value=source.value> {{ source.name | translate}} </md-option> </md-select> </md-input-container> <section layout=column ng-if="configuration.originatorSource == ruleNodeTypes.originatorSource.RELATED.value"> <label translate class="tb-title tb-required">tb.rulenode.relations-query</label> <tb-relations-query-config style=padding-bottom:15px ng-model=configuration.relationsQuery> </tb-relations-query-config> </section> </section> '
}, function(e, t) {
    e.exports = " <section layout=column> <label translate class=\"tb-title no-padding\">tb.rulenode.transform</label> <tb-js-func ng-model=configuration.jsScript function-name=Transform function-args=\"{{ ['msg', 'metadata', 'msgType'] }}\" no-validate=true> </tb-js-func> <div layout=row style=padding-bottom:15px> <md-button ng-click=testScript($event) class=\"md-primary md-raised\"> {{ 'tb.rulenode.test-transformer-function' | translate }} </md-button> </div> </section> "
}, function(e, t) {
    e.exports = " <section ng-form name=toEmailConfigForm layout=column> <md-input-container class=md-block> <label translate>tb.rulenode.from-template</label> <textarea ng-required=true name=fromTemplate ng-model=configuration.fromTemplate rows=2></textarea> <div ng-messages=toEmailConfigForm.fromTemplate.$error> <div ng-message=required translate>tb.rulenode.from-template-required</div> </div> <div class=tb-hint translate>tb.rulenode.from-template-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.to-template</label> <textarea ng-required=true name=toTemplate ng-model=configuration.toTemplate rows=2></textarea> <div ng-messages=toEmailConfigForm.toTemplate.$error> <div ng-message=required translate>tb.rulenode.to-template-required</div> </div> <div class=tb-hint translate>tb.rulenode.mail-address-list-template-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.cc-template</label> <textarea name=ccTemplate ng-model=configuration.ccTemplate rows=2></textarea> <div class=tb-hint translate>tb.rulenode.mail-address-list-template-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.bcc-template</label> <textarea name=ccTemplate ng-model=configuration.bccTemplate rows=2></textarea> <div class=tb-hint translate>tb.rulenode.mail-address-list-template-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.subject-template</label> <textarea ng-required=true name=subjectTemplate ng-model=configuration.subjectTemplate rows=2></textarea> <div ng-messages=toEmailConfigForm.subjectTemplate.$error> <div ng-message=required translate>tb.rulenode.subject-template-required</div> </div> <div class=tb-hint translate>tb.rulenode.subject-template-hint</div> </md-input-container> <md-input-container class=md-block> <label translate>tb.rulenode.body-template</label> <textarea ng-required=true name=bodyTemplate ng-model=configuration.bodyTemplate rows=6></textarea> <div ng-messages=toEmailConfigForm.bodyTemplate.$error> <div ng-message=required translate>tb.rulenode.body-template-required</div> </div> <div class=tb-hint translate>tb.rulenode.body-template-hint</div> </md-input-container> </section> "
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l), n.types = t, n.$watch("configuration", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function() {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: n
        }
    }
    a.$inject = ["$compile", "types"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(6),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l), n.types = t, n.$watch("configuration", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function() {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: n
        }
    }
    a.$inject = ["$compile", "types"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(7),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t, n, i) {
        var a = function(a, r, l, s) {
            var d = o.default;
            r.html(d), a.types = n, a.$watch("configuration", function(e, t) {
                angular.equals(e, t) || s.$setViewValue(a.configuration)
            }), s.$render = function() {
                a.configuration = s.$viewValue
            }, a.testDetailsBuildJs = function(e) {
                var n = angular.copy(a.configuration.alarmDetailsBuildJs);
                i.testNodeScript(e, n, "json", t.instant("tb.rulenode.details") + "", "Details", ["msg", "metadata", "msgType"], a.ruleNodeId).then(function(e) {
                    a.configuration.alarmDetailsBuildJs = e, s.$setDirty()
                })
            }, e(r.contents())(a)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {
                ruleNodeId: "="
            },
            link: a
        }
    }
    a.$inject = ["$compile", "$translate", "types", "ruleNodeScriptTest"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(8),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t, n, i) {
        var a = function(a, r, l, s) {
            var d = o.default;
            r.html(d), a.types = n, a.$watch("configuration", function(e, t) {
                angular.equals(e, t) || s.$setViewValue(a.configuration)
            }), s.$render = function() {
                a.configuration = s.$viewValue, a.configuration.hasOwnProperty("relationTypes") || (a.configuration.relationTypes = [])
            }, a.testDetailsBuildJs = function(e) {
                var n = angular.copy(a.configuration.alarmDetailsBuildJs);
                i.testNodeScript(e, n, "json", t.instant("tb.rulenode.details") + "", "Details", ["msg", "metadata", "msgType"], a.ruleNodeId).then(function(e) {
                    a.configuration.alarmDetailsBuildJs = e, s.$setDirty()
                })
            }, e(r.contents())(a)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {
                ruleNodeId: "="
            },
            link: a
        }
    }
    a.$inject = ["$compile", "$translate", "types", "ruleNodeScriptTest"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(9),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l), n.types = t, n.$watch("configuration", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function() {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: n
        }
    }
    a.$inject = ["$compile", "types"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(10),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l), n.types = t, n.$watch("configuration", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function() {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: n
        }
    }
    a.$inject = ["$compile", "types"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(11),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t, n, i) {
        var a = function(a, r, l, s) {
            var d = o.default;
            r.html(d), a.types = n, a.originator = null, a.$watch("configuration", function(e, t) {
                angular.equals(e, t) || s.$setViewValue(a.configuration)
            }), s.$render = function() {
                a.configuration = s.$viewValue, a.configuration.originatorId && a.configuration.originatorType ? a.originator = {
                    id: a.configuration.originatorId,
                    entityType: a.configuration.originatorType
                } : a.originator = null, a.$watch("originator", function(e, t) {
                    angular.equals(e, t) || (a.originator ? (s.$viewValue.originatorId = a.originator.id, s.$viewValue.originatorType = a.originator.entityType) : (s.$viewValue.originatorId = null, s.$viewValue.originatorType = null))
                }, !0)
            }, a.testScript = function(e) {
                var n = angular.copy(a.configuration.jsScript);
                i.testNodeScript(e, n, "generate", t.instant("tb.rulenode.generator") + "", "Generate", ["prevMsg", "prevMetadata", "prevMsgType"], a.ruleNodeId).then(function(e) {
                    a.configuration.jsScript = e, s.$setDirty()
                })
            }, e(r.contents())(a)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {
                ruleNodeId: "="
            },
            link: a
        }
    }
    a.$inject = ["$compile", "$translate", "types", "ruleNodeScriptTest"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a, n(1);
    var r = n(12),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l), n.ruleNodeTypes = t, n.$watch("configuration", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function() {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {
                readonly: "=ngReadonly"
            },
            link: n
        }
    }
    a.$inject = ["$compile", "ruleNodeTypes"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(13),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(74),
        r = i(a),
        o = n(52),
        l = i(o),
        s = n(57),
        d = i(s),
        u = n(54),
        c = i(u),
        m = n(53),
        g = i(m),
        p = n(61),
        f = i(p),
        b = n(68),
        v = i(b),
        y = n(69),
        h = i(y),
        q = n(67),
        x = i(q),
        k = n(60),
        $ = i(k),
        T = n(72),
        C = i(T),
        w = n(73),
        M = i(w),
        N = n(66),
        S = i(N),
        _ = n(62),
        E = i(_),
        F = n(71),
        P = i(F),
        A = n(64),
        V = i(A),
        I = n(63),
        j = i(I),
        O = n(51),
        D = i(O),
        R = n(75),
        K = i(R),
        L = n(56),
        U = i(L),
        z = n(55),
        H = i(z),
        B = n(70),
        G = i(B),
        Y = n(58),
        Q = i(Y),
        W = n(65),
        J = i(W);
    t.default = angular.module("thingsboard.ruleChain.config.action", []).directive("tbActionNodeTimeseriesConfig", r.default).directive("tbActionNodeAttributesConfig", l.default).directive("tbActionNodeGeneratorConfig", d.default).directive("tbActionNodeCreateAlarmConfig", c.default).directive("tbActionNodeClearAlarmConfig", g.default).directive("tbActionNodeLogConfig", f.default).directive("tbActionNodeRpcReplyConfig", v.default).directive("tbActionNodeRpcRequestConfig", h.default).directive("tbActionNodeRestApiCallConfig", x.default).directive("tbActionNodeKafkaConfig", $.default).directive("tbActionNodeSnsConfig", C.default).directive("tbActionNodeSqsConfig", M.default).directive("tbActionNodeRabbitMqConfig", S.default).directive("tbActionNodeMqttConfig", E.default).directive("tbActionNodeSendEmailConfig", P.default).directive("tbActionNodeMsgDelayConfig", V.default).directive("tbActionNodeMsgCountConfig", j.default).directive("tbActionNodeAssignToCustomerConfig", D.default).directive("tbActionNodeUnAssignToCustomerConfig", K.default).directive("tbActionNodeDeleteRelationConfig", U.default).directive("tbActionNodeCreateRelationConfig", H.default).directive("tbActionNodeCustomTableConfig", G.default).directive("tbActionNodeGpsGeofencingConfig", Q.default).directive("tbActionNodePubSubConfig", J.default).name
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        var t = function(t, n, i, a) {
            var r = o.default;
            n.html(r), t.ackValues = ["all", "-1", "0", "1"], t.$watch("configuration", function(e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function() {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: t
        }
    }
    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(14),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t, n) {
        var i = function(i, a, r, l) {
            var s = o.default;
            a.html(s), i.$watch("configuration", function(e, t) {
                angular.equals(e, t) || l.$setViewValue(i.configuration)
            }), l.$render = function() {
                i.configuration = l.$viewValue
            }, i.testScript = function(e) {
                var a = angular.copy(i.configuration.jsScript);
                n.testNodeScript(e, a, "string", t.instant("tb.rulenode.to-string") + "", "ToString", ["msg", "metadata", "msgType"], i.ruleNodeId).then(function(e) {
                    i.configuration.jsScript = e, l.$setDirty()
                })
            }, e(a.contents())(i)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {
                ruleNodeId: "="
            },
            link: i
        }
    }
    a.$inject = ["$compile", "$translate", "ruleNodeScriptTest"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(15),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t, n) {
        var i = function(i, a, r, l) {
            var s = o.default;
            a.html(s), i.$mdExpansionPanel = t, i.ruleNodeTypes = n, i.credentialsTypeChanged = function() {
                var e = i.configuration.credentials.type;
                i.configuration.credentials = {}, i.configuration.credentials.type = e, i.updateValidity()
            }, i.certFileAdded = function(e, t) {
                var n = new FileReader;
                n.onload = function(n) {
                    i.$apply(function() {
                        if (n.target.result) {
                            l.$setDirty();
                            var a = n.target.result;
                            a && a.length > 0 && ("caCert" == t && (i.configuration.credentials.caCertFileName = e.name, i.configuration.credentials.caCert = a), "privateKey" == t && (i.configuration.credentials.privateKeyFileName = e.name, i.configuration.credentials.privateKey = a), "Cert" == t && (i.configuration.credentials.certFileName = e.name, i.configuration.credentials.cert = a)), i.updateValidity()
                        }
                    })
                }, n.readAsText(e.file)
            }, i.clearCertFile = function(e) {
                l.$setDirty(), "caCert" == e && (i.configuration.credentials.caCertFileName = null, i.configuration.credentials.caCert = null), "privateKey" == e && (i.configuration.credentials.privateKeyFileName = null, i.configuration.credentials.privateKey = null), "Cert" == e && (i.configuration.credentials.certFileName = null, i.configuration.credentials.cert = null), i.updateValidity()
            }, i.updateValidity = function() {
                var e = !0,
                    t = i.configuration.credentials;
                t.type == n.mqttCredentialTypes["cert.PEM"].value && (t.caCert && t.cert && t.privateKey || (e = !1)), l.$setValidity("Certs", e)
            }, i.$watch("configuration", function(e, t) {
                angular.equals(e, t) || l.$setViewValue(i.configuration)
            }), l.$render = function() {
                i.configuration = l.$viewValue
            }, e(a.contents())(i)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {
                readonly: "=ngReadonly"
            },
            link: i
        }
    }
    a.$inject = ["$compile", "$mdExpansionPanel", "ruleNodeTypes"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a, n(2);
    var r = n(16),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        var t = function(t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function(e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function() {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: t
        }
    }
    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(17),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        var t = function(t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function(e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function() {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: t
        }
    }
    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(18),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l), n.ruleNodeTypes = t, n.serviceAccountFileAdded = function(e) {
                var t = new FileReader;
                t.onload = function(t) {
                    n.$apply(function() {
                        if (t.target.result) {
                            r.$setDirty();
                            var i = t.target.result;
                            i && i.length > 0 && (n.configuration.serviceAccountKeyFileName = e.name, n.configuration.serviceAccountKey = i), n.updateValidity()
                        }
                    })
                }, t.readAsText(e.file)
            }, n.clearServiceAccountFile = function() {
                r.$setDirty(), n.configuration.serviceAccountKeyFileName = null, n.configuration.serviceAccountKey = null, n.updateValidity()
            }, n.updateValidity = function() {
                var e = !0,
                    t = n.configuration;
                t.serviceAccountKeyFileName && t.serviceAccountKey || (e = !1), r.$setValidity("SAKey", e)
            }, n.$watch("configuration", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function() {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {
                readonly: "=ngReadonly"
            },
            link: n
        }
    }
    a.$inject = ["$compile", "ruleNodeTypes"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(19),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        var t = function(t, n, i, a) {
            var r = o.default;
            n.html(r), t.messageProperties = [null, "BASIC", "TEXT_PLAIN", "MINIMAL_BASIC", "MINIMAL_PERSISTENT_BASIC", "PERSISTENT_BASIC", "PERSISTENT_TEXT_PLAIN"], t.$watch("configuration", function(e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function() {
                t.configuration = a.$viewValue
            }, e(n.contents())(t);
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {
                readonly: "=ngReadonly"
            },
            link: t
        }
    }
    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(20),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l), n.ruleNodeTypes = t, n.$watch("configuration", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function() {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {
                readonly: "=ngReadonly"
            },
            link: n
        }
    }
    a.$inject = ["$compile", "ruleNodeTypes"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(21),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        var t = function(t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function(e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function() {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: t
        }
    }
    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(22),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        var t = function(t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function(e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function() {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: t
        }
    }
    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(23),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        var t = function(t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function(e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function() {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: t
        }
    }
    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(24),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        var t = function(t, n, i, a) {
            var r = o.default;
            n.html(r), t.smtpProtocols = ["smtp", "smtps"], t.$watch("configuration", function(e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function() {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {
                readonly: "=ngReadonly"
            },
            link: t
        }
    }
    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(25),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        var t = function(t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function(e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function() {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: t
        }
    }
    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(26),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l), n.ruleNodeTypes = t, n.$watch("configuration", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function() {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {
                readonly: "=ngReadonly"
            },
            link: n
        }
    }
    a.$inject = ["$compile", "ruleNodeTypes"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(27),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        var t = function(t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function(e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function() {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: t
        }
    }
    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(28),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l), n.types = t, n.$watch("configuration", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function() {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: n
        }
    }
    a.$inject = ["$compile", "types"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(29),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l), n.types = t, n.$watch("query", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.query)
            }), r.$render = function() {
                n.query = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: n
        }
    }
    a.$inject = ["$compile", "types"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(30),
        o = i(r)
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = function(t, n, i, a) {
            n.html("<div></div>"), t.$watch("configuration", function(e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function() {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: t
        }
    }
    n.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = n
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        var t = function(t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function(e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function() {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: t
        }
    }
    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(31),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l);
            var s = 186;
            n.separatorKeys = [t.KEY_CODE.ENTER, t.KEY_CODE.COMMA, s], n.$watch("configuration", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function() {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: n
        }
    }
    a.$inject = ["$compile", "$mdConstant"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(32),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l), n.ruleNodeTypes = t, n.$watch("configuration", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), n.entityDetailsList = [];
            for (var s in t.entityDetails) {
                var d = s;
                n.entityDetailsList.push(d)
            }
            r.$render = function() {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: n
        }
    }
    a.$inject = ["$compile", "ruleNodeTypes"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(33),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t, n) {
        var i = function(i, a, r, l) {
            var s = o.default;
            a.html(s);
            var d = 186;
            i.separatorKeys = [t.KEY_CODE.ENTER, t.KEY_CODE.COMMA, d], i.ruleNodeTypes = n, i.aggPeriodTimeUnits = {}, i.aggPeriodTimeUnits.MINUTES = n.timeUnit.MINUTES, i.aggPeriodTimeUnits.HOURS = n.timeUnit.HOURS, i.aggPeriodTimeUnits.DAYS = n.timeUnit.DAYS, i.aggPeriodTimeUnits.MILLISECONDS = n.timeUnit.MILLISECONDS, i.aggPeriodTimeUnits.SECONDS = n.timeUnit.SECONDS, i.$watch("configuration", function(e, t) {
                angular.equals(e, t) || l.$setViewValue(i.configuration)
            }), l.$render = function() {
                i.configuration = l.$viewValue
            }, e(a.contents())(i)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: i
        }
    }
    a.$inject = ["$compile", "$mdConstant", "ruleNodeTypes"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(34),
        o = i(r);
    n(3)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(83),
        r = i(a),
        o = n(84),
        l = i(o),
        s = n(79),
        d = i(s),
        u = n(85),
        c = i(u),
        m = n(78),
        g = i(m),
        p = n(86),
        f = i(p),
        b = n(81),
        v = i(b),
        y = n(80),
        h = i(y);
    t.default = angular.module("thingsboard.ruleChain.config.enrichment", []).directive("tbEnrichmentNodeOriginatorAttributesConfig", r.default).directive("tbEnrichmentNodeOriginatorFieldsConfig", l.default).directive("tbEnrichmentNodeDeviceAttributesConfig", d.default).directive("tbEnrichmentNodeRelatedAttributesConfig", c.default).directive("tbEnrichmentNodeCustomerAttributesConfig", g.default).directive("tbEnrichmentNodeTenantAttributesConfig", f.default).directive("tbEnrichmentNodeGetTelemetryFromDatabase", v.default).directive("tbEnrichmentNodeEntityDetailsConfig", h.default).name
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l);
            var s = 186;
            n.separatorKeys = [t.KEY_CODE.ENTER, t.KEY_CODE.COMMA, s], n.$watch("configuration", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function() {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: n
        }
    }
    a.$inject = ["$compile", "$mdConstant"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(35),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        var t = function(t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function(e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function() {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: t
        }
    }
    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(36),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        var t = function(t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function(e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function() {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: t
        }
    }
    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(37),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        var t = function(t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function(e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function() {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: t
        }
    }
    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(38),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l);
            var s = 186;
            n.separatorKeys = [t.KEY_CODE.ENTER, t.KEY_CODE.COMMA, s], n.$watch("configuration", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function() {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: n
        }
    }
    a.$inject = ["$compile", "$mdConstant"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(39),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l), n.types = t, n.$watch("configuration", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function() {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: n
        }
    }
    a.$inject = ["$compile", "types"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(40),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l), n.ruleNodeTypes = t, n.$watch("configuration", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function() {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {
                readonly: "=ngReadonly"
            },
            link: n
        }
    }
    a.$inject = ["$compile", "ruleNodeTypes"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(41),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(93),
        r = i(a),
        o = n(91),
        l = i(o),
        s = n(94),
        d = i(s),
        u = n(88),
        c = i(u),
        m = n(92),
        g = i(m),
        p = n(87),
        f = i(p),
        b = n(89),
        v = i(b);
    t.default = angular.module("thingsboard.ruleChain.config.filter", []).directive("tbFilterNodeScriptConfig", r.default).directive("tbFilterNodeMessageTypeConfig", l.default).directive("tbFilterNodeSwitchConfig", d.default).directive("tbFilterNodeCheckRelationConfig", c.default).directive("tbFilterNodeOriginatorTypeConfig", g.default).directive("tbFilterNodeCheckMessageConfig", f.default).directive("tbFilterNodeGpsGeofencingConfig", v.default).name
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t, n) {
        var i = function(i, a, r, l) {
            function s() {
                if (l.$viewValue) {
                    for (var e = [], t = 0; t < i.messageTypes.length; t++) e.push(i.messageTypes[t].value);
                    l.$viewValue.messageTypes = e, d()
                }
            }

            function d() {
                if (i.required) {
                    var e = !(!l.$viewValue.messageTypes || !l.$viewValue.messageTypes.length);
                    l.$setValidity("messageTypes", e)
                } else l.$setValidity("messageTypes", !0)
            }
            var u = o.default;
            a.html(u), i.selectedMessageType = null, i.messageTypeSearchText = null, i.ngModelCtrl = l;
            var c = [];
            for (var m in n.messageType) {
                var g = {
                    name: n.messageType[m].name,
                    value: n.messageType[m].value
                };
                c.push(g)
            }
            i.transformMessageTypeChip = function(e) {
                var n, i = t("filter")(c, {
                    name: e
                }, !0);
                return n = i && i.length ? angular.copy(i[0]) : {
                    name: e,
                    value: e
                }
            }, i.messageTypesSearch = function(e) {
                var n = e ? t("filter")(c, {
                    name: e
                }) : c;
                return n.map(function(e) {
                    return e.name
                })
            }, i.createMessageType = function(e, t) {
                var n = angular.element(t, a)[0].firstElementChild,
                    i = angular.element(n),
                    r = i.scope().$mdChipsCtrl.getChipBuffer();
                e.preventDefault(), e.stopPropagation(), i.scope().$mdChipsCtrl.appendChip(r.trim()), i.scope().$mdChipsCtrl.resetChipBuffer()
            }, l.$render = function() {
                i.messageTypesWatch && (i.messageTypesWatch(), i.messageTypesWatch = null);
                var e = l.$viewValue,
                    t = [];
                if (e && e.messageTypes)
                    for (var a = 0; a < e.messageTypes.length; a++) {
                        var r = e.messageTypes[a];
                        n.messageType[r] ? t.push(angular.copy(n.messageType[r])) : t.push({
                            name: r,
                            value: r
                        })
                    }
                i.messageTypes = t, i.messageTypesWatch = i.$watch("messageTypes", function(e, t) {
                    angular.equals(e, t) || s()
                }, !0)
            }, e(a.contents())(i)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {
                required: "=ngRequired",
                readonly: "=ngReadonly"
            },
            link: i
        }
    }
    a.$inject = ["$compile", "$filter", "types"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a, n(4);
    var r = n(42),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l), n.allowedEntityTypes = [t.entityType.device, t.entityType.asset, t.entityType.entityView, t.entityType.tenant, t.entityType.customer, t.entityType.user, t.entityType.dashboard, t.entityType.rulechain, t.entityType.rulenode], n.$watch("configuration", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function() {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: n
        }
    }
    a.$inject = ["$compile", "types"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(43),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t, n) {
        var i = function(i, a, r, l) {
            var s = o.default;
            a.html(s), i.$watch("configuration", function(e, t) {
                angular.equals(e, t) || l.$setViewValue(i.configuration)
            }), l.$render = function() {
                i.configuration = l.$viewValue
            }, i.testScript = function(e) {
                var a = angular.copy(i.configuration.jsScript);
                n.testNodeScript(e, a, "filter", t.instant("tb.rulenode.filter") + "", "Filter", ["msg", "metadata", "msgType"], i.ruleNodeId).then(function(e) {
                    i.configuration.jsScript = e, l.$setDirty()
                })
            }, e(a.contents())(i)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {
                ruleNodeId: "="
            },
            link: i
        }
    }
    a.$inject = ["$compile", "$translate", "ruleNodeScriptTest"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(44),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t, n) {
        var i = function(i, a, r, l) {
            var s = o.default;
            a.html(s), i.$watch("configuration", function(e, t) {
                angular.equals(e, t) || l.$setViewValue(i.configuration)
            }), l.$render = function() {
                i.configuration = l.$viewValue
            }, i.testScript = function(e) {
                var a = angular.copy(i.configuration.jsScript);
                n.testNodeScript(e, a, "switch", t.instant("tb.rulenode.switch") + "", "Switch", ["msg", "metadata", "msgType"], i.ruleNodeId).then(function(e) {
                    i.configuration.jsScript = e, l.$setDirty()
                })
            }, e(a.contents())(i)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {
                ruleNodeId: "="
            },
            link: i
        }
    }
    a.$inject = ["$compile", "$translate", "ruleNodeScriptTest"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(45),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        var t = function(t, n, i, a) {
            function r(e) {
                e > -1 && t.kvList.splice(e, 1)
            }

            function l() {
                t.kvList || (t.kvList = []), t.kvList.push({
                    key: "",
                    value: ""
                })
            }

            function s() {
                var e = {};
                t.kvList.forEach(function(t) {
                    t.key && (e[t.key] = t.value)
                }), a.$setViewValue(e), d()
            }

            function d() {
                var e = !0;
                t.required && !t.kvList.length && (e = !1), a.$setValidity("kvMap", e)
            }
            var u = o.default;
            n.html(u), t.ngModelCtrl = a, t.removeKeyVal = r, t.addKeyVal = l, t.kvList = [], t.$watch("query", function(e, n) {
                angular.equals(e, n) || a.$setViewValue(t.query)
            }), a.$render = function() {
                if (a.$viewValue) {
                    var e = a.$viewValue;
                    t.kvList.length = 0;
                    for (var n in e) t.kvList.push({
                        key: n,
                        value: e[n]
                    })
                }
                t.$watch("kvList", function(e, t) {
                    angular.equals(e, t) || s()
                }, !0), d()
            }, e(n.contents())(t)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {
                required: "=ngRequired",
                disabled: "=ngDisabled",
                requiredText: "=",
                keyText: "=",
                keyRequiredText: "=",
                valText: "=",
                valRequiredText: "="
            },
            link: t
        }
    }
    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(46),
        o = i(r);
    n(5)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l), n.types = t, n.$watch("query", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.query)
            }), r.$render = function() {
                n.query = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: n
        }
    }
    a.$inject = ["$compile", "types"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(47),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n = function(n, i, a, r) {
            var l = o.default;
            i.html(l), n.ruleNodeTypes = t, n.$watch("configuration", function(e, t) {
                angular.equals(e, t) || r.$setViewValue(n.configuration)
            }), r.$render = function() {
                n.configuration = r.$viewValue
            }, e(i.contents())(n)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: n
        }
    }
    a.$inject = ["$compile", "ruleNodeTypes"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(48),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(97),
        r = i(a),
        o = n(99),
        l = i(o),
        s = n(100),
        d = i(s);
    t.default = angular.module("thingsboard.ruleChain.config.transform", []).directive("tbTransformationNodeChangeOriginatorConfig", r.default).directive("tbTransformationNodeScriptConfig", l.default).directive("tbTransformationNodeToEmailConfig", d.default).name
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t, n) {
        var i = function(i, a, r, l) {
            var s = o.default;
            a.html(s), i.$watch("configuration", function(e, t) {
                angular.equals(e, t) || l.$setViewValue(i.configuration)
            }), l.$render = function() {
                i.configuration = l.$viewValue
            }, i.testScript = function(e) {
                var a = angular.copy(i.configuration.jsScript);
                n.testNodeScript(e, a, "update", t.instant("tb.rulenode.transformer") + "", "Transform", ["msg", "metadata", "msgType"], i.ruleNodeId).then(function(e) {
                    i.configuration.jsScript = e, l.$setDirty()
                })
            }, e(a.contents())(i)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {
                ruleNodeId: "="
            },
            link: i
        }
    }
    a.$inject = ["$compile", "$translate", "ruleNodeScriptTest"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(49),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        var t = function(t, n, i, a) {
            var r = o.default;
            n.html(r), t.$watch("configuration", function(e, n) {
                angular.equals(e, n) || a.$setViewValue(t.configuration)
            }), a.$render = function() {
                t.configuration = a.$viewValue
            }, e(n.contents())(t)
        };
        return {
            restrict: "E",
            require: "^ngModel",
            scope: {},
            link: t
        }
    }
    a.$inject = ["$compile"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(50),
        o = i(r)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(104),
        r = i(a),
        o = n(90),
        l = i(o),
        s = n(82),
        d = i(s),
        u = n(98),
        c = i(u),
        m = n(59),
        g = i(m),
        p = n(77),
        f = i(p),
        b = n(96),
        v = i(b),
        y = n(76),
        h = i(y),
        q = n(95),
        x = i(q),
        k = n(103),
        $ = i(k);
    t.default = angular.module("thingsboard.ruleChain.config", [r.default, l.default, d.default, c.default, g.default]).directive("tbNodeEmptyConfig", f.default).directive("tbRelationsQueryConfig", v.default).directive("tbDeviceRelationsQueryConfig", h.default).directive("tbKvMapConfig", x.default).config($.default).name
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = {
            tb: {
                rulenode: {
                    "create-entity-if-not-exists": "Create new entity if not exists",
                    "create-entity-if-not-exists-hint": "Create a new entity set above if it does not exist.",
                    "entity-name-pattern": "Name pattern",
                    "entity-name-pattern-required": "Name pattern is required",
                    "entity-name-pattern-hint": "Name pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                    "entity-type-pattern": "Type pattern",
                    "entity-type-pattern-required": "Type pattern is required",
                    "entity-type-pattern-hint": "Type pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                    "entity-cache-expiration": "Entities cache expiration time (sec)",
                    "entity-cache-expiration-hint": "Specifies maximum time interval allowed to store found entity records. 0 value means that records will never expire.",
                    "entity-cache-expiration-required": "Entities cache expiration time is required.",
                    "entity-cache-expiration-range": "Entities cache expiration time should be greater than or equal to 0.",
                    "customer-name-pattern": "Customer name pattern",
                    "customer-name-pattern-required": "Customer name pattern is required",
                    "create-customer-if-not-exists": "Create new customer if not exists",
                    "customer-cache-expiration": "Customers cache expiration time (sec)",
                    "customer-name-pattern-hint": "Customer name pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                    "customer-cache-expiration-hint": "Specifies maximum time interval allowed to store found customer records. 0 value means that records will never expire.",
                    "customer-cache-expiration-required": "Customers cache expiration time is required.",
                    "customer-cache-expiration-range": "Customers cache expiration time should be greater than or equal to 0.",
                    "start-interval": "Start Interval",
                    "end-interval": "End Interval",
                    "start-interval-time-unit": "Start Interval Time Unit",
                    "end-interval-time-unit": "End Interval Time Unit",
                    "fetch-mode": "Fetch mode",
                    "fetch-mode-hint": "If selected fetch mode 'ALL'  you able to choose telemetry sampling order.",
                    "order-by": "Order by",
                    "order-by-hint": "Select to choose telemetry sampling order.",
                    limit: "Limit",
                    "limit-hint": "Min limit value is 2, max - 1000. In case you want to fetch a single entry, select fetch mode 'FIRST' or 'LAST'.",
                    "time-unit-milliseconds": "Milliseconds",
                    "time-unit-seconds": "Seconds",
                    "time-unit-minutes": "Minutes",
                    "time-unit-hours": "Hours",
                    "time-unit-days": "Days",
                    "time-value-range": "Time value should be in a range from 1 to 2147483647'.",
                    "start-interval-value-required": "Start interval value is required.",
                    "end-interval-value-required": "End interval value is required.",
                    filter: "Filter",
                    switch: "Switch",
                    "message-type": "Message type",
                    "message-type-required": "Message type is required.",
                    "message-types-filter": "Message types filter",
                    "no-message-types-found": "No message types found",
                    "no-message-type-matching": "'{{messageType}}' not found.",
                    "create-new-message-type": "Create a new one!",
                    "message-types-required": "Message types are required.",
                    "client-attributes": "Client attributes",
                    "shared-attributes": "Shared attributes",
                    "server-attributes": "Server attributes",
                    "latest-timeseries": "Latest timeseries",
                    "data-keys": "Message data",
                    "metadata-keys": "Message metadata",
                    "relations-query": "Relations query",
                    "device-relations-query": "Device relations query",
                    "max-relation-level": "Max relation level",
                    "relation-type-pattern": "Relation type pattern",
                    "relation-type-pattern-hint": "Relation type pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                    "relation-type-pattern-required": "Relation type pattern is required",
                    "relation-types-list": "Relation types to propagate",
                    "relation-types-list-hint": "If Propagate relation types are not selected, alarms will be propagated without filtering by relation type.",
                    "unlimited-level": "Unlimited level",
                    "latest-telemetry": "Latest telemetry",
                    "attr-mapping": "Attributes mapping",
                    "source-attribute": "Source attribute",
                    "source-attribute-required": "Source attribute is required.",
                    "source-telemetry": "Source telemetry",
                    "source-telemetry-required": "Source telemetry is required.",
                    "target-attribute": "Target attribute",
                    "target-attribute-required": "Target attribute is required.",
                    "attr-mapping-required": "At least one attribute mapping should be specified.",
                    "fields-mapping": "Fields mapping",
                    "fields-mapping-required": "At least one field mapping should be specified.",
                    "source-field": "Source field",
                    "source-field-required": "Source field is required.",
                    "originator-source": "Originator source",
                    "originator-customer": "Customer",
                    "originator-tenant": "Tenant",
                    "originator-related": "Related",
                    "originator-alarm-originator": "Alarm Originator",
                    "clone-message": "Clone message",
                    transform: "Transform",
                    "default-ttl": "Default TTL in seconds",
                    "default-ttl-required": "Default TTL is required.",
                    "min-default-ttl-message": "Only 0 minimum TTL is allowed.",
                    "message-count": "Message count (0 - unlimited)",
                    "message-count-required": "Message count is required.",
                    "min-message-count-message": "Only 0 minimum message count is allowed.",
                    "period-seconds": "Period in seconds",
                    "period-seconds-required": "Period is required.",
                    "use-metadata-period-in-seconds-patterns": "Use metadata period in seconds pattern",
                    "use-metadata-period-in-seconds-patterns-hint": "If selected, rule node use period in seconds interval pattern from message metadata assuming that intervals are in the seconds.",
                    "period-in-seconds-pattern": "Period in seconds metadata pattern",
                    "period-in-seconds-pattern-required": "Period in seconds pattern is required",
                    "period-in-seconds-pattern-hint": "Period in seconds pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                    "min-period-seconds-message": "Only 1 second minimum period is allowed.",
                    originator: "Originator",
                    "message-body": "Message body",
                    "message-metadata": "Message metadata",
                    generate: "Generate",
                    "test-generator-function": "Test generator function",
                    generator: "Generator",
                    "test-filter-function": "Test filter function",
                    "test-switch-function": "Test switch function",
                    "test-transformer-function": "Test transformer function",
                    transformer: "Transformer",
                    "alarm-create-condition": "Alarm create condition",
                    "test-condition-function": "Test condition function",
                    "alarm-clear-condition": "Alarm clear condition",
                    "alarm-details-builder": "Alarm details builder",
                    "test-details-function": "Test details function",
                    "alarm-type": "Alarm type",
                    "alarm-type-required": "Alarm type is required.",
                    "alarm-severity": "Alarm severity",
                    "alarm-severity-required": "Alarm severity is required",
                    propagate: "Propagate",
                    condition: "Condition",
                    details: "Details",
                    "to-string": "To string",
                    "test-to-string-function": "Test to string function",
                    "from-template": "From Template",
                    "from-template-required": "From Template is required",
                    "from-template-hint": "From address template, use <code>${metaKeyName}</code> to substitute variables from metadata",
                    "to-template": "To Template",
                    "to-template-required": "To Template is required",
                    "mail-address-list-template-hint": "Comma separated address list, use <code>${metaKeyName}</code> to substitute variables from metadata",
                    "cc-template": "Cc Template",
                    "bcc-template": "Bcc Template",
                    "subject-template": "Subject Template",
                    "subject-template-required": "Subject Template is required",
                    "subject-template-hint": "Mail subject template, use <code>${metaKeyName}</code> to substitute variables from metadata",
                    "body-template": "Body Template",
                    "body-template-required": "Body Template is required",
                    "body-template-hint": "Mail body template, use <code>${metaKeyName}</code> to substitute variables from metadata",
                    "request-id-metadata-attribute": "Request Id Metadata attribute name",
                    "timeout-sec": "Timeout in seconds",
                    "timeout-required": "Timeout is required",
                    "min-timeout-message": "Only 0 minimum timeout value is allowed.",
                    "endpoint-url-pattern": "Endpoint URL pattern",
                    "endpoint-url-pattern-required": "Endpoint URL pattern is required",
                    "endpoint-url-pattern-hint": "HTTP URL address pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                    "request-method": "Request method",
                    "use-simple-client-http-factory": "Use simple client HTTP factory",
                    "read-timeout": "Read timeout in millis",
                    "read-timeout-hint": "The value of 0 means an infinite timeout",
                    "max-parallel-requests-count": "Max number of parallel requests",
                    "max-parallel-requests-count-hint": "The value of 0 specifies no limit in parallel processing",
                    headers: "Headers",
                    "headers-hint": "Use <code>${metaKeyName}</code> in header/value fields to substitute variables from metadata",
                    header: "Header",
                    "header-required": "Header is required",
                    value: "Value",
                    "value-required": "Value is required",
                    "topic-pattern": "Topic pattern",
                    "topic-pattern-required": "Topic pattern is required",
                    "mqtt-topic-pattern-hint": "MQTT topic pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                    "bootstrap-servers": "Bootstrap servers",
                    "bootstrap-servers-required": "Bootstrap servers value is required",
                    "other-properties": "Other properties",
                    key: "Key",
                    "key-required": "Key is required",
                    retries: "Automatically retry times if fails",
                    "min-retries-message": "Only 0 minimum retries is allowed.",
                    "batch-size-bytes": "Produces batch size in bytes",
                    "min-batch-size-bytes-message": "Only 0 minimum batch size is allowed.",
                    "linger-ms": "Time to buffer locally (ms)",
                    "min-linger-ms-message": "Only 0 ms minimum value is allowed.",
                    "buffer-memory-bytes": "Client buffer max size in bytes",
                    "min-buffer-memory-message": "Only 0 minimum buffer size is allowed.",
                    acks: "Number of acknowledgments",
                    "key-serializer": "Key serializer",
                    "key-serializer-required": "Key serializer is required",
                    "value-serializer": "Value serializer",
                    "value-serializer-required": "Value serializer is required",
                    "topic-arn-pattern": "Topic ARN pattern",
                    "topic-arn-pattern-required": "Topic ARN pattern is required",
                    "topic-arn-pattern-hint": "Topic ARN pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                    "aws-access-key-id": "AWS Access Key ID",
                    "aws-access-key-id-required": "AWS Access Key ID is required",
                    "aws-secret-access-key": "AWS Secret Access Key",
                    "aws-secret-access-key-required": "AWS Secret Access Key is required",
                    "aws-region": "AWS Region",
                    "aws-region-required": "AWS Region is required",
                    "exchange-name-pattern": "Exchange name pattern",
                    "routing-key-pattern": "Routing key pattern",
                    "message-properties": "Message properties",
                    host: "Host",
                    "host-required": "Host is required",
                    port: "Port",
                    "port-required": "Port is required",
                    "port-range": "Port should be in a range from 1 to 65535.",
                    "virtual-host": "Virtual host",
                    username: "Username",
                    password: "Password",
                    "automatic-recovery": "Automatic recovery",
                    "connection-timeout-ms": "Connection timeout (ms)",
                    "min-connection-timeout-ms-message": "Only 0 ms minimum value is allowed.",
                    "handshake-timeout-ms": "Handshake timeout (ms)",
                    "min-handshake-timeout-ms-message": "Only 0 ms minimum value is allowed.",
                    "client-properties": "Client properties",
                    "queue-url-pattern": "Queue URL pattern",
                    "queue-url-pattern-required": "Queue URL pattern is required",
                    "queue-url-pattern-hint": "Queue URL pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                    "delay-seconds": "Delay (seconds)",
                    "min-delay-seconds-message": "Only 0 seconds minimum value is allowed.",
                    "max-delay-seconds-message": "Only 900 seconds maximum value is allowed.",
                    name: "Name",
                    "name-required": "Name is required",
                    "queue-type": "Queue type",
                    "sqs-queue-standard": "Standard",
                    "sqs-queue-fifo": "FIFO",
                    "gcp-project-id": "GCP project ID",
                    "gcp-project-id-required": "GCP project ID is required",
                    "gcp-service-account-key": "GCP service account key file",
                    "gcp-service-account-key-required": "GCP service account key file is required",
                    "pubsub-topic-name": "Topic name",
                    "pubsub-topic-name-required": "Topic name is required",
                    "message-attributes": "Message attributes",
                    "message-attributes-hint": "Use <code>${metaKeyName}</code> in name/value fields to substitute variables from metadata",
                    "connect-timeout": "Connection timeout (sec)",
                    "connect-timeout-required": "Connection timeout is required.",
                    "connect-timeout-range": "Connection timeout should be in a range from 1 to 200.",
                    "client-id": "Client ID",
                    "clean-session": "Clean session",
                    "enable-ssl": "Enable SSL",
                    credentials: "Credentials",
                    "credentials-type": "Credentials type",
                    "credentials-type-required": "Credentials type is required.",
                    "credentials-anonymous": "Anonymous",
                    "credentials-basic": "Basic",
                    "credentials-pem": "PEM",
                    "username-required": "Username is required.",
                    "password-required": "Password is required.",
                    "ca-cert": "CA certificate file *",
                    "private-key": "Private key file *",
                    cert: "Certificate file *",
                    "no-file": "No file selected.",
                    "drop-file": "Drop a file or click to select a file to upload.",
                    "private-key-password": "Private key password",
                    "use-system-smtp-settings": "Use system SMTP settings",
                    "use-metadata-interval-patterns": "Use metadata interval patterns",
                    "use-metadata-interval-patterns-hint": "If selected, rule node use start and end interval patterns from message metadata assuming that intervals are in the milliseconds.",
                    "use-message-alarm-data": "Use message alarm data",
                    "check-all-keys": "Check that all selected keys are present",
                    "check-all-keys-hint": "If selected, checks that all specified keys are present in the message data and metadata.",
                    "check-relation-to-specific-entity": "Check relation to specific entity",
                    "check-relation-hint": "Checks existence of relation to specific entity or to any entity based on direction and relation type.",
                    "delete-relation-to-specific-entity": "Delete relation to specific entity",
                    "delete-relation-hint": "Deletes relation from the originator of the incoming message to the specified entity or list of entities based on direction and type.",
                    "remove-current-relations": "Remove current relations",
                    "remove-current-relations-hint": "Removes current relations from the originator of the incoming message based on direction and type.",
                    "change-originator-to-related-entity": "Change originator to related entity",
                    "change-originator-to-related-entity-hint": "Used to process submitted message as a message from another entity.",
                    "start-interval-pattern": "Start interval pattern",
                    "end-interval-pattern": "End interval pattern",
                    "start-interval-pattern-required": "Start interval pattern is required",
                    "end-interval-pattern-required": "End interval pattern is required",
                    "start-interval-pattern-hint": "Start interval pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                    "end-interval-pattern-hint": "End interval pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                    "smtp-protocol": "Protocol",
                    "smtp-host": "SMTP host",
                    "smtp-host-required": "SMTP host is required.",
                    "smtp-port": "SMTP port",
                    "smtp-port-required": "You must supply a smtp port.",
                    "smtp-port-range": "SMTP port should be in a range from 1 to 65535.",
                    "timeout-msec": "Timeout ms",
                    "min-timeout-msec-message": "Only 0 ms minimum value is allowed.",
                    "enter-username": "Enter username",
                    "enter-password": "Enter password",
                    "enable-tls": "Enable TLS",
                    "min-period-0-seconds-message": "Only 0 second minimum period is allowed.",
                    "max-pending-messages": "Maximum pending messages",
                    "max-pending-messages-required": "Maximum pending messages is required.",
                    "max-pending-messages-range": "Maximum pending messages should be in a range from 1 to 100000.",
                    "originator-types-filter": "Originator types filter",
                    "interval-seconds": "Interval in seconds",
                    "interval-seconds-required": "Interval is required.",
                    "min-interval-seconds-message": "Only 1 second minimum interval is allowed.",
                    "output-timeseries-key-prefix": "Output timeseries key prefix",
                    "output-timeseries-key-prefix-required": "Output timeseries key prefix required.",
                    "separator-hint": 'You should press "enter" to complete field input.',
                    "entity-details": "Select entity details:",
                    "entity-details-title": "Title",
                    "entity-details-country": "Country",
                    "entity-details-state": "State",
                    "entity-details-zip": "Zip",
                    "entity-details-address": "Address",
                    "entity-details-address2": "Address2",
                    "entity-details-additional_info": "Additional Info",
                    "entity-details-phone": "Phone",
                    "entity-details-email": "Email",
                    "add-to-metadata": "Add selected details to message metadata",
                    "add-to-metadata-hint": "If selected, adds the selected details keys to the message metadata instead of message data.",
                    "entity-details-list-empty": "No entity details selected.",
                    "no-entity-details-matching": "No entity details matching were found.",
                    "custom-table-name": "Custom table name",
                    "custom-table-name-required": "Table Name is required",
                    "custom-table-hint": "You should enter the table name without prefix 'cs_tb_'.",
                    "message-field": "Message field",
                    "message-field-required": "Message field is required.",
                    "table-col": "Table column",
                    "table-col-required": "Table column is required.",
                    "latitude-key-name": "Latitude key name",
                    "longitude-key-name": "Longitude key name",
                    "latitude-key-name-required": "Latitude key name is required.",
                    "longitude-key-name-required": "Longitude key name is required.",
                    "fetch-perimeter-info-from-message-metadata": "Fetch perimeter information from message metadata",
                    "perimeter-circle": "Circle",
                    "perimeter-polygon": "Polygon",
                    "perimeter-type": "Perimeter type",
                    "circle-center-latitude": "Center latitude",
                    "circle-center-latitude-required": "Center latitude is required.",
                    "circle-center-longitude": "Center longitude",
                    "circle-center-longitude-required": "Center longitude is required.",
                    "range-unit-meter": "Meter",
                    "range-unit-kilometer": "Kilometer",
                    "range-unit-foot": "Foot",
                    "range-unit-mile": "Mile",
                    "range-unit-nautical-mile": "Nautical mile",
                    "range-units": "Range units",
                    range: "Range",
                    "range-required": "Range is required.",
                    "polygon-definition": "Polygon definition",
                    "polygon-definition-required": "Polygon definition is required.",
                    "polygon-definition-hint": "Please, use the following format for manual definition of polygon: [[lat1,lon1],[lat2,lon2], ... ,[latN,lonN]].",
                    "min-inside-duration": "Minimal inside duration",
                    "min-inside-duration-value-required": "Minimal inside duration is required",
                    "min-inside-duration-time-unit": "Minimal inside duration time unit",
                    "min-outside-duration": "Minimal outside duration",
                    "min-outside-duration-value-required": "Minimal outside duration is required",
                    "min-outside-duration-time-unit": "Minimal outside duration time unit",
                    "tell-failure-if-absent": "Tell Failure",
                    "tell-failure-if-absent-hint": 'If at least one selected key doesn\'t exist the outbound message will report "Failure".',
                    "get-latest-value-with-ts": "Fetch Latest telemetry with Timestamp",
                    "get-latest-value-with-ts-hint": 'If selected, latest telemetry values will be added to the outbound message metadata with timestamp, e.g: "temp": "{\\"ts\\":1574329385897,\\"value\\":42}"',
                    "use-redis-queue": "Use redis queue for message persistence",
                    "trim-redis-queue": "Trim redis queue",
                    "redis-queue-max-size": "Redis queue max size"
                },
                "key-val": {
                    key: "Key",
                    value: "Value",
                    "remove-entry": "Remove entry",
                    "add-entry": "Add entry"
                }
            }
        };
        e.translations("en_US", t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = n
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        (0, o.default)(e)
    }
    a.$inject = ["$translateProvider"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a;
    var r = n(102),
        o = i(r)
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = angular.module("thingsboard.ruleChain.config.types", []).constant("ruleNodeTypes", {
        originatorSource: {
            CUSTOMER: {
                name: "tb.rulenode.originator-customer",
                value: "CUSTOMER"
            },
            TENANT: {
                name: "tb.rulenode.originator-tenant",
                value: "TENANT"
            },
            RELATED: {
                name: "tb.rulenode.originator-related",
                value: "RELATED"
            },
            ALARM_ORIGINATOR: {
                name: "tb.rulenode.originator-alarm-originator",
                value: "ALARM_ORIGINATOR"
            }
        },
        fetchModeType: ["FIRST", "LAST", "ALL"],
        samplingOrder: ["ASC", "DESC"],
        httpRequestType: ["GET", "POST", "PUT", "DELETE"],
        entityDetails: {
            TITLE: {
                name: "tb.rulenode.entity-details-title",
                value: "TITLE"
            },
            COUNTRY: {
                name: "tb.rulenode.entity-details-country",
                value: "COUNTRY"
            },
            STATE: {
                name: "tb.rulenode.entity-details-state",
                value: "STATE"
            },
            ZIP: {
                name: "tb.rulenode.entity-details-zip",
                value: "ZIP"
            },
            ADDRESS: {
                name: "tb.rulenode.entity-details-address",
                value: "ADDRESS"
            },
            ADDRESS2: {
                name: "tb.rulenode.entity-details-address2",
                value: "ADDRESS2"
            },
            PHONE: {
                name: "tb.rulenode.entity-details-phone",
                value: "PHONE"
            },
            EMAIL: {
                name: "tb.rulenode.entity-details-email",
                value: "EMAIL"
            },
            ADDITIONAL_INFO: {
                name: "tb.rulenode.entity-details-additional_info",
                value: "ADDITIONAL_INFO"
            }
        },
        sqsQueueType: {
            STANDARD: {
                name: "tb.rulenode.sqs-queue-standard",
                value: "STANDARD"
            },
            FIFO: {
                name: "tb.rulenode.sqs-queue-fifo",
                value: "FIFO"
            }
        },
        perimeterType: {
            CIRCLE: {
                name: "tb.rulenode.perimeter-circle",
                value: "CIRCLE"
            },
            POLYGON: {
                name: "tb.rulenode.perimeter-polygon",
                value: "POLYGON"
            }
        },
        timeUnit: {
            MILLISECONDS: {
                value: "MILLISECONDS",
                name: "tb.rulenode.time-unit-milliseconds"
            },
            SECONDS: {
                value: "SECONDS",
                name: "tb.rulenode.time-unit-seconds"
            },
            MINUTES: {
                value: "MINUTES",
                name: "tb.rulenode.time-unit-minutes"
            },
            HOURS: {
                value: "HOURS",
                name: "tb.rulenode.time-unit-hours"
            },
            DAYS: {
                value: "DAYS",
                name: "tb.rulenode.time-unit-days"
            }
        },
        rangeUnit: {
            METER: {
                value: "METER",
                name: "tb.rulenode.range-unit-meter"
            },
            KILOMETER: {
                value: "KILOMETER",
                name: "tb.rulenode.range-unit-kilometer"
            },
            FOOT: {
                value: "FOOT",
                name: "tb.rulenode.range-unit-foot"
            },
            MILE: {
                value: "MILE",
                name: "tb.rulenode.range-unit-mile"
            },
            NAUTICAL_MILE: {
                value: "NAUTICAL_MILE",
                name: "tb.rulenode.range-unit-nautical-mile"
            }
        },
        mqttCredentialTypes: {
            anonymous: {
                value: "anonymous",
                name: "tb.rulenode.credentials-anonymous"
            },
            basic: {
                value: "basic",
                name: "tb.rulenode.credentials-basic"
            },
            "cert.PEM": {
                value: "cert.PEM",
                name: "tb.rulenode.credentials-pem"
            }
        }
    }).name
}]));

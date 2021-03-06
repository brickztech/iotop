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
import ImportExport from './import-export.service';
import ImportDialogController from './import-dialog.controller';
import ImportDialogCSVController from './import-dialog-csv.controller';
import TableColumnsAssignment from './table-columns-assignment.directive';
import ExportWidgetData from './export-widget-data.service';


export default angular.module('thingsboard.importexport', [])
    .factory('importExport', ImportExport)
    .factory('exportWidgetData', ExportWidgetData)
    .controller('ImportDialogController', ImportDialogController)
    .controller('ImportDialogCSVController', ImportDialogCSVController)
    .directive('tbTableColumnsAssignment', TableColumnsAssignment)
    .name;

/* eslint-disable import/no-unresolved, import/default*/

import moment from 'moment';

/* eslint-enable import/no-unresolved, import/default */


/* eslint-disable no-undef, angular/window-service, angular/document-service */

/*@ngInject*/
export default function ExportWidgetData(importExport) {


    var service = {
        exportData: exportData
    };

    return service;

    function exportData(widget) {
        let defaultSubscription = widget.$ctx().defaultSubscription;
        var keyOffset = 0;
        var allRows = [];
        defaultSubscription.datasources.forEach(datasource => {
            let keyStartIndex = keyOffset;
            keyOffset += datasource.dataKeys.length;
            let columnsData = defaultSubscription.data.slice(keyStartIndex, keyOffset);
            allRows = allRows.concat(mergeColumnsData(columnsData));
        });
        allRows = allRows.sort((a, b) => a[0] - b[0]);
        allRows.forEach(unixTimeToString);
        allRows.unshift(getHeader(defaultSubscription.datasources[0].dataKeys));
        let csvContent = arrayToCsv(allRows);
        var blob = new Blob([csvContent], {type: 'text/csv'});
        let filename = widget.config.title || 'widget-data';
        importExport.saveBlobToFile(blob, filename + '.csv');
    }

    function mergeColumnsData(columnsData) {
        let rowsMap = {};
        columnsData.forEach((columnData, columnIndex) => {
            for (var i = 0; i < columnData.data.length; i++) {
                let timestamp = columnData.data[i][0];
                let cellData = columnData.data[i][1];
                let row = rowsMap[timestamp];
                if (!row) {
                    row = new Array(columnData.datasource.dataKeys.length + 2);
                    rowsMap[timestamp] = row;
                    row[0] = timestamp;
                    row[row.length - 1] = columnData.datasource.entityName;
                }
                row[columnIndex + 1] = cellData;
            }
        });
        let rowData = [];
        Object.keys(rowsMap).forEach(key => rowData.push(rowsMap[key]));
        return rowData;
    }

    function unixTimeToString(row) {
        row[0] = moment(new Date(row[0])).format('YYYY-MM-DD HH:mm:ss');
    }

    function getHeader(dataKeys) {
        let header = ['"timestamp"'];
        dataKeys.forEach(dataKey => header.push('"' + dataKey.name + '"'));
        header.push('"__source__"');
        return header;
    }

    function arrayToCsv(rows) {
        var content = '';
        rows.forEach((cols, idx) => {
            let line = cols.join(',');
            content += idx < rows.length ? line + '\n' : line;
        });
        return content;
    }

}

/* eslint-enable no-undef, angular/window-service, angular/document-service */

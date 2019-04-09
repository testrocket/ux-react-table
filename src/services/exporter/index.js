import * as _ from 'lodash';

export function exportToCSV(tableModel) {
  return _.chain(tableModel.rows)
    .map(row => row.cells.map(cell => cell.value).join(','))
    .flatMap()
    .join('\n')
    .value();
}


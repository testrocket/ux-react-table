import * as _ from 'lodash';

export function exportToCSV(model) {
  return _.chain(model.rows)
    .map(cells => cells.map(cell => cell.value).join(','))
    .flatMap()
    .join('\n')
    .value();
}

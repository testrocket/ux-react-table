import * as _ from 'lodash';

export function updateTableModel(model, rowKey, cellKey, value) {
  const cell = _.chain(model.rows)
    .find(row => row.key === rowKey)
    .get('cells')
    .find(cell => cell.key === cellKey)
    .value();

  cell.value = value;

  return model;
}
